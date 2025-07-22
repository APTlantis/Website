// This file contains the data for all the Linux distributions
// In a real app, this would likely come from an API

export interface Distro {
  id: string;
  title: string;
  description: string;
  buttonColor: string;
  buttonText: string;
  rsyncCommand: string;
  logoSrc: string;
  websiteUrl: string;
  isoUrl?: string;
  aboutText?: string;
  releaseYear?: number;
  longDescription?: string;
  features?: string[];
  desktopEnvironments?: string[];
  packageManager?: string;
  basedOn?: string;
  architectures?: string[];
  screenshots?: string[];
  communityLinks?: {
    type: string;
    url: string;
  }[];
  documentation?: string;
  lastRelease?: string;
  isMuseum?: boolean;
  videos?: string[];
  historicalPosts?: string[];
  historicalContext?: string;
  yearDiscontinued?: number;
  minimumRequirements?: string;
  recommendedRequirements?: string;
}

export const distros: Distro[] = [
  {
    id: 'alpine',
    title: 'Alpine Linux',
    description:
      'Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.',
    buttonColor:
      'bg-forest-500 dark:bg-forest-700 text-white hover:bg-forest-600 dark:hover:bg-forest-800',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/alpine/ /path/to/local/repo/',
    logoSrc: '/logos/alpine.webp',
    websiteUrl: 'https://alpinelinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/alpine/isos/',
    longDescription: `Alpine Linux is a security-focused, resource-efficient Linux distribution designed for power users, containers, and embedded systems. Unlike traditional distributions, Alpine uses musl libc and busybox to keep its size extremely small — a minimal install is just a few megabytes.

Originally created by Gentoo developer Natanael Copa in 2005, Alpine is known for its simple, fast package manager (apk), hardened kernel options, and a no-nonsense, minimal base that gives users full control. It is commonly used in Docker containers due to its tiny footprint and security-conscious defaults.

Alpine runs well on modest hardware and supports a wide range of architectures, including x86_64, ARM, and even s390x. Its focus on simplicity and efficiency has made it a favorite in both production and experimental environments.`,
    minimumRequirements:
      '1 GHz processor, 256 MB RAM, 700 MB disk space, basic VGA graphics, Internet connection recommended for setup',
    recommendedRequirements:
      '1.5 GHz dual-core processor, 512 MB RAM, 2 GB disk space, standard VGA graphics, Broadband internet connection',
  },
    {
    id: 'altlinux',
    title: 'ALT Linux',
    description:
      'ALT Linux is a mature Russian Linux distro built for desktops, servers, and government institutions.',
    buttonColor:
      'bg-slate-700 dark:bg-slate-900 text-white hover:bg-slate-600 dark:hover:bg-slate-800',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/altlinux/ /path/to/local/repo/',
    logoSrc: '/logos/altlinux.webp',
    websiteUrl: 'https://en.altlinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/altlinux/isos/',
    longDescription: `ALT Linux is a veteran Linux distribution originally forked from Mandrake in the early 2000s. Developed by the Russian ALT team, it's used extensively in education, business, and government settings across Eastern Europe and CIS nations.

ALT supports a range of system roles—from lightweight desktops to enterprise-grade servers—and provides long-term support releases, its own package manager (apt-rpm), and multiple custom tools for system deployment and administration.

It's available in flavors like Simply, Workstation, KDesktop, and Server, with ISO and repo availability for x86, ARM, and even Elbrus architecture. ALT is actively maintained with a strong focus on independence and adaptability.`,
    minimumRequirements: '1 GHz CPU, 1 GB RAM, 10 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      'Dual-core CPU, 4 GB RAM, 20 GB disk space, 1366×768 graphics, Internet access',
  },
  {
    id: 'archlinux',
    title: 'Arch Linux',
    description:
      'Arch Linux is a minimal, rolling-release distro known for its simplicity and control.',
    buttonColor: 'bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-600',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/archlinux/ /path/to/local/repo/',
    logoSrc: '/logos/archlinux.webp',
    websiteUrl: 'https://archlinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/archlinux/iso/',
    longDescription: `Arch Linux is an independently developed Linux distribution built around the KISS (Keep It Simple, Stupid) philosophy. It offers a bare-bones installation with a rolling release model, letting users build their systems from the ground up.

Using the pacman package manager and the vast Arch User Repository (AUR), Arch is highly customizable and up-to-date with the latest software. It's favored by experienced users, developers, and power users who want a lean, bleeding-edge platform with full transparency.

Arch documentation is among the best in the Linux world, and the Arch Wiki is an essential tool even for users of other distributions.`,
    minimumRequirements: 'x86_64 CPU, 512 MB RAM, 2 GB disk space, Ethernet or Wi-Fi card',
    recommendedRequirements:
      'Dual-core CPU, 2+ GB RAM, 10 GB SSD, Internet connection for package installation',
  },
  {
    id: 'artix',
    title: 'Artix Linux',
    description:
      'Artix Linux is a systemd-free Arch-based distro with OpenRC, runit, or s6 for init.',
    buttonColor: 'bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/artix/ /path/to/local/repo/',
    logoSrc: '/logos/artix.webp',
    websiteUrl: 'https://artixlinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/artix/isos/',
    longDescription: `Artix Linux is an Arch-based Linux distribution that replaces systemd with alternative init systems like OpenRC, runit, or s6. Designed for users who value simplicity and control, Artix offers a minimalist base and rolling-release model inherited from Arch, without systemd dependencies.

It supports the same AUR (Arch User Repository) and pacman-based package management ecosystem, making it easy to install and maintain a highly customized environment. Users can choose their preferred init system during installation, and preconfigured desktop ISOs are also available.

Artix appeals to power users, privacy advocates, and systemd critics looking for a lean and transparent OS architecture without compromising on modern Linux features.`,
    minimumRequirements:
      '1 GHz processor, 512 MB RAM, 5 GB disk space, VGA graphics, Internet connection',
    recommendedRequirements:
      '2 GHz dual-core processor, 2 GB RAM, 10 GB disk space, 1366×768 graphics, Broadband internet connection',
  },
    {
    id: 'athena',
    title: 'Athena OS',
    description:
      'Athena OS is a security-focused Linux distribution built for hackers, pentesters, and researchers.',
    buttonColor:
      'bg-purple-700 dark:bg-purple-900 text-white hover:bg-purple-800 dark:hover:bg-purple-950',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/athena/ /path/to/local/repo/',
    logoSrc: '/logos/athena.webp',
    websiteUrl: 'https://athena-os.org/',
    isoUrl: 'https://mirrors.aptlantis.net/athena-images/',
    longDescription: `Athena OS is a Linux distribution tailored for cybersecurity professionals, ethical hackers, and digital forensics specialists. Built atop openSUSE MicroOS, Athena leverages an immutable architecture and containers to offer both stability and flexibility.

It features a highly curated set of tools for penetration testing, vulnerability scanning, network analysis, reverse engineering, and red/blue team operations. Athena also includes an app store-like interface for browsing and managing these tools securely.

Unlike traditional security distros, Athena prioritizes modern UI/UX and atomic updates via transactional systems. It supports btrfs snapshots and rollback, offering powerful resilience for high-stakes environments.`,
    minimumRequirements:
      '2 GHz dual-core CPU, 4 GB RAM, 15 GB disk space, OpenGL-compatible graphics',
    recommendedRequirements:
      'Quad-core CPU, 8 GB RAM, 25 GB SSD space, 1080p graphics, Internet access',
  },
    {
    id: 'blackarch',
    title: 'BlackArch Linux',
    description:
      'BlackArch is an Arch-based distro for ethical hackers and pentesters, with 3,000+ preinstalled tools.',
    buttonColor:
      'bg-black dark:bg-neutral-900 text-white hover:bg-gray-800 dark:hover:bg-neutral-700',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/blackarch/ /path/to/local/repo/',
    logoSrc: '/logos/blackarch.webp',
    websiteUrl: 'https://www.blackarch.org/',
    isoUrl: 'https://mirrors.aptlantis.net/blackarch/isos/',
    longDescription: `BlackArch Linux is a comprehensive penetration testing distribution built on top of Arch Linux. It's designed for security researchers and red teams who need instant access to a wide variety of ethical hacking tools.

The distro comes preloaded with over 3,000 tools organized into categories like exploitation, forensics, cryptography, wireless analysis, and reverse engineering. It can be installed as a standalone system or layered onto an existing Arch install via the BlackArch repository.

BlackArch follows Arch's rolling-release model and requires a bit more Linux experience to operate, making it ideal for advanced users who want a bleeding-edge, customizable security OS.`,
    minimumRequirements: '1.5 GHz CPU, 2 GB RAM, 20 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      'Dual-core CPU, 4+ GB RAM, 30 GB SSD, 1366×768 graphics, Internet for updates',
  },
    {
    id: 'calculate',
    title: 'Calculate Linux',
    description:
      'Calculate Linux is a Gentoo-based distro optimized for desktops and enterprise networks.',
    buttonColor:
      'bg-violet-700 dark:bg-violet-900 text-white hover:bg-violet-600 dark:hover:bg-violet-800',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/calculate/ /path/to/local/repo/',
    logoSrc: '/logos/calculate.webp',
    websiteUrl: 'https://www.calculate-linux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/calculate/isos/',
    longDescription: `Calculate Linux is a Gentoo-based distribution geared toward desktops, servers, and mixed enterprise environments. It features optimized desktop editions (KDE, XFCE, Cinnamon, LXQt) and server variants, all preconfigured for LDAP integration, roaming profiles, and remote management.

Calculate includes binary package repositories for fast deployment while retaining full Portage compatibility for advanced source customization. It also ships with tools like Calculate Console for system configuration and maintenance.

The distro is developed in Russia and aims to provide stable, Gentoo-powered systems that are easier to install and manage in professional and business environments.`,
    minimumRequirements: '1 GHz CPU, 1 GB RAM, 8 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      '2 GHz CPU, 4 GB RAM, 20 GB disk space, 1366×768 graphics, Internet connection',
  },
  {
    id: 'debian',
    title: 'Debian',
    description:
      'Debian is a universal operating system known for its rock-solid stability and massive package repository.',
    buttonColor: 'bg-red-600 dark:bg-red-800 text-white hover:bg-red-700 dark:hover:bg-red-900',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/debian/ /path/to/local/repo/',
    logoSrc: '/logos/debian.webp',
    websiteUrl: 'https://www.debian.org/',
    isoUrl: 'https://mirrors.aptlantis.net/debian/isos/',
    longDescription: `Debian is one of the oldest and most respected Linux distributions, first released in 1993. It is entirely community-maintained and forms the foundation for many other distributions, including Ubuntu and Linux Mint.

Known for its commitment to free software principles, stability, and long release cycles, Debian is a top choice for servers, desktops, and embedded systems alike. It includes over 59,000 packages in its repositories and supports a wide variety of architectures including x86, ARM, PowerPC, and RISC-V.

Debian's installation and configuration tools are beginner-friendly, while its depth and flexibility attract advanced users and system administrators worldwide. Security updates and regular LTS releases ensure it remains a gold standard in open-source operating systems.`,
    minimumRequirements:
      '1 GHz processor, 512 MB RAM, 10 GB disk space, basic VGA graphics, Internet connection recommended',
    recommendedRequirements:
      '2 GHz dual-core processor, 2 GB RAM, 20 GB disk space, 1366×768 graphics, Broadband internet connection',
  },
  {
    id: 'deepin',
    title: 'Deepin',
    description:
      'Deepin is a beautifully designed Linux distribution with a custom desktop environment and strong UX focus.',
    buttonColor: 'bg-red-500 dark:bg-red-700 text-white hover:bg-red-600 dark:hover:bg-red-800',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/deepin/ /path/to/local/repo/',
    logoSrc: '/logos/deepin.webp',
    websiteUrl: 'https://www.deepin.org/',
    isoUrl: 'https://mirrors.aptlantis.net/deepin-cd/',
    longDescription: `Deepin is a Debian-based Linux distribution developed by the Wuhan Deepin Technology team in China. It is best known for the Deepin Desktop Environment (DDE), which combines elegance with user-friendliness and modern design.

The system includes a custom app suite—Deepin Store, Music, Movie, Screenshot, and Control Center—all built from scratch to create a seamless desktop experience. Deepin appeals to both new and experienced users who value aesthetics and productivity.

While it has had some controversy regarding telemetry in the past, the project has since made strides toward transparency and community involvement. Deepin continues to push the boundaries of what a polished Linux desktop can look and feel like.`,
    minimumRequirements: '2 GHz dual-core CPU, 4 GB RAM, 25 GB disk space, 1366×768 display',
    recommendedRequirements:
      'Intel i5 or Ryzen 5, 8 GB RAM, SSD, 1080p graphics, Internet connection',
  },
  {
    id: 'devuan-alt',
    title: 'Devuan',
    description:
      'Devuan is a Debian fork that avoids systemd, offering init freedom with sysvinit or runit.',
    buttonColor: 'bg-gray-600 dark:bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-900',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/devuan/ /path/to/local/repo/',
    logoSrc: '/logos/devuan.webp',
    websiteUrl: 'https://www.devuan.org/',
    isoUrl: 'https://mirrors.aptlantis.net/devuan-cd/',
    longDescription: `Devuan GNU+Linux is a fork of Debian that was born out of concerns over the mandatory adoption of systemd. It aims to provide a systemd-free alternative while preserving Debian's core strengths: stability, versatility, and a massive package ecosystem.

Devuan allows users to choose between several init systems (e.g., sysvinit, runit, OpenRC), and is ideal for administrators, developers, and privacy-conscious users who want a simple and traditional Unix-like environment.

Devuan maintains compatibility with Debian's repositories and supports a wide range of architectures including x86, ARM, and MIPS.`,
    minimumRequirements:
      '1 GHz CPU, 512 MB RAM, 5 GB disk space, basic graphics, Internet access recommended',
    recommendedRequirements:
      '2 GHz CPU, 2 GB RAM, 10 GB disk space, 1366×768 graphics, Broadband internet',
  },
  {
    id: 'endeavouros',
    title: 'EndeavourOS',
    description:
      'EndeavourOS is a terminal-centric, Arch-based distro that’s friendly to Arch newcomers.',
    buttonColor:
      'bg-purple-600 dark:bg-purple-800 text-white hover:bg-purple-700 dark:hover:bg-purple-900',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/endeavouros/ /path/to/local/repo/',
    logoSrc: '/logos/endeavour.webp',
    websiteUrl: 'https://endeavouros.com/',
    isoUrl: 'https://mirrors.aptlantis.net/endeavouros/isos/',
    longDescription: `EndeavourOS is a user-friendly Arch-based distribution that aims to make Arch Linux more accessible without hiding its power. It provides a guided installer, a choice of multiple desktop environments, and a friendly welcome app.

Despite offering convenience tools and post-install scripts, EndeavourOS stays close to Arch’s principles, including a rolling-release model and use of the Arch repositories and AUR.

It’s ideal for intermediate users who want to learn Arch in a gentler environment without switching to bloated or over-customized alternatives.`,
    minimumRequirements: '1 GHz CPU, 1 GB RAM, 10 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      '2 GHz dual-core CPU, 4 GB RAM, 20 GB disk space, 1366×768 graphics, Internet connection',
  },
  {
    id: 'fedora-enchilada',
    title: 'Fedora Enchilada',
    description:
      'The Fedora Enchilada is the full Fedora archive, including source RPMs, alt spins, and historic releases.',
    buttonColor: 'bg-blue-800 dark:bg-blue-950 text-white hover:bg-blue-700 dark:hover:bg-blue-800',
    buttonText: 'Visit Archive',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/fedora-enchilada/ /path/to/local/archive/',
    logoSrc: '/logos/fedora-enchilada.webp',
    websiteUrl: 'https://dl.fedoraproject.org/pub/fedora/',
    isoUrl: 'https://mirrors.aptlantis.net/fedora-enchilada/',
    longDescription: `Fedora Enchilada is the comprehensive archive of everything Fedora Project publishes — not just the Workstation and Server editions, but also source RPMs, Labs, Spins, legacy releases, alternate architectures, and other experimental builds.

It includes software repositories, nightly composes, historical releases, and package trees for x86_64, ARM, aarch64, ppc64le, and more. The "Enchilada" moniker refers to Fedora's philosophy of open, transparent access to its full development output.

APTlantis mirrors the entire Enchilada tree to offer full access for package recovery, offline builds, archival, and Fedora-based distro development.`,
    minimumRequirements: 'Any modern system for browsing or syncing archive files',
    recommendedRequirements:
      'Server or workstation with 100+ GB free space for full mirror; fast Internet recommended',
  },
  {
    id: 'freebsd',
    title: 'FreeBSD',
    description:
      'FreeBSD is a powerful UNIX-like operating system renowned for its performance and advanced networking.',
    buttonColor:
      'bg-indigo-600 dark:bg-indigo-800 text-white hover:bg-indigo-700 dark:hover:bg-indigo-900',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/freebsd/ /path/to/local/repo/',
    logoSrc: '/logos/freebsd.webp',
    websiteUrl: 'https://www.freebsd.org/',
    isoUrl: 'https://mirrors.aptlantis.net/freebsd/isos/',
    longDescription: `FreeBSD is a free and open-source Unix-like operating system that descends from the Berkeley Software Distribution (BSD). It is known for its reliability, performance, advanced networking features, and clear licensing.

First released in 1993, FreeBSD is used widely in server environments, networking infrastructure, embedded systems, and even in commercial appliances (including Netflix and Sony). Unlike Linux, FreeBSD maintains its entire system (kernel, base utilities, and userland) under a unified development tree.

The ports system allows for fine-tuned software compilation and installation, and FreeBSD supports ZFS out of the box, jails for secure containerization, and advanced firewall and routing options. It's a go-to OS for administrators who want stability, security, and control.`,
    minimumRequirements:
      '1 GHz CPU, 512 MB RAM, 5 GB disk space, VGA display, Internet for packages',
    recommendedRequirements:
      '2 GHz dual-core CPU, 2 GB RAM, 20 GB disk space, 1366×768 display, Internet connection',
  },
    {
    id: 'gutenberg',
    title: 'Project Gutenberg',
    description:
      'Project Gutenberg offers over 60,000 free public domain ebooks for offline use or research.',
    buttonColor:
      'bg-yellow-600 dark:bg-yellow-800 text-white hover:bg-yellow-700 dark:hover:bg-yellow-900',
    buttonText: 'Visit Archive',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/gutenberg/ /path/to/local/archive/',
    logoSrc: '/logos/gutenberg.webp',
    websiteUrl: 'https://www.gutenberg.org/',
    isoUrl: 'https://mirrors.aptlantis.net/gutenberg/',
    longDescription: `Project Gutenberg is the oldest digital library of public domain books, started in 1971 by Michael S. Hart. Its mission is to digitize and archive cultural works, and to "encourage the creation and distribution of eBooks."

It provides over 60,000 free eBooks, including classic literature, historical texts, reference works, and more—all available in multiple formats like plain text, ePub, HTML, and Kindle.

APTlantis mirrors this collection to make literature accessible even in offline or censored environments, supporting digital preservation and educational efforts worldwide.`,
    minimumRequirements: 'Any system capable of reading text files or ePub format',
    recommendedRequirements:
      'Desktop/laptop with eBook reader software, 5 GB free space for full archive',
  },
  {
    id: 'gutenberg-generated',
    title: 'Gutenberg-Generated',
    description:
      'Generated datasets from Project Gutenberg, structured for machine learning and text analysis.',
    buttonColor:
      'bg-amber-600 dark:bg-amber-800 text-white hover:bg-amber-700 dark:hover:bg-amber-900',
    buttonText: 'Explore Dataset',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/gutenberg-generated/ /path/to/local/data/',
    logoSrc: '/logos/gutenberg-generated.webp',
    websiteUrl: 'https://aptlantis.net/datasets/gutenberg-generated',
    isoUrl: 'https://mirrors.aptlantis.net/gutenberg-generated/',
    longDescription: `The Gutenberg-Generated collection is a machine-curated dataset derived from Project Gutenberg's library, restructured for use in natural language processing (NLP), text classification, and other machine learning tasks.

Books are preprocessed into plain-text corpora, grouped by genre, century, language, and author, with optional metadata attached. Paragraphs and sentence boundaries are preserved, and optional JSON/CSV versions are available for quick parsing.

This dataset supports digital humanities, AI training, and linguistic research—especially in low-resource or offline scenarios. It's part of APTlantis's mission to preserve and repurpose public domain texts into high-quality data sources.`,
    minimumRequirements:
      'Any system with basic file I/O capability, 10 GB disk space for full archive',
    recommendedRequirements: 'Python or Jupyter environment, 20+ GB space, access to NLP libraries',
  },
  {
    id: 'kali',
    title: 'Kali Linux',
    description:
      'Kali is a Debian-based distro for penetration testing, forensics, and ethical hacking.',
    buttonColor: 'bg-red-700 dark:bg-red-900 text-white hover:bg-red-800 dark:hover:bg-red-950',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/kali/ /path/to/local/repo/',
    logoSrc: '/logos/kali.webp',
    websiteUrl: 'https://www.kali.org/',
    isoUrl: 'https://mirrors.aptlantis.net/kali-images/',
    longDescription: `Kali Linux is a Debian-based Linux distribution developed and maintained by Offensive Security. It is the go-to platform for ethical hackers, security researchers, and penetration testers.

Kali includes hundreds of pre-installed tools for penetration testing, network analysis, reverse engineering, digital forensics, and wireless security. It features custom kernels, live boot support, and ARM builds for devices like Raspberry Pi.

Designed for advanced users, Kali supports full disk encryption, LUKS, and a variety of desktop environments including XFCE, GNOME, and KDE. It can also run in live or persistent USB mode for field operations.`,
    minimumRequirements: '1 GHz CPU, 1 GB RAM, 20 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      'Dual-core CPU, 4 GB RAM, 30 GB disk space, 1366×768 graphics, Internet connection',
  },
  {
    id: 'kaos',
    title: 'KaOS',
    description:
      'KaOS is an independent, KDE-centric rolling-release Linux distro with a focus on Qt and simplicity.',
    buttonColor:
      'bg-fuchsia-700 dark:bg-fuchsia-900 text-white hover:bg-fuchsia-600 dark:hover:bg-fuchsia-800',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/kaos/ /path/to/local/repo/',
    logoSrc: '/logos/kaos.webp',
    websiteUrl: 'https://kaosx.us/',
    isoUrl: 'https://mirrors.aptlantis.net/kaos/isos/',
    longDescription: `KaOS is a sleek and modern independent Linux distribution built from scratch with a singular focus: delivering the best KDE Plasma desktop experience using pure Qt technologies.

It uses a rolling-release model, pacman as its package manager (like Arch), and its own repositories—not based on Arch, Debian, or Fedora. KaOS packages only one desktop environment (KDE Plasma) and includes hand-picked applications that follow the Qt toolkit philosophy.

With its curated scope, KaOS maintains a clean, coherent, and highly optimized environment, ideal for users who want an up-to-date and unified Qt-first desktop without distro sprawl.`,
    minimumRequirements: '64-bit CPU, 2 GB RAM, 10 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      'Dual-core CPU, 4 GB RAM, 20 GB SSD, 1366×768 graphics, Internet access',
  },
  {
    id: 'kdeneon',
    title: 'KDE Neon',
    description:
      'KDE Neon offers a stable Ubuntu LTS base with the latest KDE Plasma desktop and apps.',
    buttonColor: 'bg-pink-600 dark:bg-pink-800 text-white hover:bg-pink-700 dark:hover:bg-pink-900',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/kdeneon/ /path/to/local/repo/',
    logoSrc: '/logos/kdeneon.webp',
    websiteUrl: 'https://neon.kde.org/',
    isoUrl: 'https://mirrors.aptlantis.net/kdeneon/isos/',
    longDescription: `KDE Neon is an Ubuntu-based Linux distribution built by the KDE community to showcase the latest Plasma desktop environment and KDE applications. It provides users with a cutting-edge KDE experience while retaining the stability of Ubuntu LTS as its base.

KDE Neon is not a general-purpose distro but a focused platform for those who want the latest and greatest KDE technologies with minimal overhead. It offers multiple editions, including User, Testing, and Developer, catering to different levels of bleeding-edge preferences.

Thanks to daily builds of Plasma, Frameworks, and KDE apps, it is ideal for KDE enthusiasts and contributors who want fast access to the newest features, themes, and widgets.`,
    minimumRequirements:
      '1.6 GHz CPU, 2 GB RAM, 10 GB disk space, 1024×768 display, Internet connection',
    recommendedRequirements:
      '2 GHz dual-core CPU, 4 GB RAM, 20 GB disk space, 1366×768 display, Broadband connection',
  },
  {
    id: 'linuxmint',
    title: 'Linux Mint',
    description:
      'Linux Mint is a beginner-friendly desktop Linux distro known for its polish, ease of use, and Windows-like layout.',
    buttonColor:
      'bg-green-600 dark:bg-green-800 text-white hover:bg-green-700 dark:hover:bg-green-900',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/linuxmint/ /path/to/local/repo/',
    logoSrc: '/logos/linuxmint.webp',
    websiteUrl: 'https://linuxmint.com/',
    isoUrl: 'https://mirrors.aptlantis.net/linuxmint-images/',
    longDescription: `Linux Mint is an Ubuntu- and Debian-based desktop Linux distribution focused on usability, stability, and simplicity. With a familiar interface and strong multimedia support out of the box, it's widely recommended as a first distro for users switching from Windows.

It offers three main desktop environments—Cinnamon (its flagship), MATE, and Xfce—each designed for performance and ease of navigation. Linux Mint comes with a large set of pre-installed applications, a Software Manager, and graphical system tools to manage drivers, updates, and settings without using the command line.

Mint emphasizes staying out of the user's way while providing a complete and comfortable desktop experience. Regular LTS releases ensure long-term support and predictable upgrades.`,
    minimumRequirements: '1 GHz CPU, 2 GB RAM, 15 GB disk space, 1024×768 display',
    recommendedRequirements:
      '2 GHz dual-core CPU, 4 GB RAM, 25 GB SSD space, 1366×768+ display, Internet access',
  },
  {
  id: "manjaro",
  title: "Manjaro Linux",
  description: "Manjaro is a user-friendly, Arch-based distro with its own tools and polished desktop editions.",
  buttonColor: "bg-emerald-700 dark:bg-emerald-900 text-white hover:bg-emerald-600 dark:hover:bg-emerald-800",
  buttonText: "Visit Website",
  rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/manjaro/ /path/to/local/repo/",
  logoSrc: "/logos/manjaro.webp",
  websiteUrl: "https://manjaro.org/",
  isoUrl: "https://mirrors.aptlantis.net/manjaro/isos/",
  longDescription: `Manjaro Linux is a user-friendly distribution based on Arch Linux that aims to make Arch's power and flexibility accessible to a broader audience. It features preconfigured desktop environments (XFCE, KDE, GNOME), an installer, and hardware detection tools.

Manjaro uses its own stable package repositories synced from Arch after additional testing. It includes custom utilities like Manjaro Settings Manager and hardware driver installers.

It’s ideal for users who want Arch’s rolling release model with easier installation, excellent hardware support, and polished user experience.`,
  minimumRequirements: "1 GHz CPU, 1 GB RAM, 10 GB disk space",
  recommendedRequirements: "2+ GHz CPU, 4 GB RAM, 25 GB SSD, 1366×768 graphics, Internet access"
  },
  {
    id: 'mx-antix',
    title: 'MX Linux + antiX',
    description:
      'MX and antiX are lightweight, user-friendly distros based on Debian Stable, optimized for performance.',
    buttonColor: 'bg-blue-600 dark:bg-blue-800 text-white hover:bg-blue-700 dark:hover:bg-blue-900',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/mx-linux/ /path/to/local/repo/',
    logoSrc: '/logos/mx-antix.webp',
    websiteUrl: 'https://mxlinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/mxlinux-isos/',
    longDescription: `MX Linux is a Debian-based midweight Linux distribution that pairs simplicity with power. Developed by the MX and antiX communities, it features a highly customized XFCE desktop environment, performance tools, and thoughtful utilities like MX Snapshot and MX Tools.

antiX, a sibling distro, is a super-lightweight variant optimized for older or resource-constrained systems. It uses either IceWM or Fluxbox and avoids systemd by default.

MX is ideal for mainstream desktops and laptops, while antiX excels on legacy hardware and minimal systems. Both emphasize stability, speed, and user empowerment, with a strong, friendly community behind them.`,
    minimumRequirements: '1 GHz CPU, 512 MB RAM, 5 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      '2 GHz CPU, 2 GB RAM, 10 GB disk space, 1366×768 graphics, Internet connection',
  },
  {
  id: "nixos",
  title: "NixOS",
  description: "NixOS is a declarative, reproducible Linux distro powered by the Nix package manager.",
  buttonColor: "bg-cyan-700 dark:bg-cyan-900 text-white hover:bg-cyan-600 dark:hover:bg-cyan-800",
  buttonText: "Visit Website",
  rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/nixos/ /path/to/local/repo/",
  logoSrc: "/logos/nixos.webp",
  websiteUrl: "https://nixos.org/",
  isoUrl: "https://mirrors.aptlantis.net/nixos/isos/",
  longDescription: `NixOS is an innovative Linux distribution built around the Nix package manager. It allows for fully declarative system configurations and atomic upgrades, making rollbacks and reproducible setups effortless.

Instead of modifying configuration files directly, users define their entire system in a single config file, making NixOS popular in DevOps, research, and infrastructure-as-code environments.

Its unique approach ensures isolation, consistency, and flexibility unlike any traditional Linux distro. It supports both x86_64 and ARM architectures with full desktop or minimal options.`,
  minimumRequirements: "2 GB RAM, 10 GB disk, x86_64 or aarch64 CPU",
  recommendedRequirements: "Quad-core CPU, 4+ GB RAM, 20+ GB disk, Internet access for builds"
  },
  {
    id: 'openbsd',
    title: 'OpenBSD',
    description:
      'OpenBSD is a security-focused, minimalist UNIX-like OS with an emphasis on code correctness.',
    buttonColor: 'bg-teal-800 dark:bg-teal-950 text-white hover:bg-teal-700 dark:hover:bg-teal-900',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/openbsd/ /path/to/local/repo/',
    logoSrc: '/logos/openbsd.webp',
    websiteUrl: 'https://www.openbsd.org/',
    isoUrl: 'https://mirrors.aptlantis.net/openbsd/',
    longDescription: `OpenBSD is a highly secure, free, and open-source UNIX-like operating system descended from BSD. It is renowned for its proactive security practices, minimalism, and clean, auditable codebase.

Developed by the OpenBSD Project under Theo de Raadt, OpenBSD integrates security enhancements like exploit mitigation, strong defaults, privilege separation, and cryptographic innovations. It's the origin of OpenSSH and OpenBGPD.

OpenBSD is ideal for firewalls, security appliances, and minimalist workstations, and it supports multiple architectures including amd64, arm64, and RISC-V.`,
    minimumRequirements: 'Any 64-bit CPU, 256 MB RAM, 1 GB disk space, text or framebuffer display',
    recommendedRequirements:
      '1 GHz CPU, 1 GB RAM, 5 GB disk space, Ethernet or Wi-Fi, minimal hardware',
  },
  {
  id: "openmandriva",
  title: "OpenMandriva",
  description: "OpenMandriva is a user-friendly, European Linux distro descended from Mandriva.",
  buttonColor: "bg-indigo-600 dark:bg-indigo-800 text-white hover:bg-indigo-500 dark:hover:bg-indigo-700",
  buttonText: "Visit Website",
  rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/openmandriva/ /path/to/local/repo/",
  logoSrc: "/logos/openmandriva.webp",
  websiteUrl: "https://www.openmandriva.org/",
  isoUrl: "https://mirrors.aptlantis.net/openmandriva/isos/",
  longDescription: `OpenMandriva Lx is a desktop Linux distribution descended from the once-popular Mandriva Linux. Developed by a European community foundation, it focuses on modern performance, simplicity, and beautiful design.

It ships with KDE Plasma by default and supports recent hardware via the latest kernels and LLVM-based toolchains. OpenMandriva emphasizes accessibility and polish with GUI tools for most system operations.

It's a great choice for users who want a ready-to-use, full-featured Linux desktop with a European touch and open governance.`,
  minimumRequirements: "1.5 GHz CPU, 2 GB RAM, 10 GB disk space",
  recommendedRequirements: "Dual-core CPU, 4 GB RAM, 20 GB disk space, Internet connection"
  },
  {
    id: 'parrotos',
    title: 'Parrot OS',
    description:
      'Parrot OS is a Debian-based distribution for ethical hacking, digital forensics, and cybersecurity.',
    buttonColor: 'bg-blue-700 dark:bg-blue-900 text-white hover:bg-blue-800 dark:hover:bg-blue-950',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/parrot/ /path/to/local/repo/',
    logoSrc: '/logos/parrot.webp',
    websiteUrl: 'https://www.parrotsec.org/',
    isoUrl: 'https://mirrors.aptlantis.net/parrot/isos/',
    longDescription: `Parrot OS is a security-focused Linux distribution based on Debian. It is designed for cybersecurity professionals, penetration testers, and privacy-conscious users.

It includes a full suite of tools for digital forensics, reverse engineering, malware analysis, cryptography, anonymity, and software development. Available in multiple editions—including Security, Home, and Architect—Parrot OS balances cutting-edge security utilities with a lightweight desktop experience via MATE or KDE.

Parrot supports secure browsing via AnonSurf and Tor, sandboxed environments using Firejail, and containerized tools. It's regularly updated and maintained by the ParrotSec team and supported by a global community of ethical hackers and researchers.`,
    minimumRequirements: '1 GHz CPU, 2 GB RAM, 20 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      '2 GHz dual-core CPU, 4 GB RAM, 30 GB SSD, 1366×768 graphics, Internet connection',
  },
  {
    id: 'puppy',
    title: 'Puppy Linux',
    description:
      'Puppy Linux is a tiny, fast Linux distro that runs entirely from RAM, perfect for old or low-spec machines.',
    buttonColor:
      'bg-orange-500 dark:bg-orange-700 text-white hover:bg-orange-600 dark:hover:bg-orange-800',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/puppylinux/ /path/to/local/repo/',
    logoSrc: '/logos/puppy.webp',
    websiteUrl: 'https://puppylinux.com/',
    isoUrl: 'https://mirrors.aptlantis.net/puppylinux/',
    longDescription: `Puppy Linux is an ultra-lightweight Linux distribution designed to run fast, even on very old hardware. It can boot entirely into RAM, providing a lightning-fast desktop experience with minimal resource usage.

Despite its tiny size (typically under 400MB), Puppy includes a full graphical interface, web browser, text editor, and software package manager. It supports live-booting from USB, CD, or even a network, and can save user data persistently across reboots.

Puppy comes in multiple "puplets" built from different upstream bases—like Ubuntu or Slackware—while maintaining its unique in-house toolset and philosophy.`,
    minimumRequirements:
      'Pentium III or newer, 256 MB RAM, 512 MB disk space, CD/USB boot capability',
    recommendedRequirements:
      '1 GHz CPU, 512 MB RAM, 2 GB disk space, persistent storage, Internet connection',
  },
  {
    id: 'rockylinux',
    title: 'Rocky Linux',
    description:
      'Rocky Linux is a free, enterprise-grade RHEL-compatible distro developed by the community.',
    buttonColor:
      'bg-stone-700 dark:bg-stone-900 text-white hover:bg-stone-600 dark:hover:bg-stone-800',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/rocky/ /path/to/local/repo/',
    logoSrc: '/logos/rocky.webp',
    websiteUrl: 'https://rockylinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/rocky/isos/',
    longDescription: `Rocky Linux is a community-driven, enterprise-ready Linux distribution created as a drop-in replacement for CentOS after Red Hat shifted CentOS to a rolling-release model. It maintains full binary compatibility with Red Hat Enterprise Linux (RHEL).

The project was founded by Gregory Kurtzer, one of the original CentOS creators, and is stewarded by the Rocky Enterprise Software Foundation (RESF). Rocky is built for stability, long-term support, and performance in production environments.

It is a trusted solution for servers, workstations, container hosts, and cloud infrastructure where predictable updates and enterprise reliability are critical.`,
    minimumRequirements: '1 GHz CPU, 1 GB RAM, 10 GB disk space, VGA graphics',
    recommendedRequirements:
      '2 GHz CPU, 4 GB RAM, 25 GB disk space, 1366×768 graphics, Internet for updates',
  },

  {
    id: 'redcore',
    title: 'Redcore Linux',
    description:
      'Redcore is a Gentoo-based desktop distro with binary packages and bleeding-edge software.',
    buttonColor: 'bg-rose-700 dark:bg-rose-900 text-white hover:bg-rose-600 dark:hover:bg-rose-800',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/redcore/ /path/to/local/repo/',
    logoSrc: '/logos/redcore.webp',
    websiteUrl: 'https://redcorelinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/redcore/isos/',
    longDescription: `Redcore Linux is a Gentoo-based distribution that simplifies the Gentoo experience by offering precompiled binary packages and a fast install process. It aims to provide the power of Gentoo with the convenience of a modern desktop OS.

Redcore features the KDE Plasma desktop, a full suite of desktop applications, system tools, and a built-in binary package manager (sisyphus) layered over Gentoo's Portage.

It supports advanced use cases like Gentoo source compilation, rolling updates, and user customization while making it easier to install and maintain. Redcore is ideal for power users who want Gentoo's flexibility without the lengthy compile times.`,
    minimumRequirements: 'Dual-core CPU, 2 GB RAM, 20 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      'Quad-core CPU, 4 GB RAM, 40 GB disk space, 1366×768+ graphics, Internet access',
  },
  {
    id: 'solus',
    title: 'Solus',
    description:
      'Solus is an independent Linux distro built for home computing with a curated desktop experience.',
    buttonColor: 'bg-cyan-600 dark:bg-cyan-800 text-white hover:bg-cyan-700 dark:hover:bg-cyan-900',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/solus/ /path/to/local/repo/',
    logoSrc: '/logos/solus.webp',
    websiteUrl: 'https://getsol.us/',
    isoUrl: 'https://mirrors.aptlantis.net/solus/isos/',
    longDescription: `Solus is an independently developed Linux distribution designed for desktop computing. It offers a curated, user-focused experience with built-in tools and thoughtful defaults aimed at productivity and ease of use.

It features the Budgie desktop environment (developed in-house), along with support for GNOME, KDE Plasma, and MATE editions. Solus uses the eopkg package manager and a semi-rolling release model — core system packages are updated regularly, while stability is preserved for users.

Solus is known for its elegant interface, excellent out-of-the-box experience, and performance optimizations. It's a great choice for developers, creators, and anyone seeking a polished, standalone Linux system that isn't based on Debian, Arch, or Fedora.`,
    minimumRequirements:
      '64-bit processor, 2 GB RAM, 10 GB disk space, 1024×768 graphics, Internet connection',
    recommendedRequirements:
      '2 GHz dual-core CPU, 4 GB RAM, 20 GB disk space, 1366×768 graphics, Broadband connection',
  },
  {
  id: "ubuntu",
  title: "Ubuntu",
  description: "Ubuntu is the world’s most popular desktop and cloud Linux OS, backed by Canonical.",
  buttonColor: "bg-orange-600 dark:bg-orange-800 text-white hover:bg-orange-500 dark:hover:bg-orange-700",
  buttonText: "Visit Website",
  rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/ubuntu/ /path/to/local/repo/",
  logoSrc: "/logos/ubuntu.webp",
  websiteUrl: "https://ubuntu.com/",
  isoUrl: "https://mirrors.aptlantis.net/ubuntu/isos/",
  longDescription: `Ubuntu is a widely used Debian-based Linux distribution developed and maintained by Canonical. It is available in desktop, server, IoT, and cloud editions with LTS (Long-Term Support) releases every two years.

Known for its user-friendliness and robust support, Ubuntu powers everything from laptops and workstations to containerized cloud platforms and Raspberry Pi clusters.

APTlantis mirrors the full Ubuntu archive, including all architectures, flavors (like Kubuntu, Xubuntu, and Ubuntu MATE), and ISO builds for quick local deployment.`,
  minimumRequirements: "2 GHz CPU, 2 GB RAM, 25 GB disk space, VGA graphics",
  recommendedRequirements: "Dual-core CPU, 4 GB RAM, 30+ GB SSD, 1366×768+ display, Internet access"
  },
  {
    id: 'voidlinux',
    title: 'Void Linux',
    description:
      'Void Linux is an independent, systemd-free rolling-release distro with its own package system and musl/glibc support.',
    buttonColor:
      'bg-neutral-700 dark:bg-neutral-900 text-white hover:bg-neutral-600 dark:hover:bg-neutral-800',
    buttonText: 'Visit Website',
    rsyncCommand:
      'rsync -avz --delete rsync://mirrors.aptlantis.net/voidlinux/ /path/to/local/repo/',
    logoSrc: '/logos/void.webp',
    websiteUrl: 'https://voidlinux.org/',
    isoUrl: 'https://mirrors.aptlantis.net/voidlinux/',
    longDescription: `Void Linux is an independent Linux distribution built from scratch with a unique take on how a Unix-like system should operate. It features the runit init system (instead of systemd), its own xbps package manager, and offers both musl and glibc versions.

Void is a true rolling-release distro aimed at users who want performance, simplicity, and full control of their environment. Its lean design makes it suitable for desktops, servers, and embedded devices alike.

Void supports multiple architectures including x86_64, aarch64, and RISC-V, and is particularly favored by advanced users who want a minimalist, fast, and systemd-free Linux experience.`,
    minimumRequirements: '1 GHz CPU, 512 MB RAM, 3 GB disk space, basic graphics',
    recommendedRequirements:
      '2 GHz CPU, 2 GB RAM, 10 GB disk space, 1366×768 graphics, Internet connection',
  },
  {
    id: 'zorin',
    title: 'Zorin OS',
    description:
      'Zorin OS is an Ubuntu-based distro designed to ease the transition from Windows and macOS.',
    buttonColor: 'bg-cyan-600 dark:bg-cyan-800 text-white hover:bg-cyan-700 dark:hover:bg-cyan-900',
    buttonText: 'Visit Website',
    rsyncCommand: 'rsync -avz --delete rsync://mirrors.aptlantis.net/zorin/ /path/to/local/repo/',
    logoSrc: '/logos/zorin.webp',
    websiteUrl: 'https://zorin.com/os/',
    isoUrl: 'https://mirrors.aptlantis.net/zorin/isos/',
    longDescription: `Zorin OS is an Ubuntu-based Linux distribution created to provide a familiar and accessible experience for users migrating from Windows or macOS. It features a sleek, modern desktop and multiple layout modes that imitate the look of Windows 11, macOS, or GNOME.

It comes in multiple editions: Core (free), Lite (for older hardware), Education, and Pro (paid, with extra apps and layouts). Zorin includes a curated app store, built-in WINE support for running Windows apps, and excellent hardware compatibility.

Zorin is ideal for new Linux users, schools, and organizations seeking an easy-to-use, modern desktop platform with a touch of familiarity.`,
    minimumRequirements: '1 GHz dual-core CPU, 2 GB RAM, 15 GB disk space, 1024×768 graphics',
    recommendedRequirements:
      '2 GHz CPU, 4 GB RAM, 30 GB disk space, 1366×768 graphics, Internet access',
  },
  {
    id: "turnkeylinux",
    title: "TurnKey Linux",
    description: "TurnKey Linux offers ready-to-deploy Debian-based server appliances for every use case.",
    buttonColor: "bg-sky-700 dark:bg-sky-900 text-white hover:bg-sky-600 dark:hover:bg-sky-800",
    buttonText: "Visit Website",
    rsyncCommand: "rsync -avz --delete rsync://mirrors.aptlantis.net/turnkeylinux/ /path/to/local/appliances/",
    logoSrc: "/logos/turnkey.webp",
    websiteUrl: "https://www.turnkeylinux.org/",
    isoUrl: "https://mirrors.aptlantis.net/turnkeylinux/isos/",
    longDescription: `TurnKey Linux is a library of pre-integrated, Debian-based server appliances that allow anyone to deploy complex services in minutes. Each appliance bundles a hardened OS with preinstalled web apps, CMS platforms, databases, development stacks, and more.

Examples include WordPress, LAMP, GitLab, OpenLDAP, and File Server—all preconfigured and security-patched. TurnKey VMs work with bare metal, Proxmox, VMware, VirtualBox, and cloud platforms.

APTlantis mirrors the full ISO and VM image catalog to support DevOps workflows, rapid prototyping, and air-gapped environments.`,
    minimumRequirements: "x86_64 CPU, 512 MB RAM, 1 GB disk",
    recommendedRequirements: "Dual-core CPU, 2 GB RAM, 4+ GB disk, virtualization support"
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
    id: 'almalinux',
    title: 'AlmaLinux',
    description:
        'AlmaLinux is a community-driven replacement for CentOS, built for stability and enterprise workloads.',
    buttonColor: 'bg-blue-600 dark:bg-blue-800 text-white hover:bg-blue-700 dark:hover:bg-blue-900',
    buttonText: 'Visit Website',
    rsyncCommand:
        'rsync -avz --delete rsync://mirrors.aptlantis.net/almalinux/ /path/to/local/repo/',
    logoSrc: '/logos/almaLINUX.webp',
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
];
