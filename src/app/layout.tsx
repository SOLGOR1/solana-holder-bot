import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Solana Holder Bot - Automate Your Holder Growth',
  description: 'Boost your Solana project with Solana Holder Bot – the fast, secure tool to automate holder growth with token distribution.',
  keywords: 'Solana, Holder, Bot, holder growth, boost holder, increase holder, Automation, Crypto',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}