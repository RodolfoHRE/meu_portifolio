import { Inter, JetBrains_Mono } from 'next/font/google';
import Providers from './providers';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = 'https://rodolfohre.github.io/portfolio/';
const OG_IMAGE = 'https://rodolfohre.github.io/portfolio/og.png';
const TITLE = 'Rodolfo Henrique Raymundo Engelmann — Desenvolvedor Backend';
const DESCRIPTION =
  'Desenvolvedor júnior focado em backend com Python (Django, Flask) e front-end com React. Estudante de Engenharia da Computação, aberto a oportunidades.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Rodolfo Engelmann',
    'desenvolvedor backend',
    'Python',
    'Django',
    'Flask',
    'React',
    'portfólio',
  ],
  authors: [{ name: 'Rodolfo Henrique Raymundo Engelmann' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Rodolfo Engelmann',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased bg-bg text-fg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
