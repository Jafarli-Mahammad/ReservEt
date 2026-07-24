import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Rezerv.az - Onlayn Görüş Təyinatı və CRM Platforması',
  description: 'Həkimlər, bərbərlər, gözəllik salonları və xidmət sektoru üçün Apple & Stripe keyfiyyətli platforma.',
  manifest: '/manifest.json',
  themeColor: '#0EA5E9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az" className="dark">
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} bg-[#0B0F17] text-gray-100 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
