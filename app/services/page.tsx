
import ServicesPageClient from "@/components/ServicesPageClient";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: 'Services | Fully Digital Agency – Website, SEO, Ads, CRM & Marketing Solutions',
  description:
    'Get powerful digital services from Fully Digital Agency: website design, SEO, PPC, Google Ads, branding, CRM, WhatsApp automation, IVR, and content marketing tailored to help your business grow.',
  keywords: [
    // Web & design services
    'website design services',
    'responsive web development',
    'affordable web design India',
    'custom website for businesses',
    'ecommerce development agency',
    'WordPress website agency',

    // SEO services
    'seo services India',
    'local seo agency',
    'rank on Google',
    'technical seo experts',
    'on-page seo company',
    'off-page seo backlink service',

    // Paid marketing & PPC
    'Google Ads management',
    'PPC services agency',
    'Facebook Ads experts',
    'Instagram ads marketing',
    'ROI-focused ad campaigns',
    'YouTube video ads service',

    // Content & social
    'social media marketing company',
    'Instagram content creation',
    'reels and post design',
    'social media creatives',
    'viral video marketing',

    // Branding & design
    'graphic design company India',
    'logo design service',
    'brand identity creation',
    'creative digital branding',

    // CRM & Automation
    'WhatsApp CRM setup',
    'IVR call solution for business',
    'customer support automation',
    'email marketing tools',
    'lead capture automation',

    // Business intent keywords
    'hire digital marketing agency',
    'best digital agency in India',
    'digital growth partner',
    'startup marketing services',
    'small business online solutions',
    'online business development',

    // High-intent search terms
    'need website for my business',
    'improve website ranking',
    'how to get more leads online',
    'boost social media presence',
    'automate business follow-ups',
    'get more traffic to website',

    // Brand & location
    'Fully Digital Agency services',
    'digital agency Indore',
    'best agency near me',
    'India digital marketing team',
    'top-rated web agency',
  ],
  openGraph: {
    title: 'Explore Our Services | Fully Digital Agency',
    description:
      'We offer complete digital solutions — website design, SEO, Google Ads, branding, CRM, and social content creation to grow your business online.',
    url: 'https://fullydigitalagency.online/services',
    siteName: 'Fully Digital Agency',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://fullydigitalagency.online/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Agency Services Banner – Web, SEO, CRM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Fully Digital Agency',
    description:
      'Get high-impact digital services: websites, SEO, paid ads, CRM, content & automation to boost your brand visibility and conversions.',
    images: ['https://fullydigitalagency.online/banner.jpg'],
  },
  alternates: {
    canonical: 'https://fullydigitalagency.online/services',
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
};

export default function ServicesPage() {
  return (
  <ServicesPageClient/>
  );
}
