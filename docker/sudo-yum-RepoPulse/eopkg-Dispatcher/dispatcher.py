import json
import subprocess
from datetime import datetime
from croniter import croniter

with open("schedule.json") as f:
    jobs = json.load(f)

now = datetime.now()

for job in jobs:
    itr = croniter(job["Dispatch-Schedule.json"], now.replace(second=0, microsecond=0))
    if itr.get_prev(datetime) == now.replace(second=0, microsecond=0):
        print(f"Launching {job['container']} at {now}")
        subprocess.run(job["command"].split())

