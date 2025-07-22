# Aptlantis Docker Implementation Test Plan

This document outlines the test plan for validating the Aptlantis Docker implementation. It includes test scenarios for each layer, validation steps for security features, and expected outcomes.

## Prerequisites

- Docker Engine 20.10.0 or later
- Docker Compose 2.0.0 or later
- PowerShell 5.0 or later (for Windows)
- 4GB RAM minimum (8GB recommended)
- 20GB disk space minimum
- Completed setup as per README.md

## Test Scenarios

### 1. Initial Setup Validation

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| Directory Structure | Run `.\setup-volumes.ps1` | All directories and configuration files created successfully |
| Environment File | Copy `.env.template` to `.env` and fill in values | `.env` file created with valid configuration |
| Docker Compose Validation | Run `docker-compose config` | No errors or warnings in configuration |
| Initial Startup | Run `docker-compose up -d` | All containers start successfully |

### 2. Vanguard Layer Tests

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| BunkerWeb Accessibility | Access https://localhost/admin | BunkerWeb admin interface loads |
| SSL Certificate | Check certificate in browser | Valid SSL certificate for configured domain |
| CrowdSec API | `curl http://localhost:6060/metrics` | Metrics endpoint returns HTTP 200 |
| Vault Initialization | `docker-compose exec vanguard-vault vault status` | Vault is initialized and unsealed |
| Security Headers | `curl -I https://localhost` | Security headers present (X-Frame-Options, CSP, etc.) |
| Fail2Ban Rules | `docker-compose exec vanguard-fail2ban fail2ban-client status` | Fail2Ban running with active jails |

### 3. Nexus Layer Tests

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| MongoDB Connection | `docker-compose exec nexus-mongodb mongosh --eval "db.adminCommand('ping')"` | MongoDB responds with { ok: 1 } |
| Prometheus Targets | Access http://localhost:9090/targets | All scrape targets are up |
| Grafana Dashboards | Access http://localhost:3000 | Grafana loads with pre-configured dashboards |
| Loki Logs | Query Loki through Grafana Explore | Logs are being collected and are queryable |
| Portainer Access | Access http://localhost:9000 | Portainer interface loads and shows containers |
| Heimdall Dashboard | Access http://localhost:8080 | Heimdall dashboard loads with service links |

### 4. Conventicle Layer Tests

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| IRC Server Connection | `telnet localhost 6667` | Connection established to IRC server |
| TheLounge Access | Access http://localhost:9000 | TheLounge web interface loads |
| TheLounge User Creation | `docker-compose exec conventicle-thelounge thelounge add testuser` | User created successfully |
| TheLounge Login | Login with created user | Successful login and IRC connection |
| Ollama API | `curl http://localhost:11434/api/tags` | List of available models returned |
| Ollama Model Loading | `docker-compose exec conventicle-ollama ollama run gemma:1b "Hello"` | Model responds with a greeting |

### 5. RepoPulse Layer Tests

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| Dispatcher API | `curl http://localhost:8083/health` | Health endpoint returns HTTP 200 |
| RSync Workers Status | `curl http://localhost:8084/status` | Status endpoint shows worker information |
| RSync Secretary Metrics | `curl http://localhost:8085/metrics` | Metrics endpoint returns prometheus metrics |
| Submission Secretary API | `curl http://localhost:8086/api/v1/submissions` | API returns list of submissions |

### 6. Cross-Layer Integration Tests

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| Log Aggregation | Generate logs in various services and check Loki | Logs from all services appear in Loki |
| Metrics Collection | Check Prometheus targets and metrics | Metrics from all services are collected |
| Network Isolation | Attempt to access services from incorrect networks | Access denied for isolated services |
| Vault Secret Access | Test retrieving secrets from Vault in services | Services can access their secrets |
| Backup and Restore | Backup MongoDB and restore to a test instance | Data is successfully restored |

### 7. Security Validation

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| Port Exposure | Run `nmap localhost` | Only intended ports are exposed |
| Container Isolation | Attempt to access host from containers | Access is restricted |
| Credential Security | Check for hardcoded credentials in configs | No hardcoded credentials found |
| Network Segmentation | Verify network isolation between layers | Services can only communicate as intended |
| Resource Limits | Check container resource usage | Containers respect resource limits |
| Secrets Management | Verify secrets are stored in Vault | No sensitive data in environment variables |

### 8. Performance Tests

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| Container Startup Time | Measure time to start all containers | All containers start within 2 minutes |
| Resource Usage | Monitor CPU, memory, and disk usage | Resource usage within expected limits |
| Concurrent Connections | Simulate multiple connections to services | Services handle concurrent connections |
| Load Testing | Use tools like Apache Bench for load testing | Services maintain performance under load |

### 9. Failure Recovery Tests

| Test | Steps | Expected Outcome |
|------|-------|-----------------|
| Container Restart | Stop and restart containers | Services recover automatically |
| Network Failure | Simulate network partition | Services reconnect when network is restored |
| Disk Space Exhaustion | Fill disk to capacity | Services handle disk space issues gracefully |
| Database Failure | Stop MongoDB and restart | Application recovers when database is available |

## Test Execution Checklist

- [ ] Environment setup complete
- [ ] Initial setup validation passed
- [ ] Vanguard layer tests passed
- [ ] Nexus layer tests passed
- [ ] Conventicle layer tests passed
- [ ] RepoPulse layer tests passed
- [ ] Cross-layer integration tests passed
- [ ] Security validation passed
- [ ] Performance tests passed
- [ ] Failure recovery tests passed

## Test Results Documentation

For each test, document:

1. Test name and ID
2. Date and time of execution
3. Tester name
4. Environment details
5. Steps performed
6. Actual results
7. Pass/Fail status
8. Screenshots or logs (if applicable)
9. Issues found (if any)
10. Notes or observations

## Issue Tracking

For any issues found during testing:

1. Document the issue with detailed reproduction steps
2. Assign severity (Critical, High, Medium, Low)
3. Create a ticket in the issue tracking system
4. Link test results to the issue
5. Track resolution and verify fixes

## Continuous Integration

This test plan should be automated where possible and integrated into the CI/CD pipeline:

1. Automated tests should run on every pull request
2. Full test suite should run before deployment
3. Performance and security tests should run on a schedule
4. Test results should be published to the team

## Conclusion

Successful completion of this test plan ensures that the Aptlantis Docker implementation is functioning correctly, securely, and efficiently. Any issues found during testing should be addressed before deployment to production.