const en = {
  nav: {
    sobre: 'About',
    projetos: 'Work',
    skills: 'Skills',
    contato: 'Contact',
  },
  hero: {
    name: 'Rodolfo Henrique Raymundo Engelmann',
    role: 'Computer Engineering · Developer',
    bio: 'Computer Engineering student at Instituto Federal de São Paulo. Interested in software development — Python, backend and web.',
    status: 'Open to opportunities',
  },
  sections: {
    sobre: 'About',
    projetos: 'Selected work',
    skills: 'Skills',
    contato: 'Contact',
  },
  placeholder: 'Under construction',
  theme: {
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
  },
  projects: [
    {
      title: 'QR Studio',
      description:
        'A desktop QR code generator: fast, beautiful and fully offline. Five content types (URL, text, Wi-Fi, email, vCard), full styling and PNG/SVG export.',
      stack: ['React', 'Vite', 'Tauri', 'Rust', 'qr-code-styling'],
      href: 'https://github.com/RodolfoHRE/qr_studio',
      live: 'https://rodolfohre.github.io/qr_studio/',
      liveLabel: 'Live',
    },
    {
      title: 'echo karaoke',
      description:
        'A desktop karaoke app built with Electron. Searches YouTube, builds a queue, favorites and plays — all with a custom UI. Packaged for Windows and Linux via CI, with no API key embedded: users configure their own in-app.',
      stack: ['Electron', 'JavaScript', 'YouTube API', 'GitHub Actions', 'Desktop'],
      href: 'https://github.com/RodolfoHRE/Projeto-karaoke',
      live: 'https://rodolfohre.github.io/Projeto-karaoke/',
      liveLabel: 'Live',
    },
  ],
  footer: 'Built with Next.js',
};

export default en;
