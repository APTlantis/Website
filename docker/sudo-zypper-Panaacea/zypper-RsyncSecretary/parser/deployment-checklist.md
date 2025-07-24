🏁 Deployment Checklist
Here’s a final punch list to keep it smooth:

🐳 Docker
 docker-compose.yml includes mongo and rsync-parser

 HASH_SALT is passed securely (consider .env or Docker secrets if on swarm)

 rsyncd.log is mounted read-only

 MONGODB_URI is pointed to your internal hostname or external service

🛡️ Privacy & Compliance
 IPs are salted+hashed, not stored

 Only minimal metadata is written (timestamp, hashed ID, bytes)

 No environment leaks, no user IDs or filenames

 Schema is documented in case of audit or internal export

🧪 Testing
 Simulate rsync traffic → confirm log file gets written

 Confirm entries appear in Mongo:

docker exec -it mongo mongosh
use aptlantis
db.rsync_logs.find().pretty()