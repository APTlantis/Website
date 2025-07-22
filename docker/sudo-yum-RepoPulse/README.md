# RepoPulse

A Kotlin CLI tool that scans a repository directory and outputs a JSON status report used by the APTlantis dashboard.

## Purpose

RepoPulse is designed to be run after each mirror sync to generate a status report that can be used by the APTlantis dashboard. It scans a repository directory, collects metrics (size, file count, directory count), and generates a JSON status report.

## Features

- Scans a repository directory and collects metrics:
  - Total size in bytes
  - Total number of regular files
  - Total number of directories
- Generates a JSON status report with:
  - Repository name
  - Timestamp (ISO format)
  - Status (green, red)
  - Metrics (size, file count, directory count)
- Writes the report to a status.json file in the same directory as the repo

## Usage

```bash
# Basic usage (successful sync)
repo-pulse --repo-name AlmaLinux --path /mnt/aptlantis/mirror/almalinux

# Mark as failed
repo-pulse --repo-name AlmaLinux --path /mnt/aptlantis/mirror/almalinux --fail
```

### Command-line Arguments

- `--repo-name` (required): Name of the distro/repo (e.g., "AlmaLinux")
- `--path` (required): Filesystem path to the repo
- `--fail` (optional): Flag to mark the status as "red" (failed)

## Output

The tool generates a JSON file named `status.json` in the same directory as the repository. The JSON file contains the following information:

```json
{
  "name": "AlmaLinux",
  "lastUpdated": "2025-05-28T15:12:34",
  "status": "green",
  "sizeBytes": 4878123653,
  "fileCount": 138445,
  "dirCount": 3344
}
```

### Status Rules

- If run after successful sync → "green"
- If `--fail` flag passed → "red"

## Building

To build the tool, run the following commands:

```bash
cd repo-pulse
./gradlew build
```

This will generate a JAR file in the `build/libs` directory.

### Direct Compilation (Not Recommended)

The recommended way to build this tool is using Gradle as described above. However, if you need to compile it directly with kotlinc, you'll need to include the org.json library in the classpath.

#### Using Helper Scripts

For convenience, helper scripts are provided to automate the direct compilation process:

- Windows: `compile-direct.bat`
- Unix/Linux: `compile-direct.sh`

These scripts will:
1. Download the org.json library if it's not already present
2. Compile RepoPulse.kt with kotlinc, including the JSON library in the classpath
3. Generate a standalone JAR file (repo-pulse.jar)

Simply run the appropriate script for your platform:

```bash
# Windows
compile-direct.bat

# Unix/Linux
chmod +x compile-direct.sh
./compile-direct.sh
```

#### Manual Compilation

If you prefer to compile manually:

```bash
# Download the org.json library if you don't have it
# You can download it from Maven Central: https://repo1.maven.org/maven2/org/json/json/20230618/json-20230618.jar

# Compile with kotlinc including the JSON library in the classpath
kotlinc -cp path/to/json-20230618.jar RepoPulse.kt -include-runtime -d repo-pulse.jar
```

Replace `path/to/json-20230618.jar` with the actual path to the JSON library JAR file.

## Running

You can run the tool using the provided shell script:

```bash
chmod +x repo-pulse.sh
./repo-pulse.sh --repo-name AlmaLinux --path /mnt/aptlantis/mirror/AlpineLinux
```

Or directly using the JAR file:

```bash
java -jar build/libs/repo-pulse-1.0-SNAPSHOT.jar --repo-name AlmaLinux --path /mnt/aptlantis/mirror/almalinux
```

## Dependencies

- Java 17 or higher
- Kotlin 1.9.0
- org.json:json:20230618
