{
id: "turnkeylinux",
title: "TurnKey Linux",
description: "TurnKey Linux offers ready-to-deploy Debian-based server appliances for every use case.",
buttonColor: "bg-sky-700 dark:bg-sky-900 text-white hover:bg-sky-600 dark:hover:bg-sky-800",
buttonText: "Visit Website",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/turnkeylinux/ /path/to/local/appliances/",
logoSrc: "/logos/turnkeylinux.webp",
websiteUrl: "https://www.turnkeylinux.org/",
isoUrl: "https://mirrors.aptlantis.net/turnkeylinux/isos/",
longDescription: `TurnKey Linux is a library of pre-integrated, Debian-based server appliances that allow anyone to deploy complex services in minutes. Each appliance bundles a hardened OS with preinstalled web apps, CMS platforms, databases, development stacks, and more.

Examples include WordPress, LAMP, GitLab, OpenLDAP, and File Server—all preconfigured and security-patched. TurnKey VMs work with bare metal, Proxmox, VMware, VirtualBox, and cloud platforms.

APTlantis mirrors the full ISO and VM image catalog to support DevOps workflows, rapid prototyping, and air-gapped environments.`,
minimumRequirements: "x86_64 CPU, 512 MB RAM, 1 GB disk",
recommendedRequirements: "Dual-core CPU, 2 GB RAM, 4+ GB disk, virtualization support"
},
{
id: "the-stack",
title: "The Stack",
description: "The Stack is a 6+ TB dataset of permissively licensed source code across 300+ languages.",
buttonColor: "bg-gray-900 dark:bg-black text-white hover:bg-gray-800 dark:hover:bg-gray-900",
buttonText: "Browse Dataset",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/the-stack/ /path/to/local/dataset/",
logoSrc: "/logos/thestack.webp",
websiteUrl: "https://huggingface.co/datasets/bigcode/the-stack",
isoUrl: "https://mirrors.aptlantis.net/the-stack/",
longDescription: `The Stack is a massive open-source dataset created by BigCode to support transparent LLM development. It consists of over 6 TB of permissively licensed code from GitHub and other public sources, filtered by license and quality heuristics.

The dataset includes 300+ programming languages and is organized for scalable ingestion into machine learning pipelines. It's a foundational resource for code LLMs, code search engines, and academic reproducibility.

APTlantis mirrors The Stack in its entirety to ensure global, persistent access for research and model training infrastructure.`,
minimumRequirements: "500 GB+ storage, decompression and filtering tools",
recommendedRequirements: "4+ TB SSD/NAS, high-performance CPU, Python or Spark-based data stack"
},
{
id: "the-stack-v2",
title: "The Stack v2 (train set)",
description: "The Stack v2 is a refined, deduplicated 23+ TB dataset of permissively licensed code for LLM training.",
buttonColor: "bg-gray-900 dark:bg-neutral-900 text-white hover:bg-gray-800 dark:hover:bg-gray-900",
buttonText: "Explore Dataset",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/the-stack-v2/ /path/to/local/dataset/",
logoSrc: "/logos/thestack-v2.webp",
websiteUrl: "https://huggingface.co/datasets/bigcode/the-stack-v2",
isoUrl: "https://mirrors.aptlantis.net/the-stack-v2/",
longDescription: `The Stack v2 is a massive, deduplicated dataset curated by the BigCode project to advance large language model (LLM) research on code. At over 23 TB compressed, it contains billions of lines of code across hundreds of languages, filtered for permissive licenses and structured for high-quality training.

Improvements over v1 include better license detection, deduplication, dedented formatting, and language classification. It is the gold standard open dataset for academic and commercial pretraining of code-based models.

APTlantis mirrors the full train set to ensure reliable access for universities, labs, and infrastructure-scale deployments.`,
minimumRequirements: "1 TB+ disk space, Python or shell tools for decompression",
recommendedRequirements: "24+ TB SSD or NAS, multicore CPU, Python+Spark or Arrow-based tooling"
},
{
id: "starcoder",
title: "StarCoder (dataset)",
description: "The StarCoder dataset is a curated subset of permissively licensed code for LLM training.",
buttonColor: "bg-blue-950 dark:bg-blue-900 text-white hover:bg-blue-800 dark:hover:bg-blue-800",
buttonText: "Explore Dataset",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/starcoder/ /path/to/local/dataset/",
logoSrc: "/logos/starcoder.webp",
websiteUrl: "https://huggingface.co/datasets/bigcode/starcoderdata",
isoUrl: "https://mirrors.aptlantis.net/starcoder/",
longDescription: `The StarCoder dataset is a high-quality corpus curated by BigCode and hosted on Hugging Face. It consists of permissively licensed source code (from GitHub and beyond), filtered for quality and legality, and used to train the StarCoder family of LLMs.

It is segmented by programming language and includes natural language comments, docstrings, and function signatures—making it suitable for code generation, Q&A, and syntax-aware model pretraining.

APTlantis mirrors StarCoder for researchers, educators, and AI developers needing local or distributed access to code-focused datasets.`,
minimumRequirements: "Any modern system for unpacking large text files",
recommendedRequirements: "500 GB+ SSD, Python or PyTorch environment, decompression tools"
},
{
id: "tails",
title: "Tails OS",
description: "Tails is a security and privacy-focused live OS that routes all traffic through Tor.",
buttonColor: "bg-black dark:bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-700",
buttonText: "Visit Website",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/tails/ /path/to/local/isos/",
logoSrc: "/logos/tails.webp",
websiteUrl: "https://tails.net/",
isoUrl: "https://mirrors.aptlantis.net/tails/isos/",
longDescription: `Tails (The Amnesic Incognito Live System) is a Debian-based live OS designed for privacy, anonymity, and censorship circumvention. It routes all network traffic through Tor, leaves no trace on the host system, and includes secure tools for communication and file encryption.

Tails is used globally by journalists, activists, and individuals living under digital surveillance. It includes tools like KeePassXC, OnionShare, Thunderbird, and VeraCrypt.

APTlantis mirrors the full Tails ISO catalog for verified, anonymized access and offline verification.`,
minimumRequirements: "2 GB RAM, x86_64 CPU, USB boot capability",
recommendedRequirements: "4+ GB RAM, 8 GB USB 3.0 stick, SecureBoot-disabled system"
},
{
id: "rust",
title: "Rust (crates.io)",
description: "APTlantis mirrors the entire crates.io Rust ecosystem for offline and reproducible builds.",
buttonColor: "bg-orange-800 dark:bg-orange-900 text-white hover:bg-orange-700 dark:hover:bg-orange-800",
buttonText: "Explore Mirror",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/rust/ /path/to/local/crates/",
logoSrc: "/logos/rust.webp",
websiteUrl: "https://crates.io/",
isoUrl: "https://mirrors.aptlantis.net/rust/",
longDescription: `APTlantis hosts a complete mirror of crates.io, the official Rust package registry. This includes all available versions of every crate, making it ideal for reproducible builds, secure supply chain environments, and air-gapped systems.

Rust's powerful tooling, including \`cargo\`, integrates seamlessly with local mirrors. With tens of thousands of packages covering CLI tools, async runtimes, web servers, and systems programming, this mirror ensures developers have rapid, reliable access to the full Rust ecosystem.`,
minimumRequirements: "Any system with Rust and cargo installed",
recommendedRequirements: "500 GB+ free space, broadband for syncing, updated cron jobs"
},
{
id: "sabayon",
title: "Sabayon Linux",
description: "Sabayon was a Gentoo-based distro aimed at ease of use, now discontinued and archived by APTlantis.",
buttonColor: "bg-gray-700 dark:bg-gray-900 text-white hover:bg-gray-600 dark:hover:bg-gray-800",
buttonText: "Browse Archive",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/sabayon/ /path/to/local/archive/",
logoSrc: "/logos/sabayon.webp",
websiteUrl: "https://wiki.sabayon.org/",  // Still accessible as an archive
isoUrl: "https://mirrors.aptlantis.net/sabayon/isos/",
longDescription: `Sabayon Linux was a Gentoo-based distribution focused on providing an out-of-the-box experience with preconfigured desktop environments and binary package access. It offered multiple DEs (GNOME, KDE, Xfce), rolling updates, and strong multimedia support.

Though discontinued, Sabayon remains a notable part of Linux history for its early adoption of gaming and live USB innovation. APTlantis preserves ISOs and repo data for historical access, educational use, and digital forensics.`,
minimumRequirements: "1.5 GHz CPU, 1 GB RAM, 10 GB disk",
recommendedRequirements: "Dual-core CPU, 4 GB RAM, 20 GB disk, Legacy hardware compatible"
},
{
  id: 'trisquel',
  title: 'Trisquel GNU/Linux',
  description:
    'Trisquel is a fully free Ubuntu-based distribution endorsed by the Free Software Foundation.',
  buttonColor: 'bg-sky-700 dark:bg-sky-900 text-white hover:bg-sky-800 dark:hover:bg-sky-950',
  buttonText: 'Visit Website',
  rsyncCommand:
    'rsync -avz --delete rsync://mirrors.aptlantis.net/trisquel/ /path/to/local/repo/',
  logoSrc: '/logos/trisquel.webp',
  websiteUrl: 'https://trisquel.info/',
  isoUrl: 'https://mirrors.aptlantis.net/trisquel/isos/',
  longDescription: `Trisquel GNU/Linux is an Ubuntu-based Linux distribution committed to 100% free software. It removes all proprietary drivers, non-free firmware, and software with restrictive licenses, offering a system that adheres strictly to the Free Software Foundation's guidelines.

Trisquel is popular in academic, governmental, and ethical computing circles. It comes with the MATE desktop environment (formerly GNOME 2), LibreOffice, Abrowser (a debranded and privacy-respecting Firefox fork), and other essential tools—all fully libre.

It is ideal for users who want a simple, dependable Linux experience without compromising software freedom. Several editions are available, including Trisquel Mini for older hardware.`,
  minimumRequirements:
    '1 GHz CPU, 512 MB RAM, 8 GB disk space, Open-source GPU driver, Internet connection',
  recommendedRequirements:
    '2 GHz dual-core CPU, 2 GB RAM, 15 GB disk space, 1366×768 graphics, Internet for updates',
},
{
id: "pypi",
title: "PyPI (Top 75,000 packages)",
description: "APTlantis mirrors the top 75,000 Python packages from PyPI for offline development and reproducibility.",
buttonColor: "bg-yellow-600 dark:bg-yellow-800 text-white hover:bg-yellow-500 dark:hover:bg-yellow-700",
buttonText: "Explore Mirror",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/pypi/ /path/to/local/mirror/",
logoSrc: "/logos/pypi.webp",
websiteUrl: "https://pypi.org/",
isoUrl: "https://mirrors.aptlantis.net/pypi/",
longDescription: `The Python Package Index (PyPI) is the primary repository for Python libraries and tools. APTlantis mirrors the top 75,000 most-downloaded packages to support reproducible environments, offline development, and secure archiving of the Python ecosystem.

This curated snapshot includes major libraries for data science, machine learning, web development, and automation. All packages are pulled using \`bandersnatch\` with a whitelist strategy based on PyPI's official download metrics.

It's ideal for universities, air-gapped networks, and large-scale devops environments.`,
minimumRequirements: "Any system with Python and pip",
recommendedRequirements: "Python 3.8+, pip, 500+ GB free space, regular sync cron"
},
{
  id: 'opensuse',
  title: 'openSUSE',
  description:
    'openSUSE is a powerful Linux distro for desktops and servers, backed by SUSE and the open source community.',
  buttonColor:
    'bg-green-700 dark:bg-green-900 text-white hover:bg-green-600 dark:hover:bg-green-800',
  buttonText: 'Visit Website',
  rsyncCommand:
    'rsync -avz --delete rsync://mirrors.aptlantis.net/opensuse/ /path/to/local/repo/',
  logoSrc: '/logos/opensuse.webp',
  websiteUrl: 'https://www.opensuse.org/',
  isoUrl: 'https://mirrors.aptlantis.net/opensuse/isos/',
  longDescription: `openSUSE is a robust, enterprise-grade Linux distribution developed by the openSUSE Project with support from SUSE. It comes in two main editions: Leap (stable, regular-release) and Tumbleweed (rolling-release, cutting-edge).

Leap is ideal for desktops, servers, and production systems, while Tumbleweed offers the latest software stacks and kernel updates. openSUSE is known for its professional-grade tools like YaST (system control panel), Zypper (package manager), and snapper (for Btrfs snapshots).

It's a solid choice for developers, sysadmins, and users who want performance, flexibility, and enterprise tooling without a subscription.`,
  minimumRequirements: 'x86_64 CPU, 2 GB RAM, 5 GB disk space, 1024×768 display',
  recommendedRequirements:
    'Dual-core CPU, 4+ GB RAM, 20 GB disk space, 1366×768+ display, Internet for repos',
},
{
  id: 'parabola',
  title: 'Parabola GNU/Linux-libre',
  description:
    'Parabola is a libre Arch-based distro endorsed by the FSF, using only free software.',
  buttonColor: 'bg-black dark:bg-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-700',
  buttonText: 'Visit Website',
  rsyncCommand:
    'rsync -avz --delete rsync://mirrors.aptlantis.net/parabola/ /path/to/local/repo/',
  logoSrc: '/logos/parabola.webp',
  websiteUrl: 'https://www.parabola.nu/',
  isoUrl: 'https://mirrors.aptlantis.net/parabola/isos/',
  longDescription: `Parabola GNU/Linux-libre is an Arch-based Linux distribution that exclusively includes free software as defined by the Free Software Foundation (FSF). It removes all non-free components, blobs, and proprietary software, and replaces them with libre alternatives wherever possible.

Maintained by a small but dedicated team, Parabola offers rolling releases, pacman package management, and compatibility with Arch's AUR — while ensuring everything remains free-as-in-freedom.

Parabola is officially endorsed by the FSF and is a solid choice for users who prioritize software freedom, transparency, and ethical computing. It supports both OpenRC and systemd-based init systems.`,
  minimumRequirements:
    '1 GHz processor, 512 MB RAM, 5 GB disk space, Open graphics driver, Internet connection',
  recommendedRequirements:
    '2 GHz processor, 2 GB RAM, 15 GB disk space, Libre-compatible graphics, Broadband connection',
},
{
  id: 'gentoo',
  title: 'Gentoo Linux',
  description:
    'Gentoo is a source-based rolling distro known for extreme customization and performance.',
  buttonColor:
    'bg-neutral-700 dark:bg-neutral-900 text-white hover:bg-neutral-600 dark:hover:bg-neutral-800',
  buttonText: 'Visit Website',
  rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/gentoo/ /path/to/local/repo/',
  logoSrc: '/logos/gentoo.webp',
  websiteUrl: 'https://www.gentoo.org/',
  isoUrl: 'https://mirrors.aptlantis.net/gentoo/isos/',
  longDescription: `Gentoo Linux is a source-based Linux distribution for advanced users who want full control over their software and system behavior. Packages are compiled using \`emerge\`, Gentoo’s powerful Portage package manager.

Gentoo offers ultimate customization at the cost of time and complexity, making it ideal for performance tuning, embedded systems, and educational purposes. Its documentation and community support help users manage complex builds.

As a rolling-release system, Gentoo stays continuously updated, and its USE flags allow fine-grained control over optional features, dependencies, and optimizations.`,
  minimumRequirements: '1 GHz CPU, 1 GB RAM, 10 GB disk space, Terminal-based installer',
  recommendedRequirements:
    '2 GHz quad-core CPU, 4+ GB RAM, 20+ GB disk space, Internet for source builds',
},
{
id: "cpan",
title: "CPAN",
description: "CPAN is the central archive for Perl modules, libraries, and tools.",
buttonColor: "bg-orange-700 dark:bg-orange-900 text-white hover:bg-orange-600 dark:hover:bg-orange-800",
buttonText: "Visit Archive",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/cpan/ /path/to/local/mirror/",
logoSrc: "/logos/cpan.webp",
websiteUrl: "https://www.cpan.org/",
isoUrl: "https://mirrors.aptlantis.net/cpan/",
longDescription: `The Comprehensive Perl Archive Network (CPAN) is the primary source for Perl modules and software. It includes tens of thousands of distributions and libraries contributed by the global Perl community.

CPAN enables developers to rapidly share, download, and install Perl modules using automated tools like \`cpanm\` or \`cpan\`. It's an essential resource for Perl development, scripting, and data processing projects.

APTlantis mirrors CPAN for high-speed access and archival, ensuring redundancy and offline usability of the entire Perl ecosystem.`,
minimumRequirements: "Any modern system with Perl installed",
recommendedRequirements: "Perl 5+, CPAN client, disk space for archive (20+ GB recommended)"
},
{
id: "cran-r",
title: "CRAN-R",
description: "CRAN is the official archive for R packages used in statistics, data science, and research.",
buttonColor: "bg-red-600 dark:bg-red-800 text-white hover:bg-red-500 dark:hover:bg-red-700",
buttonText: "Visit CRAN",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/cran-r/ /path/to/local/mirror/",
logoSrc: "/logos/cran.webp",
websiteUrl: "https://cran.r-project.org/",
isoUrl: "https://mirrors.aptlantis.net/cran-r/",
longDescription: `The Comprehensive R Archive Network (CRAN) is the global repository for R language packages. It hosts statistical and analytical libraries, datasets, and documentation used across science, academia, and industry.

CRAN ensures quality control through rigorous checks and reproducibility standards. It supports R users on all major platforms and plays a key role in reproducible research and open science.

APTlantis mirrors CRAN to make R packages accessible for offline analysis, reproducibility, and high-availability environments.`,
minimumRequirements: "Any system with R installed",
recommendedRequirements: "R 4.0+, Internet for syncing, disk space for full mirror (100+ GB recommended)"
},
{
  id: 'almalinux',
  title: 'AlmaLinux',
  description:
    'AlmaLinux is a community-driven replacement for CentOS, built for stability and enterprise workloads.',
  buttonColor: 'bg-blue-600 dark:bg-blue-800 text-white hover:bg-blue-700 dark:hover:bg-blue-900',
  buttonText: 'Visit Website',
  rsyncCommand:
    'rsync -avz --delete rsync://mirrors.aptlantis.net/almalinux/ /path/to/local/repo/',
  logoSrc: '/logos/almalinux.webp',
  websiteUrl: 'https://almalinux.org/',
  isoUrl: 'https://mirrors.aptlantis.net/almalinux/isos/',
  longDescription: `AlmaLinux is a free and open-source Linux distribution designed as a drop-in replacement for CentOS, following the same release structure as Red Hat Enterprise Linux (RHEL). It was created by the AlmaLinux OS Foundation in response to Red Hat shifting CentOS to a rolling-release model (CentOS Stream).

The distro aims to provide long-term, stable releases backed by a strong community and enterprise sponsors. It is binary-compatible with RHEL and is ideal for production servers, cloud deployments, and mission-critical environments.

With regular security updates, comprehensive documentation, and robust community support, AlmaLinux has quickly become a trusted choice for users and companies looking for a dependable RHEL alternative without vendor lock-in.`,
  minimumRequirements:
    '1 GHz processor, 1 GB RAM, 10 GB disk space, VGA graphics, Internet connection for updates',
  recommendedRequirements:
    '2 GHz dual-core processor, 4 GB RAM, 25 GB disk space, 1366×768 graphics, Broadband internet connection',
},
{
id: "raspberrypi",
title: "Raspberry Pi OS",
description: "Raspberry Pi OS is the official Debian-based system optimized for the Raspberry Pi family.",
buttonColor: "bg-rose-700 dark:bg-rose-900 text-white hover:bg-rose-600 dark:hover:bg-rose-800",
buttonText: "Visit Website",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/raspberrypi/ /path/to/local/repo/",
logoSrc: "/logos/raspberrypi.webp",
websiteUrl: "https://www.raspberrypi.com/software/",
isoUrl: "https://mirrors.aptlantis.net/raspberrypi/isos/",
longDescription: `Raspberry Pi OS (formerly Raspbian) is the official operating system for the Raspberry Pi single-board computers. It is based on Debian and optimized for the Pi's ARM hardware with full desktop and lite editions.

The OS includes educational tools, GPIO libraries, and beginner-friendly programming environments like Thonny and Scratch. It supports everything from home automation and robotics to retro gaming and digital signage.

APTlantis mirrors the full ISO archive and repository snapshots for offline access, classroom environments, and rural deployments.`,
minimumRequirements: "Raspberry Pi 1/2/3/4/5 or Zero, 2 GB microSD",
recommendedRequirements: "Pi 4 or newer, 4 GB RAM, 16+ GB Class 10 microSD, HDMI display"
},
{
id: "rayvnos",
title: "RayvnOS",
description: "RayvnOS is an experimental OS built for creative workflows and digital independence.",
buttonColor: "bg-slate-700 dark:bg-slate-900 text-white hover:bg-slate-600 dark:hover:bg-slate-800",
buttonText: "Explore Project",
rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/rayvnos/ /path/to/local/repo/",
logoSrc: "/logos/rayvnos.webp",
websiteUrl: "https://rayvnos.org/",
isoUrl: "https://mirrors.aptlantis.net/rayvnos/isos/",
longDescription: `RayvnOS is an independent and experimental Linux-based operating system focused on creative workflows, user sovereignty, and privacy by design. It is minimal, cleanly themed, and tailored for writing, media production, and publishing.

The OS uses a custom desktop environment and curated app set that promotes offline-first thinking, digital minimalism, and aesthetic cohesion. Its development is community-driven with a focus on reclaiming control over computing tools.

RayvnOS is still in active development and may be best suited for adventurous users, artists, and those exploring alternative computing paths.`,
minimumRequirements: "64-bit CPU, 2 GB RAM, 8 GB disk space",
recommendedRequirements: "Quad-core CPU, 4 GB RAM, SSD, 1080p display, Internet optional"
},
{
id: 'backbox',
title: 'BackBox Linux',
description:
  'BackBox is an Ubuntu-based distro tailored for penetration testing and security assessments.',
buttonColor: 'bg-gray-800 dark:bg-black text-white hover:bg-gray-700 dark:hover:bg-gray-900',
buttonText: 'Visit Website',
rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/backbox/ /path/to/local/repo/',
logoSrc: '/logos/backbox.webp',
websiteUrl: 'https://www.backbox.org/',
isoUrl: 'https://mirrors.aptlantis.net/backbox/isos/',
longDescription: `BackBox Linux is a security-focused Ubuntu-based distribution designed for penetration testing, ethical hacking, and security auditing. It provides a lightweight XFCE desktop environment combined with a curated collection of tools for vulnerability assessment, digital forensics, and network analysis.

Unlike some heavier security distros, BackBox emphasizes performance and responsiveness, making it suitable for use on modest hardware or virtual machines. It includes a full suite of open-source security tools and is maintained by a team committed to delivering regular updates and community-driven improvements.

BackBox is trusted by professionals for quick deployment in real-world assessments.`,
minimumRequirements: '1 GHz CPU, 1 GB RAM, 10 GB disk space, 1024×768 graphics',
recommendedRequirements:
  '2 GHz dual-core CPU, 4 GB RAM, 20 GB disk space, 1366×768 graphics, Internet connection',
},
