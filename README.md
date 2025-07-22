# APTlantis Infrastructure Overview

## 🧭 Layered Architecture Summary

APTlantis is structured into modular, containerized layers that resemble a distributed operating system, where each layer governs a functional domain of the infrastructure.

### 1. `sudo-swupd-Nexus` – Orchestration & Observability

* **Purpose**: Monitoring, dashboards, container orchestration
* **Services**:

    * `swupd-Prometheus`: Metrics scraping
    * `swupd-Grafana`: Visualization and alerting
    * `swupd-Loki` & `swupd-Promtail`: Log aggregation
    * `swupd-MongoDB`: Shared data backend
    * `swupd-Portainer` & `swupd-PortainerAgent`: Container management

### 2. `sudo-eopkg-Vanguard` – Security Perimeter

* **Purpose**: Defense, access control, edge validation
* **Services**:

    * `eopkg-BunkerWeb`: TLS termination, WAF, reverse proxy
    * `eopkg-Certbot`: Wildcard certs via Cloudflare DNS
    * `eopkg-CrowdSec`, `eopkg-Fail2Ban`, `eopkg-Suricata`: Behavioral, brute force, and packet-based protection
    * `eopkg-CloudflareLogshipper`: DNS/firewall log ingestion

### 3. `sudo-apt-Conventicle` – Social & Interface Layer

* **Purpose**: IRC, chat, LLM interfaces
* **Services**:

    * `apt-ErgoIRC`: IRC server backend
    * `apt-TheLounge`: Web IRC frontend
    * `apt-Gemma3`: Ollama-deployed LLM for interaction/moderation

### 4. `sudo-eopkg-RepoPulse` – Sync, Submission, & Distribution Layer

* **Purpose**: Mirror updates, job orchestration, submission intake
* **Services**:

    * `apt-Dispatcher`: Controls sync task flow
    * `apt-RsyncWorkers`: Executes mirror jobs
    * `apt-RsyncSecretary`: Files mirror metadata back into MongoDB
    * `apt-SubmissionSecretary`: Ingests user-uploaded content (screenshots, hashes, etc.)
    * `apt-SubmissionProcessor`: Python toolchain for image, data, and hash enrichment (Pillow, PyMongo)

### 5. `sudo-apt-Utilities`

* **Purpose**: Helper containers, file servers, internal tooling
* **(Details to be expanded as utilities are added)**

### 6. 🔮 Future Layers

* `sudo-rpm-*`: Possibly for build automation, mirror package validation, or CI/CD
* `sudo-mythic-*`: Leveled storage, compute grid, or distributed model inference

---

## 📂 Directory & Naming Conventions

* `docker/sudo-eopkg-Vanguard/eopkg-CrowdSec/` → container-specific config
* `networks:` clearly align with `sudo-*` layer domains
* `container_name:` and `image:` are prefixed with logical roles (`apt-`, `eopkg-`, `swupd-`)

---

## 🗺️ Visuals To Be Included

1. **Layered Stack Diagram**: Shows all `sudo-*` layers and how containers flow
2. **Perimeter & Submission Flow Map**:

    * `Internet → BunkerWeb → Dispatcher → Secretary → Processor → Mongo`
3. **Service Dependency Graph**:

    * Directed graph mapping container-to-container edges (e.g. Promtail → Loki → Grafana)

---

## 🔐 Security Model

* Edge-filtered by BunkerWeb with integrated ModSecurity and rate limiting
* Layered detection with Suricata (packet), CrowdSec (behavioral), Fail2Ban (pattern)
* Certbot with Cloudflare DNS API automates wildcard TLS
* All access logged, metrics exposed, and alerting via Grafana dashboards

---

## 💬 Internal Communication Paths

* `Vault + ConsulTemplate` inject secrets dynamically to core services
* MongoDB acts as centralized metadata/log/state store for multiple layers
* Prometheus scrapes metrics across RepoPulse workers, IRC activity, submission flows

---

## ✅ Immediate Production Benefits

* Every service is auditable, observable, and reproducible
* Strong naming conventions mean infra-as-code can easily be documented, versioned, or deployed to CI/CD
* The stack can scale layer-by-layer or all at once

---

> **Next Steps:**
>
> * Formalize `.env` and `stack.info`/`infra.toml` metadata for each layer
> * Add service probes (liveness/readiness)
> * Write `dispatch` CLI script to start/stop `sudo-*` layers cleanly
> * Document storage mount patterns for persistence

APTlantis isn't just a project — it's a distributed ops operating system in the making.
