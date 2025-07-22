// =========================================================
// Script Name: iso_hasher.go
// Description: Generates cryptographic hashes for ISO files and creates TOML files with hash information
// Author: APTlantis Team
// Creation Date: 2025-05-17
// Last Modified: 2025-05-21
// 
// Dependencies:
// - github.com/cloudflare/circl/xof/k12
// - github.com/jzelinskie/whirlpool
// - golang.org/x/crypto/blake2b
// - golang.org/x/crypto/ripemd160
// - golang.org/x/crypto/sha3
// - lukechampine.com/blake3
// 
// Usage:
//   go run iso_hasher.go [options]
// 
// Options:
//   -dir string        Root directory to scan for ISO files (default "/mnt/aptlantis/isos/")
//   -verbose           Enable verbose output
//   -skip-existing     Skip files that already have a TOML file (default true)
//   -progress          Show progress when hashing large files (default true)
//   -workers int       Number of parallel workers for hashing ISO files (default 4)
// =========================================================

package main

import (
    "crypto/sha256"
    "crypto/sha512"
    "encoding/hex"
    "flag"
    "fmt"
    "io"
    "log"
    "os"
    "path/filepath"
    "strings"
    "sync"
    "time"

    "github.com/cloudflare/circl/xof/k12"
    "github.com/jzelinskie/whirlpool"
    "golang.org/x/crypto/blake2b"
    "golang.org/x/crypto/ripemd160"
    "golang.org/x/crypto/sha3"
    "lukechampine.com/blake3"
)

var (
    rootDir      string
    verbose      bool
    skipExist    bool
    showProgress bool
    workers      int
)

func init() {
    flag.StringVar(&rootDir, "dir", "F:\\TempleOS\\TempleOS-ISO\\TempleOS", "Root directory to scan for ISO files")
    flag.BoolVar(&verbose, "verbose", false, "Enable verbose output")
    flag.BoolVar(&skipExist, "skip-existing", true, "Skip files that already have a TOML file")
    flag.BoolVar(&showProgress, "progress", true, "Show progress when hashing large files")
    flag.IntVar(&workers, "workers", 4, "Number of parallel workers for hashing ISO files")
    flag.Parse()
}

// Worker function to process ISO files
func worker(id int, paths <-chan string, results chan<- workerResult, wg *sync.WaitGroup) {
    defer wg.Done()

    for path := range paths {
        result := workerResult{
            processed: 0,
            skipped:   0,
            errors:    0,
        }

        tomlPath := path + ".toml"

        // Check if TOML file already exists and skip if requested
        if skipExist {
            if _, err := os.Stat(tomlPath); err == nil {
                if verbose {
                    log.Printf("Worker %d: Skipping existing TOML file: %s\n", id, tomlPath)
                }
                result.skipped = 1
                results <- result
                continue
            }
        }

        if verbose {
            log.Printf("Worker %d: Processing ISO file: %s\n", id, path)
        }

        // Generate hashes
        sha256Hash, whirlpoolHash, k12Hash, ripemd160Hash, sha3256hash, blake2bHash, blake3Hash, sha512Hash, fileSize, err := generateHashes(path)
        if err != nil {
            log.Printf("Worker %d: Error generating hashes for %s: %v\n", id, path, err)
            result.errors = 1
            results <- result
            continue
        }

        // Create TOML file in the same directory as the ISO file
        err = createTomlFile(tomlPath, filepath.Base(path), fileSize, sha256Hash, whirlpoolHash, k12Hash, ripemd160Hash, sha3256hash, blake2bHash, blake3Hash, sha512Hash)
        if err != nil {
            log.Printf("Worker %d: Error creating TOML file for %s: %v\n", id, path, err)
            result.errors = 1
            results <- result
            continue
        }

        result.processed = 1
        if verbose {
            log.Printf("Worker %d: Successfully created TOML file: %s\n", id, tomlPath)
        }
        results <- result
    }
}

// Result structure for worker statistics
type workerResult struct {
    processed int
    skipped   int
    errors    int
}

func main() {
    startTime := time.Now()
    log.Printf("Starting ISO hashing in directory: %s with %d workers\n", rootDir, workers)

    // Check if root directory exists
    if _, err := os.Stat(rootDir); os.IsNotExist(err) {
        log.Fatalf("Error: Directory %s does not exist\n", rootDir)
    }

    // Create channels for communication
    paths := make(chan string, 100)
    results := make(chan workerResult, 100)

    // Create wait group for workers
    var wg sync.WaitGroup

    // Start worker goroutines
    for i := 0; i < workers; i++ {
        wg.Add(1)
        go worker(i, paths, results, &wg)
    }

    // Start a goroutine to collect results
    var processedCount, skippedCount, errorCount int
    go func() {
        for result := range results {
            processedCount += result.processed
            skippedCount += result.skipped
            errorCount += result.errors
        }
    }()

    // Walk the directory and send ISO files to the workers
    err := filepath.Walk(rootDir, func(path string, info os.FileInfo, err error) error {
        if err != nil {
            log.Printf("Error accessing path %s: %v\n", path, err)
            errorCount++
            return nil // Continue with next file
        }

        // Skip directories
        if info.IsDir() {
            return nil
        }

        // Process only .iso files
        if strings.HasSuffix(strings.ToLower(path), ".iso") {
            paths <- path
        }

        return nil
    })

    if err != nil {
        log.Fatalf("Error walking directory: %v\n", err)
    }

    // Close the paths channel to signal that no more paths will be sent
    close(paths)

    // Wait for all workers to complete
    wg.Wait()

    // Close the result channel
    close(results)

    // Wait a moment for the results collector to finish
    time.Sleep(100 * time.Millisecond)

    duration := time.Since(startTime)
    log.Printf("Completed in %v\n", duration)
    log.Printf("Summary: Processed %d files, Skipped %d files, Encountered %d errors\n",
        processedCount, skippedCount, errorCount)
}

func generateHashes(filePath string) (string, string, string, string, string, string, string, string, int64, error) {
    file, err := os.Open(filePath)
    if err != nil {
        return "", "", "", "", "", "", "", "", 0, err
    }
    defer file.Close()

    // Get file size
    fileInfo, err := file.Stat()
    if err != nil {
        return "", "", "", "", "", "", "", "", 0, err
    }
    fileSize := fileInfo.Size()

    // Initialize hash functions
    sha256Hasher := sha256.New()
    whirlpoolHasher := whirlpool.New()
    ripemd160Hasher := ripemd160.New()
    sha3256hasher := sha3.New256()
    blake2bHasher, _ := blake2b.New256(nil)
    blake3Hasher := blake3.New(32, nil)
    sha512Hasher := sha512.New()

    // Create a multi-writer for all standard hash functions
    multiWriter := io.MultiWriter(
        sha256Hasher,
        whirlpoolHasher,
        ripemd160Hasher,
        sha3256hasher,
        blake2bHasher,
        blake3Hasher,
        sha512Hasher,
    )

    // Initialize KangarooTwelve hasher
    k12Hasher := k12.NewDraft10([]byte(""))

    // Reset file position to beginning
    if _, err := file.Seek(0, 0); err != nil {
        return "", "", "", "", "", "", "", "", 0, err
    }

    // Variables for progress reporting
    var bytesProcessed int64
    lastProgressUpdate := time.Now()
    progressInterval := 3 * time.Second // Update progress every 3 seconds

    // Read file in chunks and update all hash functions
    buffer := make([]byte, 1024*1024) // 1MB buffer for efficient reading
    for {
        n, err := file.Read(buffer)
        if err != nil && err != io.EOF {
            return "", "", "", "", "", "", "", "", 0, err
        }
        if n == 0 {
            break
        }

        // Update all standard hash functions
        if _, err := multiWriter.Write(buffer[:n]); err != nil {
            return "", "", "", "", "", "", "", "", 0, err
        }

        // Update KangarooTwelve
        if _, err := k12Hasher.Write(buffer[:n]); err != nil {
            return "", "", "", "", "", "", "", "", 0, err
        }

        // Update progress
        bytesProcessed += int64(n)

        // Show progress if enabled and enough time has passed since last update
        if showProgress && time.Since(lastProgressUpdate) > progressInterval {
            percentComplete := float64(bytesProcessed) / float64(fileSize) * 100
            log.Printf("Processing %s: %.1f%% complete (%.2f GB / %.2f GB)\n",
                filepath.Base(filePath),
                percentComplete,
                float64(bytesProcessed)/(1024*1024*1024),
                float64(fileSize)/(1024*1024*1024))
            lastProgressUpdate = time.Now()
        }
    }

    // Show 100% progress at the end if progress reporting is enabled
    if showProgress {
        log.Printf("Processing %s: 100.0%% complete (%.2f GB)\n",
            filepath.Base(filePath),
            float64(fileSize)/(1024*1024*1024))
    }

    // Get hash values
    sha256Hash := hex.EncodeToString(sha256Hasher.Sum(nil))
    whirlpoolHash := hex.EncodeToString(whirlpoolHasher.Sum(nil))
    ripemd160Hash := hex.EncodeToString(ripemd160Hasher.Sum(nil))
    sha3256hash := hex.EncodeToString(sha3256hasher.Sum(nil))
    blake2bHash := hex.EncodeToString(blake2bHasher.Sum(nil))
    blake3Hash := hex.EncodeToString(blake3Hasher.Sum(nil))
    sha512Hash := hex.EncodeToString(sha512Hasher.Sum(nil))

    // For KangarooTwelve
    k12Output := make([]byte, 32) // 32 bytes (256 bits) output
    k12Hasher.Read(k12Output)
    k12Hash := hex.EncodeToString(k12Output)

    return sha256Hash, whirlpoolHash, k12Hash, ripemd160Hash, sha3256hash, blake2bHash, blake3Hash, sha512Hash, fileSize, nil
}

func createTomlFile(tomlPath, filename string, fileSize int64, sha256Hash, whirlpoolHash, k12Hash, ripemd160Hash, sha3_256Hash, blake2bHash, blake3Hash, sha512Hash string) error {
    // Create TOML file
    file, err := os.Create(tomlPath)
    if err != nil {
        return err
    }
    defer file.Close()

    // ASCII art for the top of the file
    asciiArt := `
                                                                 #####
                                                                #######
                   #                                            ##O#O##
  ######          ###                                           #VVVVV#
    ##             #                                          ##  VVV  ##
    ##         ###    ### ####   ###    ###  ##### #####     #          ##
    ##        #  ##    ###    ##  ##     ##    ##   ##      #            ##
    ##       #   ##    ##     ##  ##     ##      ###        #            ###
    ##          ###    ##     ##  ##     ##      ###       QQ#           ##Q
    ##       # ###     ##     ##  ##     ##     ## ##    QQQQQQ#       #QQQQQQ
    ##      ## ### #   ##     ##  ###   ###    ##   ##   QQQQQQQ#     #QQQQQQQ
  ############  ###   ####   ####   #### ### ##### #####   QQQQQ#######QQQQQ

`

    // Current date and time
    currentTime := time.Now().Format("2006-01-02 15:04:05")

    // Write TOML content
    tomlContent := fmt.Sprintf(`%s
# Generated on: %s
# By The APTlantis.net Team
filename = "%s"
size = %d

[hashes]
sha256 = "%s"
sha512 = "%s"
whirlpool = "%s"
ripemd160 = "%s"
kangaroo12 = "%s"
sha3_256 = "%s"
blake2b = "%s"
blake3 = "%s"
`, asciiArt, currentTime, filename, fileSize, sha256Hash, sha512Hash, whirlpoolHash, ripemd160Hash, k12Hash, sha3_256Hash, blake2bHash, blake3Hash)

    _, err = file.WriteString(tomlContent)
    return err
}
