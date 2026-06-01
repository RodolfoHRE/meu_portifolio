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

export const metadata = {
  title: 'Rodolfo Engelmann — Portfólio',
  description: 'Engenharia da Computação · Desenvolvimento web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-bg text-fg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
