import type {Metadata} from 'next';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'EV Repair & Charger Installation Dubai | Expert Services',
  description: 'Top-rated EV charger installation, repair, and maintenance in Dubai. Specializing in Tesla charger installation, home & commercial EV charging stations.',
  alternates: {
    canonical: 'https://www.evrepairdubai.com',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${mono.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 font-sans antialiased selection:bg-sky-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
