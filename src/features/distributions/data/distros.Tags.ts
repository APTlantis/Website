// This file contains tags for Linux distributions
// Tags are used to categorize and filter distributions

export const distroTags: Record<string, string[]> = {
  // Arch-based
  archlinux: ['Independent', 'Rolling release', 'Minimalist', 'Pacman'],
  artix: ['Arch-based', 'systemd-free', 'Rolling release'],
  blackarch: ['Arch-based', 'Pentesting', 'Rolling release', 'Security-focused'],
  manjaro: ['Arch-based', 'Beginner-friendly', 'Preconfigured', 'Rolling release'],
  endeavouros: ['Arch-based', 'Community-driven', 'Minimalist', 'Rolling release'],

  // Debian-based
  debian: ['Debian-based', 'Stable', 'Versatile', 'Multi-architecture'],
  ubuntu: ['Debian-based', 'Beginner-friendly', 'Widely used'],
  kubuntu: ['Ubuntu-based', 'KDE', 'User-friendly'],
  xubuntu: ['Ubuntu-based', 'XFCE', 'Lightweight'],
  linuxmint: ['Ubuntu-based', 'Beginner-friendly', 'Windows-like', 'Desktop-focused'],
  zorin: ['Ubuntu-based', 'Beginner-friendly', 'Windows-like', 'Polished UI'],
  trisquel: ['Ubuntu-based', 'FSF-endorsed', 'Libre-only', 'systemd'],
  'mx-antix': ['Debian-based', 'systemd-optional', 'Lightweight', 'User-friendly'],
  'devuan-alt': ['Debian-based', 'systemd-free', 'Stable', 'Server-friendly'],
  backbox: ['Security-focused', 'Pentesting', 'Ubuntu-based'],
  kali: ['Security-focused', 'Pentesting', 'Debian-based', 'Live environment'],
  parrotos: ['Security-focused', 'Pentesting', 'Debian-based', 'Anonymity tools'],
  deepin: ['Debian-based', 'Design-focused', 'Modern UI', 'Chinese-developed'],

  // RPM-based / Enterprise
  almalinux: ['RHEL-compatible', 'Enterprise', 'Server', 'Stable'],
  rockylinux: ['RHEL-compatible', 'Enterprise', 'Server', 'Stable'],
  opensuse: ['RPM-based', 'Enterprise', 'Btrfs', 'YaST', 'Tumbleweed'],
  openmandriva: ['RPM-based', 'Desktop-focused', 'KDE', 'Rolling release'],
  'fedora-enchilada': ['RPM-based', 'Enterprise', 'Fedora', 'Complete archive'],

  // Gentoo-based
  calculate: ['Gentoo-based', 'Binary packages', 'Enterprise', 'KDE', 'Rolling release'],
  redcore: ['Gentoo-based', 'Binary packages', 'Rolling release', 'KDE', 'Power user'],
  gentoo: ['Source-based', 'Portage', 'Customizable', 'Performance-focused'],

  // Security-focused / Pentesting
  athena: ['Security-focused', 'Pentesting', 'Containerized', 'openSUSE-based'],
  qubes: ['Security-focused', 'Virtualization', 'Compartmentalization'],
  whonix: ['Privacy-focused', 'Tor', 'Anonymity', 'Security', 'Virtualized', 'Metadata protection'],

  // Independent / Custom
  alpine: ['Independent', 'Lightweight', 'Security-focused', 'musl libc'],
  voidlinux: ['Independent', 'systemd-free', 'Rolling release', 'runit', 'Minimalist'],
  slackware: ['Independent', 'Traditional', 'Stability', 'Simplicity'],
  puppy: ['Independent', 'Lightweight', 'RAM-based', 'Live-only'],
  pclinux: ['Independent', 'User-friendly', 'KDE', 'Stability'],
  turnkey: ['Debian-based', 'Server', 'Appliance', 'Pre-configured'],
  solus: ['Independent', 'Desktop-focused', 'Budgie', 'Curated'],
  kaos: ['Independent', 'KDE-focused', 'Rolling release', 'Qt-centric'],
  kdeneon: ['Ubuntu-based', 'KDE-focused', 'Latest Plasma'],
  altlinux: ['Independent', 'Russian', 'Enterprise', 'Education'],
  parabola: ['Arch-based', 'FSF-endorsed', 'Libre-only'],

  // BSD / UNIX
  openbsd: ['BSD', 'Security-focused', 'Minimalist', 'UNIX', 'OpenSSH-origin'],
  freebsd: ['BSD', 'Server-friendly', 'ZFS', 'Jails', 'UNIX'],
  reactos: ['Windows-compatible', 'Open-source', 'NT-architecture'],
  ravynos: ['BSD-based', 'macOS-like', 'Desktop-focused'],
  kolibrios: ['Independent', 'Assembly', 'Minimalist', 'Fast'],
    cpan: ['Perl', 'Programming ecosystem', 'Archive', 'Cross-platform'],
  'cran-r': ['R language', 'Statistical tools', 'Data science', 'Academic'],
  devuan: ['Debian-based', 'systemd-free', 'Stable', 'Server-friendly'],
  nixos: ['Independent', 'Reproducible', 'Declarative', 'DevOps', 'Infrastructure as Code'],
  pypi: ['Python', 'Programming ecosystem', 'Machine learning', 'Offline dev', 'Data science'],
  raspberrypi: ['Debian-based', 'ARM', 'Educational', 'Lightweight', 'Single-board'],
  rayvnos: ['Independent', 'Creative-focused', 'Minimalist', 'Experimental', 'Privacy-conscious'],
  rust: ['Rust language', 'Programming ecosystem', 'Developer tools', 'Offline builds'],
  sabayon: ['Gentoo-based', 'Discontinued', 'Rolling release', 'Multimedia', 'User-friendly'],
  starcoder: ['Dataset', 'Code LLMs', 'Open source', 'Machine learning', 'AI training'],
  tails: ['Debian-based', 'Privacy-focused', 'Tor', 'Live OS', 'Amnesic'],
  'the-stack': ['Dataset', 'Programming languages', 'BigCode', 'LLM training', 'Source code'],
  'the-stack-v2': ['Dataset', 'Deduplicated', 'BigCode', 'LLM training', 'Permissive licenses'],

  // Services and Archives
  flathub: ['Package repository', 'Flatpak', 'Cross-distro', 'Sandboxed'],
  gutenberg: ['Digital library', 'eBooks', 'Public domain', 'Archive'],
  'gutenberg-generated': ['Dataset', 'Machine learning', 'Text corpus', 'NLP'],

  // Museum Distros
  templeos: ['Independent', 'Religious', 'x86_64', 'Single-user', 'Museum'],
  phoenixos: ['Android-based', 'Desktop', 'Gaming', 'Museum'],
  sparrow: ['Lightweight', 'Minimalist', 'Debian-based', 'Museum'],
  hoppi: ['Educational', 'Child-friendly', 'Ubuntu-based', 'Museum'],
  zenith: ['Multimedia', 'Creative', 'Arch-based', 'Museum'],
};
