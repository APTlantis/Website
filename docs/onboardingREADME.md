# 🛸 Aptlantis

Welcome to **Aptlantis** — a mythic, modular, mirror-driven infrastructure built for the preservation, distribution, and celebration of open-source systems.

Aptlantis is **not just a Linux mirror** — it's a **living archive**, a **lore-rich environment**, and a **modern, modular Docker-based app** for syncing, storing, sharing, and showing the best of obscure, bleeding-edge, and legacy distros alike.

---

## 🚀 What Is Aptlantis?

Aptlantis is:

- 🌀 A fully automated **mirror hub** (55+ distros, 70TB+ of data)
- 🧩 A **modular containerized system** built with Go, Rust, Python, Kotlin, and TypeScript
- 🧠 A system of **real-time rsync syncers, dashboards, and metadata analysis**
- 🖥️ A **visually rich, dark-themed frontend** with Bootstrap-powered cards and per-distro dashboards
- 🧙 A project imbued with **mythos** (Akx Parsers, Relics, Conventicles, and Vanguard layers)

---

## 📂 Directory & Network Structure

Each layer of Aptlantis is logically namespaced and maps to a container network and functional domain:

| Layer | Purpose | Namespace | Example Services |
|-------|---------|-----------|------------------|
| `sudo-swupd-Nexus` | Orchestration & Observability | `swupd-*` | RepoPulse, Dispatcher, Grafana |
| `sudo-eopkg-Vanguard` | Security & Edge Defense | `eopkg-*` | BunkerWeb, CrowdSec, Fail2Ban |
| `sudo-dpkg-Conventicle` | Social & Interaction | `dpkg-*` | IRC, TheLounge, Chatbots |
| `sudo-zypper-Panacea` | Support Tools | `zypper-*` | Submission Secretary, Image Processors |
| `sudo-yum-RepoPulse` | Mirror Health Monitor | `yum-*` | Submission Secretary, Image Processors |
| *(Planned)* `sudo-rpm-RelicVault` | Cold Storage & Archives | `rpm-*` | Ancient ISOs, Akx Relics |
| *(Planned)* `sudo-zfs-Mythica` | Tiered Storage & AI/ML | `zfs-*` | LLaMA Fine-Tuning, Inference APIs |

---

## 🔧 Getting Started (Dev)

1. **Install Docker & Docker Compose**
2. Clone the repo:
   ```bash
   git clone https://github.com/aptlantis/Website.git
   cd aptlantis
   ```

3. Start the network:
   ```bash
   docker compose up -d
   ```

Services will come online based on your compose structure. For full functionality, ensure MongoDB, Caddy/BunkerWeb, and cloud DNS are configured.

---

## 🌍 Live Services

| Service       | URL                      | Description                      |
| ------------- | ------------------------ | -------------------------------- |
| **Main Site** | `https://aptlantis.net`  | Web UI, distro cards, dashboards |
| **IRC (SSL)** | `irc.aptlantis.net:6697` | Public chat                      |
| **rsync**     | `rsync://aptlantis.net`  | Mirrored content                 |
| **Tor**       | *coming soon*            | Privacy-respecting mirror access |

---

## 📜 Lore & Mythology

Aptlantis is layered with terms and themes from myth, command-line culture, and mystic computing. Here's a quick cheat sheet:

* **Conventicle**: Publicly accessible, social service layer (chat, submissions)
* **Vanguard**: Security and protective edge, modernized WAF & rate-limiting
* **Nexus**: Orchestration of tasks, logs, and metrics
* **Relics / Akx**: Special artifacts (files, snapshots, metadata) with lore-rich labeling
* **Reliquary**: Reserved location for ultra-rare or retired content
* **Dispatchers / Secretaries**: Task managers for rsync jobs and metadata collection

---

## 🧠 Technologies

* Frontend: `React`, `Bootstrap`, `TypeScript`
* Backend: `Go`, `Rust`, `Kotlin`, `Python`
* DB: `MongoDB`
* Sync & Dashboards: `rsync`, `Grafana`, `Prometheus-style exporters`
* Network: `Caddy` / `BunkerWeb`, `Cloudflare`, `Tor`

---

## 📸 Submissions & Screenshots

Users can submit screenshots for their favorite distros — these are displayed in distro dashboards. Submission is handled via:

* `apt-SubmissionSecretary`: Metadata ingestion
* `pillowtools`: Image processing and optimization
* `MongoDB`: Structured entry storage

---

## 🤝 Contributing

We're open to contributors — but this is still in alpha development.

**Ways to help:**

* Suggest obscure distros to mirror
* Help us onboard new users with clearer docs
* Submit PRs to frontend or dashboards
* Submit Akx parser improvements

Open an issue or hop into our IRC channel to chat.

---

## 📡 Contact

* IRC: `#aptlantis` on `irc.aptlantis.net`
* Web: [aptlantis.net](https://aptlantis.net)
* GitHub: [github.com/aptlantis/aptlantis](https://github.com/aptlantis/aptlantis)

---

## 🧱 License

All code, content, and scripts are public domain unless otherwise noted.

---

> "Overbuilt is what we shoot for."

—

*Welcome to Aptlantis.*