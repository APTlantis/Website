---toml
title = "ISO Hasher - Server Setup and Usage Guide"
description = "A Go tool that generates cryptographic hashes for ISO files and creates TOML files with hash information"
date = "2025-07-16"
version = "1.0.0"
author = "APTlantis Team"
tags = ["go", "iso", "hash", "cryptography", "toml"]
---

# ISO Hasher - Server Setup and Usage Guide

This guide provides step-by-step instructions for setting up and running the ISO hasher script.

## Features

- Recursively scans a directory for ISO files
- Generates multiple cryptographic hashes for each ISO:
  - **Standard**: SHA-256, SHA-512
  - **Legacy/Retro**: Whirlpool, RIPEMD-160
  - **Post-Quantum Oriented**: KangarooTwelve, SHA-3/Keccak
  - **Modern/Fast**: BLAKE2b, BLAKE3
- Creates a TOML file for each ISO in the root directory
- Includes ASCII art and creation timestamp in each TOML file
- Shows progress when processing large files

## Prerequisites

1. **Go Installation**: You need Go 1.16 or later installed on your server.
   ```bash
   # Check if Go is installed and its version
   go version

   # If not installed, install Go (example for Ubuntu/Debian)
   sudo apt update
   sudo apt install golang-go

   # For other distributions, follow the official Go installation guide:
   # https://golang.org/doc/install
   ```

2. **Disk Space**: Ensure you have enough disk space for the ISO files and their corresponding TOML files.

## Setup Instructions

1. **Create a directory for the project**:
   ```bash
   mkdir -p ~/iso-hasher
   cd ~/iso-hasher
   ```

2. **Create the Go module files**:
   ```bash
   go mod init iso_hasher
   ```

3. **Create the script file**:
   ```bash
   nano iso_hasher.go
   ```

4. **Copy the script code** into the file and save it (Ctrl+O, Enter, Ctrl+X).

5. **Install dependencies**:
   ```bash
   go mod tidy
   ```

6. **Build the executable**:
   ```bash
   go build -o iso_hasher
   ```

## Running the Script

### Basic Usage

```bash
# Run with default settings (scans /mnt/aptlantis/isos/)
./iso_hasher

# Specify a different directory to scan
./iso_hasher -dir="/s/ISOS"

# Run with verbose output
./iso_hasher -verbose

# Run without progress reporting
./iso_hasher -progress=false

# Process files that already have TOML files
./iso_hasher -skip-existing=false
```

### Command-line Flags

The script supports the following command-line flags:

- `-dir`: Root directory to scan for ISO files (default: "/mnt/aptlantis/isos/")
- `-verbose`: Enable verbose output (default: false)
- `-skip-existing`: Skip files that already have a TOML file (default: true)
- `-progress`: Show progress when hashing large files (default: true)

### Running as a Background Process

For long-running operations, you might want to run the script in the background:

```bash
# Run in background and redirect output to a log file
nohup ./iso_hasher > iso_hasher.log 2>&1 &

# Check the process
ps aux | grep iso_hasher

# Monitor the log file in real-time
tail -f iso_hasher.log
```

## Monitoring Progress

The script provides progress updates every 3 seconds when processing large files. These updates include:
- Percentage complete
- Amount of data processed (in GB)
- Total file size (in GB)

Example output:
```
2023/05/10 12:34:56 Processing ubuntu-22.04.iso: 45.2% complete (2.34 GB / 5.18 GB)
```

## Handling Errors

The script includes error handling and will continue processing other files if an error occurs with one file. At the end of execution, it provides a summary of:
- Number of files processed
- Number of files skipped
- Number of errors encountered

If you encounter persistent errors, check:
1. Disk space availability
2. File permissions
3. The log file for specific error messages

## Example Output

For each ISO file, the script creates a TOML file in the root directory with the following format:

```toml


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


# Generated on: 2025-07-05 09:04:50

filename = "deepin-desktop-community-20.9-amd64.iso"
size = 3884691456

[hashes]
sha256 = "da7de4e0314c0eab80c072e3208ef5a051421caf830b02c1a50184c5c52dcb79"
sha512 = "afea29af878201265dcb572b9a748c456f0dfc6c51f0d1a238c802d4fcabbc0c04393493fd21df95d947d0e802d7744eefbba7127170dc6f69079578ed353272"
whirlpool = "e50305c65a0c0ba17b3ba1bb9b902334d667579739a2215dea8ff658730b0379b2e29cdbc9e1a339cef9e7cafa72ecc7f2f66a9ef4d5a98727b4e3571aeaacd3"
ripemd160 = "32e4c29d43342935150820a20d6199b8a72a8a62"
kangaroo12 = "d9bf259acf52cdf20f6efad1054cef1b9bbd6fe7ed7db77d99f582b692afd81d"
sha3_256 = "8c58e8da6c6a5c3e4c1cd8dbfeda82d7110491354d68ccb3e20d4a677ec62824"
blake2b = "62edc76df22b8b9a36f73fb442edea12126581a7dc60961d0888e5cc9c173f85"
blake3 = "10d3314c83a3af056a406008562ef037ad43da37ec4635d1b646ce42142e882f"

```

All TOML files are created directly in the root directory (`/mnt/aptlantis/isos/`), regardless of where the ISO files are located in the directory structure.

## Performance Considerations

- The script uses a 1MB buffer for efficient file reading
- For very large ISO files, the hashing process can take significant time
- Consider running the script during off-peak hours for busy servers
- The script is designed to be memory-efficient, even with very large files

## Troubleshooting

1. **"Directory does not exist" error**:
   - Check that the specified directory path is correct
   - Ensure the user running the script has permission to access the directory

2. **Slow performance**:
   - This is normal for large ISO files
   - Check if other processes are consuming disk I/O
   - Consider running with a higher process priority: `nice -n -10 ./iso_hasher`

3. **Dependencies issues**:
   - If you encounter dependency errors, run `go mod tidy` again
   - Ensure your Go version is 1.16 or later
