#!/bin/bash
#
# rsync-wrapper.sh
#
# This script wraps the rsync command and runs repo-pulse.sh immediately after rsync completes.
# It should be used in place of the direct rsync command in any cron jobs or manual sync operations.
#
# Usage:
#   rsync-wrapper.sh --repo-name REPO_NAME --path /path/to/repo [rsync options] source destination
#   rsync-wrapper.sh --run-pulse-all
#
# Example:
#   rsync-wrapper.sh --repo-name AlmaLinux --path /mnt/aptlantis/mirror/almalinux -avz --delete rsync://mirror.example.com/almalinux/ /mnt/aptlantis/mirror/almalinux/
#

# Function to display usage information
usage() {
    echo "Usage: $0 --repo-name REPO_NAME --path /path/to/repo [rsync options] source destination"
    echo "       $0 --run-pulse-all"
    echo ""
    echo "Options:"
    echo "  --repo-name REPO_NAME    Name of the repository (e.g., AlmaLinux)"
    echo "  --path /path/to/repo     Path to the repository directory"
    echo "  --run-pulse-all          Run repo-pulse.sh for all repositories defined in /etc/aptlantis/pulse-config.yml"
    echo "  [rsync options]          Any valid rsync options"
    echo "  source                   Source URL or path for rsync"
    echo "  destination              Destination path for rsync"
    echo ""
    echo "Example:"
    echo "  $0 --repo-name AlmaLinux --path /mnt/aptlantis/mirror/almalinux -avz --delete rsync://mirror.example.com/almalinux/ /mnt/aptlantis/mirror/almalinux/"
    echo "  $0 --run-pulse-all"
    exit 1
}

# Parse command-line arguments
REPO_NAME=""
REPO_PATH=""
RSYNC_ARGS=()
RUN_PULSE_ALL=false
CONFIG_FILE="/etc/aptlantis/pulse-config.yml"

while [[ $# -gt 0 ]]; do
    case "$1" in
        --repo-name)
            REPO_NAME="$2"
            shift 2
            ;;
        --path)
            REPO_PATH="$2"
            shift 2
            ;;
        --run-pulse-all)
            RUN_PULSE_ALL=true
            shift
            ;;
        --help)
            usage
            ;;
        *)
            RSYNC_ARGS+=("$1")
            shift
            ;;
    esac
done

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Handle --run-pulse-all option
if [ "$RUN_PULSE_ALL" = true ]; then
    echo "Running repo-pulse.sh for all repositories defined in $CONFIG_FILE"

    # Check if yq is installed
    if ! command -v yq &> /dev/null; then
        echo "Error: yq is required to parse YAML files. Please install it first."
        echo "You can install it from https://github.com/mikefarah/yq"
        exit 1
    fi

    # Check if the config file exists
    if [ ! -f "$CONFIG_FILE" ]; then
        echo "Error: Config file $CONFIG_FILE not found."
        exit 1
    fi

    # Get all repositories from the config file
    repos=$(yq e '.repos[] | [.name, .path] | @csv' "$CONFIG_FILE")

    # Loop through each repository and run repo-pulse.sh
    echo "$repos" | while IFS=, read -r name path; do
        # Remove quotes from name and path
        name=$(echo "$name" | tr -d '"')
        path=$(echo "$path" | tr -d '"')

        echo "Running repo-pulse.sh for $name at $path"
        "$SCRIPT_DIR/repo-pulse.sh" --repo-name "$name" --path "$path"
    done

    # Run generate-motd.sh to update the MOTD
    echo "Updating MOTD..."
    "$SCRIPT_DIR/generate-motd.sh"

    exit 0
fi

# For normal rsync operation, check if required parameters are provided
if [ -z "$REPO_NAME" ] || [ -z "$REPO_PATH" ]; then
    echo "Error: --repo-name and --path are required parameters."
    usage
fi

# Check if rsync arguments are provided
if [ ${#RSYNC_ARGS[@]} -eq 0 ]; then
    echo "Error: No rsync arguments provided."
    usage
fi

# Run rsync with the provided arguments
echo "Running rsync for $REPO_NAME repository..."
rsync "${RSYNC_ARGS[@]}"
RSYNC_EXIT_CODE=$?

# Check if rsync was successful
if [ $RSYNC_EXIT_CODE -eq 0 ]; then
    echo "Rsync completed successfully for $REPO_NAME repository."

    # Run repo-pulse.sh to update the status.json file
    echo "Updating repository status..."
    "$SCRIPT_DIR/repo-pulse.sh" --repo-name "$REPO_NAME" --path "$REPO_PATH"
    REPO_PULSE_EXIT_CODE=$?

    if [ $REPO_PULSE_EXIT_CODE -eq 0 ]; then
        echo "Repository status updated successfully."
    else
        echo "Failed to update repository status. Check the output above for errors."
    fi
else
    echo "Rsync failed for $REPO_NAME repository with exit code $RSYNC_EXIT_CODE."

    # Run repo-pulse.sh with the --fail flag to mark the sync as failed
    echo "Marking repository status as failed..."
    "$SCRIPT_DIR/repo-pulse.sh" --repo-name "$REPO_NAME" --path "$REPO_PATH" --fail
    REPO_PULSE_EXIT_CODE=$?

    if [ $REPO_PULSE_EXIT_CODE -eq 0 ]; then
        echo "Repository status marked as failed."
    else
        echo "Failed to update repository status. Check the output above for errors."
    fi
fi

# Optionally, run generate-motd.sh to update the MOTD immediately
# Uncomment the following lines if you want to update the MOTD after each sync
# echo "Updating MOTD..."
# "$SCRIPT_DIR/generate-motd.sh"

exit $RSYNC_EXIT_CODE
