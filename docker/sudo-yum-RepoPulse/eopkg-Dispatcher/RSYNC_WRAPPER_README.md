# Rsync Wrapper for RepoPulse

This document explains how to use the `rsync-wrapper.sh` script to automatically run `repo-pulse.sh` immediately after rsync completes.

## Overview

The `rsync-wrapper.sh` script is designed to:

1. Wrap the rsync command used for repository syncing
2. Run `repo-pulse.sh` immediately after rsync completes to update the repository status
3. Handle both successful and failed rsync operations

This ensures that the status.json files are always up-to-date immediately after each repository sync, rather than waiting for the next scheduled run of the generate-motd.sh script.

## Usage

### Basic Usage

```bash
./rsync-wrapper.sh --repo-name REPO_NAME --path /path/to/repo [rsync options] source destination
```

### Parameters

- `--repo-name REPO_NAME`: Name of the repository (e.g., AlmaLinux)
- `--path /path/to/repo`: Path to the repository directory
- `[rsync options]`: Any valid rsync options
- `source`: Source URL or path for rsync
- `destination`: Destination path for rsync

### Example

```bash
./rsync-wrapper.sh --repo-name AlmaLinux --path /mnt/aptlantis/mirror/almalinux -avz --delete rsync://mirror.example.com/almalinux/ /mnt/aptlantis/mirror/almalinux/
```

## Integration with Cron Jobs

To integrate the `rsync-wrapper.sh` script with your existing cron jobs, simply replace the direct rsync command with the `rsync-wrapper.sh` command.

### Before

```bash
# In your crontab or sync script
rsync -avz --delete rsync://mirror.example.com/almalinux/ /mnt/aptlantis/mirror/almalinux/
```

### After

```bash
# In your crontab or sync script
/path/to/rsync-wrapper.sh --repo-name AlmaLinux --path /mnt/aptlantis/mirror/almalinux -avz --delete rsync://mirror.example.com/almalinux/ /mnt/aptlantis/mirror/almalinux/
```

## How It Works

1. The script runs the rsync command with the provided arguments
2. If rsync is successful (exit code 0), it runs `repo-pulse.sh` to update the status.json file
3. If rsync fails (non-zero exit code), it runs `repo-pulse.sh` with the `--fail` flag to mark the sync as failed
4. The script preserves the original exit code from rsync, so any error handling in your existing scripts will still work

## Updating the MOTD

By default, the script does not run `generate-motd.sh` to update the MOTD immediately after each sync. This is because the MOTD is typically updated on a schedule (e.g., hourly) by a separate cron job.

If you want to update the MOTD immediately after each sync, you can uncomment the following lines in the script:

```bash
# Uncomment the following lines if you want to update the MOTD after each sync
# echo "Updating MOTD..."
# "$SCRIPT_DIR/generate-motd.sh"
```

## Troubleshooting

If you encounter any issues with the script, check the following:

1. Make sure the script has execute permissions:
   ```bash
   chmod +x rsync-wrapper.sh
   ```

2. Make sure the paths to `repo-pulse.sh` and `generate-motd.sh` are correct.

3. Check the exit code from rsync to ensure it's being handled correctly.

## Additional Resources

For more information, please refer to the following files:

- `README.md`: General information about the repo-pulse tool.
- `generate-motd-README.md`: Information about the generate-motd script.
- `AUTOMATION_SETUP.md`: Detailed instructions on how to set up and verify the crontab entries.