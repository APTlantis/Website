# Aptlantis Docker Implementation

This directory contains the Docker implementation for Aptlantis, a complex public infrastructure node providing IRC servers, file mirroring services, and API endpoints.

## Architecture

The Aptlantis Docker implementation follows a layered architecture approach:

1. **Vanguard** - Security perimeter and edge services
   - BunkerWeb (WAF)
   - CrowdSec (Collaborative security)
   - Fail2Ban (Intrusion prevention)
   - Suricata (Network security monitoring)
   - Vault (Secrets management)

2. **Nexus** - Core infrastructure and monitoring
   - MongoDB (Database)
   - Prometheus & Grafana (Monitoring)
   - Loki & Promtail (Log management)
   - Portainer (Container management)
   - Heimdall (Service dashboard)

3. **Conventicle** - Social and AI services
   - Ergo (IRC server)
   - TheLounge (Web IRC client)
   - Ollama (AI model service)

4. **RepoPulse** - Repository management and synchronization
   - Dispatcher (Task management)
   - RSync Workers (File synchronization)
   - RSync Secretary (Coordination)
   - Submission Secretary (Package submission)

## Setup Instructions

### Prerequisites

- Docker Engine 20.10.0 or later
- Docker Compose 2.0.0 or later
- PowerShell 5.0 or later (for Windows)
- 4GB RAM minimum (8GB recommended)
- 20GB disk space minimum

### Initial Setup

1. Clone the repository:
   ```powershell
   git clone https://github.com/yourusername/aptlantis.git
   cd aptlantis/docker
   ```

2. Run the setup script to create the volume directory structure:
   ```powershell
   .\setup-volumes.ps1
   ```

3. Create your environment file:
   ```powershell
   Copy-Item .env.template .env
   ```

4. Edit the `.env` file with your specific configuration values:
   ```powershell
   notepad .env
   ```

5. Start the Docker containers:
   ```powershell
   docker-compose up -d
   ```

### Layer-specific Deployment

You can deploy specific layers independently:

- Vanguard (Security):
  ```powershell
  docker-compose up -d vanguard-bunkerweb vanguard-crowdsec vanguard-fail2ban vanguard-suricata vanguard-vault vanguard-certbot vanguard-crowdsec-bouncer vanguard-consul-template
  ```

- Nexus (Core):
  ```powershell
  docker-compose up -d nexus-mongodb nexus-portainer nexus-prometheus nexus-grafana nexus-loki nexus-promtail nexus-heimdall
  ```

- Conventicle (Social):
  ```powershell
  docker-compose up -d conventicle-ergo conventicle-thelounge conventicle-ollama
  ```

- RepoPulse (Repository):
  ```powershell
  docker-compose up -d repopulse-dispatcher repopulse-rsync-workers repopulse-rsync-secretary repopulse-submission-secretary
  ```

## Common Commands

### Container Management

- View running containers:
  ```powershell
  docker-compose ps
  ```

- View container logs:
  ```powershell
  docker-compose logs -f [service-name]
  ```

- Restart a specific service:
  ```powershell
  docker-compose restart [service-name]
  ```

- Stop all containers:
  ```powershell
  docker-compose down
  ```

### Maintenance

- Update container images:
  ```powershell
  docker-compose pull
  docker-compose up -d
  ```

- View resource usage:
  ```powershell
  docker stats
  ```

- Backup MongoDB data:
  ```powershell
  docker-compose exec nexus-mongodb mongodump --out /data/db/backup
  ```

### TheLounge IRC Client Setup

After starting the containers, you need to create an admin user for TheLounge:

```powershell
docker-compose exec conventicle-thelounge thelounge add <username>
```

## Access Points

- BunkerWeb Admin: https://localhost/admin
- Grafana Dashboard: http://localhost:3000
- Prometheus: http://localhost:9090
- Portainer: http://localhost:9000
- TheLounge IRC Client: http://localhost:9000
- Heimdall Dashboard: http://localhost:8080

## Security Considerations

1. **Credentials Management**:
   - Never commit the `.env` file to version control
   - Rotate secrets regularly
   - Use Vault for production secrets

2. **Network Security**:
   - Internal services are bound to 127.0.0.1 to prevent external access
   - Use a reverse proxy for production deployments
   - Enable TLS for all public-facing services

3. **Container Hardening**:
   - Keep container images updated
   - Use read-only file systems where possible
   - Implement resource limits

## Troubleshooting

### Common Issues

1. **Container fails to start**:
   - Check logs: `docker-compose logs [service-name]`
   - Verify volume permissions
   - Ensure required environment variables are set

2. **Network connectivity issues**:
   - Check network configuration: `docker network ls`
   - Verify service is listening: `docker-compose exec [service-name] netstat -tulpn`
   - Check for port conflicts: `netstat -tulpn | grep [port]`

3. **Volume mounting issues**:
   - Ensure directories exist: `ls -la ./volumes/[layer]/[service]`
   - Check permissions: `icacls ./volumes/[layer]/[service]`
   - Recreate volumes: `docker-compose down -v && .\setup-volumes.ps1 && docker-compose up -d`

4. **Certificate issues**:
   - Verify Cloudflare credentials in `.env`
   - Check Certbot logs: `docker-compose logs vanguard-certbot`
   - Manually trigger certificate renewal: `docker-compose exec vanguard-certbot certbot renew --force-renewal`

## Development Guidelines

1. **Local Development**:
   - Use `docker-compose.override.yml` for development-specific settings
   - Mount source code directories for live reloading
   - Expose additional debug ports

2. **Testing**:
   - Test changes in isolation before deploying to production
   - Use Docker Compose profiles for testing specific components
   - Implement health checks for all services

3. **CI/CD Integration**:
   - Build and tag images in CI pipeline
   - Run automated tests against containerized services
   - Deploy using Docker Compose in production mode

## Further Documentation

- [Implementation Plan](./IMPLEMENTATION-PLAN.md) - Detailed implementation plan
- [Security Hardening](./Docker-README.md) - Security considerations
- [Enhancement Roadmap](./README2.md) - Future enhancements