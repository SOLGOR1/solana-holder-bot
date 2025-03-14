import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Solana Holder Bot - Automate Your Holder Growth',
  description: 'Automatisiere deine Solana Holdings mit unserem schnellen, sicheren Bot.',
  keywords: 'Solana, Holder, Bot, Automation, Crypto',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}