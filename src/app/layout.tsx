import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Solana Holder Bot - Automate Your Holder Growth',
  description: 'Boost your Solana project with Solana Holder Bot – the fast, secure tool to automate holder growth with token distribution.',
  keywords: 'Solana, Holder, Bot, holder growth, boost holder, increase holder, Automation, Crypto',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Optional: Favicon für Browser */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}