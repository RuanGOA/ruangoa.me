import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Montserrat } from 'next/font/google';

import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'RuanGOA',
  description: 'Code your life!',
  icons: [
    { rel: "icon", url: "/favicon.ico" },
  ],
  authors: [
    { name: "Ruan Gomes", url: "https://ruangoa.vercel.app" },
  ],
  openGraph: {
    title: "RuanGOA",
    description: "Code your life!",
    url: "https://ruangoa.vercel.app",
    siteName: "RuanGOA",
    locale: "en_US",
    type: "website"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`bg-white min-h-screen overflow-y-scroll flex flex-col ${montserrat.className} dark:bg-black `} 
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
