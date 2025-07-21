## apt-Watcher

- Once the rsync jobs are completed the rsync wrapper proDuces a json report file that is sent back to the central server.
- This module is designed to watch for those json report files and update the database with the results.
- It will also run the generate-motd.py script if we haven't replaced that with a more efficient solution.