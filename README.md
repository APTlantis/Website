```markdown
# 🛸 APTlantis

> A boutique Linux mirror network and infrastructure stack — stylized, lore-rich, modular, and built for the curious.

APTlantis is more than a mirror — it’s a relic archive, a living reliquary. Hosting 55+ Linux distributions, CRAN-R, Hackage, crates.io, PyPI, and more. All synced multiple times a day, managed by Go, Rust, and Kotlin scripts, logged via MongoDB, and visualized in a custom real-time dashboard.

### 🔩 Features

- 🌀 **Live rsync status dashboard** with real-time metrics
- 🧱 **Modular Docker stack** for rsync dispatch, web, and sync orchestration
- 📊 **MongoDB backend** for logging and repo metadata
- 🧙 **Lore-layered interface** — relics, rites, and mythos baked into the UX
- 💡 **Fully API-driven** via Go and Rust microservices
- 🎨 **Responsive card UI** with dark theming, glow effects, and screenshot support
- 🧩 **Extensible** — add a distro with one JSON entry

### 📦 Stack

| Layer     | Tech |
|-----------|------|
| Frontend  | TypeScript, HTML, Bootstrap, TailwindCSS |
| Backend   | Go, Rust, Python, Kotlin |
| Orchestration | Docker, PNPM, MongoDB |
| Hosting   | Hetzner (Finland), Caddy, Cloudflare |

### 🧭 Philosophy

APTlantis isn’t just utilitarian — it’s expressive. It preserves obscure distros, adds style to syncing, and turns mirrors into a mythos. This is infrastructure with identity.

---

### 📂 Repo Structure

```

.
├── docker/         # Docker stack for each subsystem
├── docs/           # Site walkthroughs, lore, notes (soon)
├── public/         # Static web assets
├── src/            # TypeScript/JS/Go/Rust/Python code
├── styles/         # Tailwind/Bootstrap/etc.
└── config files    # JSON, PNPM, TS, Tailwind, PostCSS...

````

---

### 📡 Getting Started

```bash
git clone https://github.com/yourname/APTlantis.git
cd APTlantis
pnpm install
pnpm dev
````

*(Or use Docker Compose — see `docker/` dir)*

---

### 🪙 License

Public domain. Use it. Remix it. Mirror weird stuff. Spread the lore.

---

### 👁‍🗨 Live Site

→ [https://aptlantis.net](https://aptlantis.net)
→ Or `rsync://irc.aptlantis.net/module`

---

Want a distro mirrored? Have an obscure project? Need a relic forged?
Reach out. Open a PR. Leave a footprint.

```
