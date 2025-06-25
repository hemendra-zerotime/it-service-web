
"use client"
import SEO from "@/components/SEO";
import ClientMediaGallery from "@/components/ClientMediaGallery";
import { BarChart3, Lightbulb, LineChart, SearchCheck } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
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


// 🔁 Card Data
const serviceCards = [
  {
    title: "SEO Optimization",
    description:
      "Boost your search visibility and rank higher on Google with proven white-hat SEO techniques.",
    icon: SearchCheck,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    alt: "SEO Mastery",
  },
  {
    title: "Growth Marketing",
    description:
      "Engage, convert, and retain customers with data-driven campaigns tailored to your audience.",
    icon: BarChart3,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    alt: "Marketing Strategy",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services | Digital Marketing & Web Solutions"
        description="Explore our range of digital services from web design to SEO, social media marketing, and more."
      />
      <main className="mb-30">
        {/* Section 1 */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl mx-auto w-full">
            <ClientMediaGallery />
          </div>
          <div className="space-y-6 max-w-xl mx-auto w-full">
            <p className="text-sm text-bpc font-semibold uppercase border-l-4 border-bpc pl-2">
              Expertise in Action
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Accelerate Your Business Growth With Proven Digital Strategies.
            </h1>
            <p className="text-gray-600">
              Our expert team helps you stand out online, attract quality leads,
              and turn visitors into customers using data-driven marketing campaigns.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="text-bpc
                 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Data-Driven Planning</h4>
                  <p className="text-gray-500 text-sm">
                    We craft long-term digital strategies tailored to your unique business goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LineChart className="text-bpc
                 w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">High-Performance Execution</h4>
                  <p className="text-gray-500 text-sm">
                    From SEO to paid ads, we implement campaigns focused on delivering measurable ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section
          className="relative bg-cover bg-center bg-no-repeat md:py-14 xl:py-20"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dnhtqoroy/image/upload/v1750848958/nextjs-gallery/utdafvo1r7b3kmcgkm1a.jpg')",
          }}
        >
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-0" />

          {/* Text Content */}
       <div className="relative w-full h-auto min-h-[300px]">
  {/* Absolute Text Content */}
  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-full max-w-[90vw] lg:max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6 sm:gap-10">
    
    {/* Heading */}
    <div className="md:w-1/2">
      <p className="text-bpc text-xs sm:text-sm lg:text-base font-semibold uppercase mb-2">
        Discover the Art
      </p>
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug md:mb-4 min-h-[96px]">
        <Typewriter
          words={[
            "Empowering Brands With Impactful & Intelligent Digital Campaigns.",
            "Transforming Your Vision Into Digital Success Stories.",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={40}
          deleteSpeed={20}
          delaySpeed={5000}
        />
      </h2>
    </div>

    {/* Paragraph */}
    <div className="md:w-1/2">
      <p className="text-gray-700 p-4 bg-white rounded-3xl text-sm sm:text-base md:text-[17px] lg:text-lg xl:text-xl">
          <Typewriter
            words={[
              "We help businesses grow online through strategic marketing, compelling content, and innovative technology. From increasing visibility to generating leads, we build your brand’s digital future.",
            ]}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={20}
            deleteSpeed={10}
            delaySpeed={5000}
          />
        </p>
    </div>

  </div>
</div>
   

          {/* Reusable Cards Row */}
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-10 md:mt-0">
            <div
              className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-center
                        md:absolute md:bottom-[-90px] md:left-1/2 md:transform md:-translate-x-1/2 w-full md:px-8"
            >
              {serviceCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row w-full md:w-[36rem] h-auto md:h-[12rem] rounded-xl shadow-lg overflow-hidden bg-background-bpc"
                  >
                    {/* Image */}
                    <div className="relative w-full sm:w-1/2 h-[12rem]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Text */}
                    <div className="w-full sm:w-1/2 text-white p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-black" />
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm md:text-[15px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
