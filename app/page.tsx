import SEO from '@/components/SEO'
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import { AnimatedTestimonialsDemo } from '@/components/Testimonials';

export const metadata = {
  title: 'Fully Digital Agency – Web Development, SEO, CRM Services',
  description:
    'We provide modern websites, SEO services, WhatsApp CRM, IVR calling solutions, logo design, and digital marketing to help businesses grow online.',
  keywords: [
    'digital agency',
    'website development',
    'SEO services',
    'WhatsApp CRM',
    'IVR solutions',
    'logo design',
    'custom web apps',
    'digital marketing',
    'India tech agency',
    'Fully Digital Agency',
  ],
  applicationName: 'Fully Digital Agency',
  authors: [{ name: 'Fully Digital Agency', url: 'https://fullydigitalagency.online' }],
  creator: 'Fully Digital Agency',
  publisher: 'Fully Digital Agency',
  category: 'technology',
  metadataBase: new URL('https://fullydigitalagency.online'),
  alternates: {
    canonical: 'https://fullydigitalagency.online',
  },
  openGraph: {
    title: 'Fully Digital Agency',
    description:
      'Professional digital solutions: website development, SEO, CRM tools, IVR services, and branding to elevate your business.',
    url: 'https://fullydigitalagency.online',
    siteName: 'Fully Digital Agency',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://fullydigitalagency.online/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Fully Digital Agency Banner',
      },
    ],
  },
  twitter: {
  card: 'summary_large_image',
  title: 'Fully Digital Agency',
  description: 'Grow your business with websites, SEO, and CRM tools.',
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
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function Home() {
  return (
    <>
      <main className="space-y-16 scroll-smooth">
        <HeroSection />
        <Features />
        <div className='max-sm:px-8 max-sm:py-4'>
        <AnimatedTestimonialsDemo />
        </div>
      </main>
    </>
  );
}
