import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from "next/font/google";
import "../styles/index.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: 'Kiruthi Raghavendran | Software Developer',
  description:
    'Portfolio of Kiruthi Raghavendran showcasing web development projects, SQL systems, and project execution experience.',
  keywords: [
    'Kiruthi Raghavendran',
    'Software Developer',
    'Frontend Developer',
    'React',
    'JavaScript',
    'SQL',
    'Web Development',
    'Portfolio'
  ],
  authors: [{ name: 'Kiruthi Raghavendran' }],
  creator: 'Kiruthi Raghavendran',
  openGraph: {
    title: 'Kiruthi Raghavendran | Software Developer',
    description:
      'Portfolio of Kiruthi Raghavendran showcasing web development projects, SQL systems, and project execution experience.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kiruthi Raghavendran Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiruthi Raghavendran | Software Developer',
    description:
      'Portfolio of Kiruthi Raghavendran showcasing web development projects, SQL systems, and project execution experience.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
