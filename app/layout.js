import Head from 'next/head';

import { robotoSlab } from "../fonts/fonts";

import Header from "../components/Header";
import Footer from "../components/Footer";

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

