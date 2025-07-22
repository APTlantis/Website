# PowerShell script to set up the directory structure for Aptlantis Docker volumes
# Run this script before starting the Docker containers

# Create the base volumes directory
$volumesDir = ".\volumes"
New-Item -ItemType Directory -Force -Path $volumesDir | Out-Null
Write-Host "Created base volumes directory: $volumesDir"

# Define the layers and their services
$structure = @{
    "vanguard" = @(
        "bunkerweb",
        "certbot\conf",
        "certbot\cloudflare",
        "crowdsec\config",
        "crowdsec\data",
        "fail2ban\data",
        "suricata",
        "vault",
        "consul-template"
    )
    "nexus" = @(
        "mongodb",
        "portainer",
        "prometheus\config",
        "prometheus\data",
        "grafana",
        "loki",
        "promtail",
        "heimdall"
    )
    "conventicle" = @(
        "ergo",
        "thelounge",
        "ollama"
    )
    "repopulse" = @(
        "dispatcher",
        "rsync-workers",
        "rsync-secretary",
        "submission-secretary"
    )
}

# Create the directory structure
foreach ($layer in $structure.Keys) {
    $layerDir = Join-Path -Path $volumesDir -ChildPath $layer
    New-Item -ItemType Directory -Force -Path $layerDir | Out-Null
    Write-Host "Created layer directory: $layerDir"
    
    foreach ($service in $structure[$layer]) {
        $serviceDir = Join-Path -Path $layerDir -ChildPath $service
        New-Item -ItemType Directory -Force -Path $serviceDir | Out-Null
        Write-Host "  Created service directory: $serviceDir"
    }
}

# Create special files
$cloudflareCredentials = Join-Path -Path $volumesDir -ChildPath "vanguard\certbot\cloudflare\credentials.ini"
$cloudflareContent = @"
# Cloudflare API credentials used by Certbot
dns_cloudflare_email = your@email.com
dns_cloudflare_api_key = your_global_api_key
"@
Set-Content -Path $cloudflareCredentials -Value $cloudflareContent
Write-Host "Created Cloudflare credentials template: $cloudflareCredentials"

# Create Prometheus config
$prometheusConfig = Join-Path -Path $volumesDir -ChildPath "nexus\prometheus\config\prometheus.yml"
$prometheusContent = @"
global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

scrape_configs:
  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]

  - job_name: "docker"
    static_configs:
      - targets: ["nexus-cadvisor:8080"]

  - job_name: "node"
    static_configs:
      - targets: ["nexus-node-exporter:9100"]

  - job_name: "vanguard"
    static_configs:
      - targets: ["vanguard-crowdsec:6060"]

  - job_name: "repopulse"
    static_configs:
      - targets: [
        "repopulse-dispatcher:9100",
        "repopulse-rsync-workers:9100",
        "repopulse-rsync-secretary:9100",
        "repopulse-submission-secretary:9100"
      ]
"@
Set-Content -Path $prometheusConfig -Value $prometheusContent
Write-Host "Created Prometheus config: $prometheusConfig"

# Create Loki config
$lokiConfig = Join-Path -Path $volumesDir -ChildPath "nexus\loki\loki-config.yaml"
$lokiContent = @"
auth_enabled: false

server:
  http_listen_port: 3100

ingester:
  lifecycler:
    address: 127.0.0.1
    ring:
      kvstore:
        store: inmemory
      replication_factor: 1
    final_sleep: 0s
  chunk_idle_period: 5m
  chunk_retain_period: 30s

schema_config:
  configs:
    - from: 2020-10-24
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

storage_config:
  boltdb_shipper:
    active_index_directory: /tmp/loki/boltdb-shipper-active
    cache_location: /tmp/loki/boltdb-shipper-cache
    cache_ttl: 24h
    shared_store: filesystem
  filesystem:
    directory: /tmp/loki/chunks

limits_config:
  enforce_metric_name: false
  reject_old_samples: true
  reject_old_samples_max_age: 168h

chunk_store_config:
  max_look_back_period: 0s

table_manager:
  retention_deletes_enabled: false
  retention_period: 0s
"@
Set-Content -Path $lokiConfig -Value $lokiContent
Write-Host "Created Loki config: $lokiConfig"

# Create Promtail config
$promtailConfig = Join-Path -Path $volumesDir -ChildPath "nexus\promtail\promtail-config.yaml"
$promtailContent = @"
server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://nexus-loki:3100/loki/api/v1/push

scrape_configs:
  - job_name: system
    static_configs:
      - targets:
          - localhost
        labels:
          job: varlogs
          __path__: /var/log/*log

  - job_name: docker
    static_configs:
      - targets:
          - localhost
        labels:
          job: docker
          __path__: /var/lib/docker/containers/*/*log

  - job_name: aptlantis
    static_configs:
      - targets:
          - localhost
        labels:
          job: aptlantis
          __path__: /var/log/aptlantis/*log
"@
Set-Content -Path $promtailConfig -Value $promtailContent
Write-Host "Created Promtail config: $promtailConfig"

Write-Host "`nVolume directory structure setup complete!"
Write-Host "Next steps:"
Write-Host "1. Copy .env.template to .env and fill in your values"
Write-Host "2. Run 'docker-compose up -d' to start the containers"