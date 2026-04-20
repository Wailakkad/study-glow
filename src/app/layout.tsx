import type { Metadata } from 'next';
import { Inter, Playfair_Display, Caveat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

export const metadata: Metadata = {
  metadataBase: new URL('https://studyglow.blog'),
  title: {
    default: 'Study Glow — Free Study Planners, Motivation & Tips for Students',
    template: '%s | Study Glow'
  },
  description: 'Free study planners, aesthetic motivation, study tips and printable templates for students. Your complete resource for academic success and student productivity.',
  keywords: ['study aesthetic', 'study motivation', 'free study planner', 'study tips', 'student productivity', 'study notes', 'study girl'],
  authors: [{ name: 'Study Glow' }],
  creator: 'Study Glow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studyglow.blog',
    siteName: 'Study Glow',
    title: 'Study Glow — Free Study Planners & Student Motivation',
    description: 'Free study planners, motivation tips, and aesthetic inspiration for students.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Glow',
    description: 'Free study planners & motivation for students'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  verification: {
    google: 'YOUR-GOOGLE-VERIFICATION-CODE'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 Script - Add your tracking ID here */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        /> 
        */}

        {/* Google AdSense Script - Add your client ID here */}
        {/*
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
        */}
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans text-text bg-white`}>
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
