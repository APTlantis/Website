import time, re, json, os, hmac, hashlib
from datetime import datetime
from pymongo import MongoClient

SALT = os.getenv("HASH_SALT", "change_this_salt").encode()

def hash_ip(ip_str: str) -> str:
    return hmac.new(SALT, ip_str.encode(), hashlib.sha256).hexdigest()

LOG_PATH = "/var/log/rsyncd.log"
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")

client = MongoClient(MONGODB_URI)
collection = client["aptlantis"]["rsync_logs"]

CONNECT_RE = re.compile(r'(?P<date>[\d/]+) (?P<time>[\d:]+) .* connect from (?P<ip>[\d\.]+)')
TRANSFER_RE = re.compile(r'(?P<date>[\d/]+) (?P<time>[\d:]+) .* sent (?P<bytes>\d+) bytes.*total size (?P<size>\d+)')

def tail_log():
    with open(LOG_PATH, 'r') as f:
        f.seek(0, 2)
        while True:
            line = f.readline()
            if not line:
                time.sleep(0.5)
                continue
            yield line.strip()

def parse_and_store():
    session = {}
    for line in tail_log():
        if match := CONNECT_RE.match(line):
            ts = datetime.strptime(f"{match['date']} {match['time']}", "%Y/%m/%d %H:%M:%S")
            session = {
                "timestamp": ts.isoformat(),
                "remote_id": hash_ip(match["ip"]),
            }
        elif match := TRANSFER_RE.match(line):
            ts = datetime.strptime(f"{match['date']} {match['time']}", "%Y/%m/%d %H:%M:%S")
            session.update({
                "bytes_sent": int(match["bytes"]),
                "total_size": int(match["size"]),
                "end_timestamp": ts.isoformat()
            })
            collection.insert_one(session)
            session = {}

if __name__ == "__main__":
    parse_and_store()
