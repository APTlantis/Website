#!/bin/sh
# Script to initialize TheLounge with a user and IRC network configuration

# Wait for TheLounge to start
sleep 5

# Check if user already exists
if ! thelounge list | grep -q "aptlantis"; then
    # Create user 'aptlantis' with password 'hh4923'
    echo "Creating user 'aptlantis'..."
    thelounge add aptlantis --password hh4923
    
    # Create a network configuration file for the user
    USER_FILE="/var/opt/thelounge/users/aptlantis.json"
    
    # Wait for the user file to be created
    while [ ! -f "$USER_FILE" ]; do
        sleep 1
    done
    
    # Read the current user file
    USER_DATA=$(cat "$USER_FILE")
    
    # Add the IRC network configuration
    # This uses jq to modify the JSON file, but we'll use sed as a simpler alternative
    sed -i 's/"networks": \[\]/"networks": \[{"name":"Aptlantis IRC","host":"apt-Ergo","port":6667,"tls":false,"rejectUnauthorized":false,"nick":"aptlantis","username":"aptlantis","realname":"Aptlantis User","join":"#aptlantis,#help,#mirrors","password":"","commands":[],"channels":[],"uuid":"aptlantis-network"}\]/' "$USER_FILE"
    
    echo "User 'aptlantis' configured with Aptlantis IRC network."
fi

# Keep the container running
tail -f /dev/null