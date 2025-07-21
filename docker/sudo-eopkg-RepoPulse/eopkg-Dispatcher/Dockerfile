FROM python:3.13-slim

WORKDIR /app

# Install rsync + bash (required by the wrapper)
RUN apt-get update && apt-get install -y rsync bash && apt-get clean

# Install Python dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy dispatcher logic
COPY dispatcher.py .
COPY Dyspatch-Schedule.json .

# Copy wrapper script into the image
COPY rsync-wrapper.sh /usr/local/bin/rsync-wrapper.sh
RUN chmod +x /usr/local/bin/rsync-wrapper.sh

CMD ["python", "dispatcher.py"]
