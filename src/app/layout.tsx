import type { Metadata } from 'next';
import './globals.css';
import Container from '@/components/container/Container';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'OtoFocus',
  description: 'OtoFocus Photography Portfolio Website',
  icons: {
    icon: '/svg/minilogo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-instrument">
        <Container>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
