Awesome — now that your Vanguard `docker-compose` file is hardened and the services are clearly defined, here’s **what to tackle next in priority order**. Think of this as a checklist to **go from a hardened first draft → production-ready deployment with observability, alerting, and traceability.**

---

## 🧱 **NEXT STEPS: Vanguard & Perimeter Checklist**

### 🔐 1. **\[Vault & Secrets]**

* Set Vault into **FIPS mode** (optional but gov-aligned)
* Set up policies for:

    * Read-only public services (e.g. Prometheus scrape targets)
    * Dynamic secrets for services like `apt-Gemma3`, `MongoDB`, `Prometheus`
* Inject secrets via `ConsulTemplate`

✅ Deliverable: `vault.hcl` + template config

---

### 📦 2. **\[Add CrowdSec Bouncer]**

* Deploy `crowdsecurity/firewall-bouncer` in the Vanguard network
* It reads decisions from CrowdSec API and updates BunkerWeb via HTTP or iptables
* Bind to `/var/run/docker.sock` if needed for Docker-aware blocking

✅ Deliverable: `apt-CrowdsecBouncer` service in `docker-compose`

---

### 📡 3. **\[Monitoring + Alerting]**

* Configure **Prometheus AlertManager**
* Alert for:

    * Failed rsync jobs
    * CrowdSec ban spikes
    * High request rates on IRC or submit endpoint
* Add Grafana dashboards for:

    * BunkerWeb NGINX-style metrics (req/sec, block rate)
    * CrowdSec decision feed
    * Certbot renewal status

✅ Deliverable: `alertmanager.yml` + Prometheus scrape config

---

### 🔎 4. **\[Log Audit & Review Paths]**

* Forward `/var/log/auth.log`, `/var/log/nginx/access.log`, and IRC logs to Loki
* Add labels:

    * `container=apt-Dispatcher`
    * `action=mirror_sync`
* Tie logs into Grafana’s Explore panel with filters

✅ Deliverable: `promtail.yaml` + tag scheme

---

### ⚙️ 5. **\[Heimdall & Dispatch UI]**

* Optional: Add `swupd-Heimdall` as a quick-access homepage
* Add service links for:

    * Grafana
    * TheLounge
    * Submission form
    * `/mirror/`
* Optional: Write a `dispatch.sh` CLI to bring up `sudo-*` layers on demand

✅ Deliverable: Heimdall compose + CLI script (bash/go)
