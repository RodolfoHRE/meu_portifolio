const pt = {
  nav: {
    sobre: 'Sobre',
    projetos: 'Projetos',
    skills: 'Habilidades',
    contato: 'Contato',
  },
  hero: {
    name: 'Rodolfo Henrique Raymundo Engelmann',
    role: 'Engenharia da Computação · Desenvolvedor',
    bio: 'Estudante de Engenharia da Computação no Instituto Federal de São Paulo. Interesse em desenvolvimento de software — Python, backend e web.',
    status: 'Aberto a oportunidades',
  },
  sections: {
    sobre: 'Sobre',
    projetos: 'Projetos selecionados',
    skills: 'Habilidades',
    contato: 'Contato',
  },
  placeholder: 'Em construção',
  contato: {
    heading: 'Entre em contato',
    prose:
      'Estou aberto a oportunidades júnior em Python, backend e desenvolvimento web. Fique à vontade para entrar em contato pelos canais abaixo.',
    links: [
      {
        label: 'Email',
        value: 'rodolfohrengelmann@gmail.com',
        href: 'mailto:rodolfohrengelmann@gmail.com',
      },
      {
        label: 'LinkedIn',
        value: 'rodolfo-h-raymundo-engelmann',
        href: 'https://www.linkedin.com/in/rodolfo-h-raymundo-engelmann/',
      },
      {
        label: 'GitHub',
        value: 'RodolfoHRE',
        href: 'https://github.com/RodolfoHRE',
      },
    ],
    cvLabel: 'Currículo',
    cvValue: 'PDF (pt-BR)',
    cvFile: 'curriculo-rodolfo-pt.pdf',
  },
  theme: {
    toDark: 'Ativar tema escuro',
    toLight: 'Ativar tema claro',
  },
  projects: [
    {
      title: 'QR Studio',
      description:
        'Gerador de QR codes para desktop: rápido, bonito e 100% offline. Cinco tipos de conteúdo (URL, texto, Wi-Fi, e-mail, vCard), estilização completa e export PNG/SVG.',
      stack: ['React', 'Vite', 'Tauri', 'Rust', 'qr-code-styling'],
      href: 'https://github.com/RodolfoHRE/qr_studio',
      live: 'https://rodolfohre.github.io/qr_studio/',
      liveLabel: 'Ver site',
    },
    {
      title: 'echo karaoke',
      description:
        'App de karaokê para desktop em Electron. Busca vídeos no YouTube, monta fila, favorita e toca — tudo com UI própria em pt-BR. Empacotado para Windows e Linux via CI, sem nenhuma chave de API embarcada: o usuário configura a dele in-app.',
      stack: ['Electron', 'JavaScript', 'YouTube API', 'GitHub Actions', 'Desktop'],
      href: 'https://github.com/RodolfoHRE/Projeto-karaoke',
      live: 'https://rodolfohre.github.io/Projeto-karaoke/',
      liveLabel: 'Ver site',
    },
  ],
  footer: 'Feito com Next.js',
};

export default pt;
