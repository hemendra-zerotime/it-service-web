import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata:Metadata = {
  title: 'Fully Digital Agency – Website Design, SEO, Social Media, Google Ads & Branding',
  description:
    'Fully Digital Agency is your one-stop solution for professional website design, SEO, Google Ads, social media marketing, content creation, graphic design, e-commerce development, and business hosting. We help startups and businesses grow online with powerful digital strategies.',
  keywords: [
    'digital marketing agency',
    'website design company in India',
    'SEO services India',
    'Google Ads experts',
    'PPC campaign management',
    'social media marketing agency',
    'Instagram & Facebook marketing',
    'content creation services',
    'reels and video marketing',
    'graphic design & branding agency',
    'ecommerce website development',
    'business email and hosting support',
    'affordable web development',
    'custom WordPress websites',
    'local SEO services',
    'digital branding solutions',
    'Fully Digital Agency',
    'best marketing company India',
    'full-service creative agency',
    'online business growth services',
  ],
  applicationName: 'Fully Digital Agency',
  authors: [{ name: 'Fully Digital Agency', url: 'https://fullydigitalagency.online' }],
  creator: 'Fully Digital Agency',
  publisher: 'Fully Digital Agency',
  category: 'Digital Marketing & Technology',
  metadataBase: new URL('https://fullydigitalagency.online'),
  alternates: {
    canonical: 'https://fullydigitalagency.online',
  },
  openGraph: {
    title: 'Fully Digital Agency – Grow Your Business Online',
    description:
      'Get high-converting websites, SEO traffic, paid advertising, social media engagement, stunning graphics, and end-to-end e-commerce solutions from India’s top digital marketing agency.',
    url: 'https://fullydigitalagency.online',
    siteName: 'Fully Digital Agency',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://fullydigitalagency.online/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Digital Marketing Services by Fully Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fully Digital Agency – Web, SEO, Ads & Branding',
    description:
      'Boost your online presence with expert website design, search engine optimization, Google Ads, social media growth, and content marketing.',
    images: ['https://fullydigitalagency.online/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": 'large',
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
   verification:{
    google:'wp1f7jDsujfI55P2rzQO4d3GKkDeWDykqQ8fwbBuB2M'
  }
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
