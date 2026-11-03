import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://abmar.org.br'),
  title: { default: 'ABMAR | Medicina de Áreas Remotas e Esportes de Aventura', template: '%s | ABMAR' },
  description: 'Associação Brasileira de Medicina de Áreas Remotas e Esportes de Aventura. Ciência, educação e comunidade onde a medicina mais precisa chegar.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'ABMAR', url: 'https://abmar.org.br', title: 'ABMAR | Medicina de Áreas Remotas e Esportes de Aventura', description: 'Ciência, educação e comunidade para a medicina de áreas remotas.' },
  robots: { index: true, follow: true },
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
