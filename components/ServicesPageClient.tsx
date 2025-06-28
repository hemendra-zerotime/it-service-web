
"use client"
import ClientMediaGallery from "@/components/ClientMediaGallery";
import { BarChart3, Lightbulb, LineChart, SearchCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ServiceModal from "./ServiceModel";



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
export interface ServiceItem {
  title: string;
  icon: string;
  description: string;
  shortDescription:string;
  image: string;
  features?: string[];
  benefits?: string[];
}

export default function ServicesPageClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalService, setModalService] = useState<ServiceItem | null>(null);
const sharedImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80";

const services: ServiceItem[] = [
  {
    title: "Website Design & Development",
    icon: "💻",
    description:
      "Your website is your business's first impression. We design and develop custom websites that are visually appealing, mobile-responsive, SEO-friendly, and optimized to convert visitors into customers.",
    shortDescription: "Custom-designed, responsive websites built to grow your brand and sales.",
    image: sharedImage,
    features: [
      "Responsive UI/UX design",
      "SEO-ready code structure",
      "Fast and secure performance"
    ],
    benefits: [
      "Better user engagement",
      "Higher conversion rates",
      "Stronger online presence"
    ]
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: "🏆",
    description:
      "Struggling to get found on Google? Our SEO service helps your website rank higher, reach the right audience, and drive consistent organic traffic. From keyword research to technical audits and quality backlinks, we optimize every aspect of your web presence.",
    shortDescription: "Boost your site's visibility and drive organic traffic with powerful SEO strategies.",
    image: sharedImage,
    features: [
      "Keyword research & optimization",
      "Technical SEO audits",
      "Backlink analysis & building"
    ],
    benefits: [
      "Higher search engine rankings",
      "Increased organic traffic",
      "Improved brand credibility"
    ]
  },
  {
    title: "Social Media Marketing",
    icon: "📱",
    description:
      "Social media is where your audience lives. We help you engage them with creative, consistent, and strategic content that builds your brand, fuels engagement, and drives real business growth across platforms.",
    shortDescription: "Build awareness and customer loyalty through strategic social media engagement.",
    image: sharedImage,
    features: [
      "Content scheduling & automation",
      "Influencer collaboration",
      "Performance analytics"
    ],
    benefits: [
      "Boost brand awareness",
      "Increase follower engagement",
      "Generate social leads"
    ]
  },
  {
    title: "Google Ads & Pay-Per-Click (PPC)",
    icon: "💰",
    description:
      "Want fast results? Our PPC experts create high-performing ad campaigns that reach your ideal customers and deliver conversions quickly—while keeping your budget optimized and your ROI strong.",
    shortDescription: "Drive instant leads and conversions through data-backed ad strategies.",
    image: sharedImage,
    features: [
      "Google Ads & Meta Ads",
      "Conversion tracking",
      "A/B testing for creatives"
    ],
    benefits: [
      "Faster ROI",
      "Precise audience targeting",
      "Flexible budget control"
    ]
  },
  {
    title: "Graphic Design & Branding",
    icon: "🎨",
    description:
      "Your brand deserves to stand out. Our graphic design and branding services ensure your visual identity is bold, consistent, and unforgettable—from logos and color palettes to marketing materials and brand guides.",
    shortDescription: "Create a memorable brand identity with stunning design and cohesive branding.",
    image: sharedImage,
    features: [
      "Logo & brand identity design",
      "Marketing & promotional materials",
      "Brand guidelines development"
    ],
    benefits: [
      "Professional brand image",
      "Stronger brand recognition",
      "Improved trust & credibility"
    ]
  },
  {
    title: "Content Creation (Reels, Posts, Videos)",
    icon: "🎥",
    description:
      "Content is king in the digital world. We create scroll-stopping reels, engaging posts, and captivating videos tailored for each platform to amplify your brand and connect with your audience.",
    shortDescription: "High-impact content that gets your brand noticed and remembered.",
    image: sharedImage,
    features: [
      "Reels and short-form video creation",
      "Custom graphic posts & carousels",
      "Branded storytelling content"
    ],
    benefits: [
      "Improved engagement rates",
      "Increased content reach",
      "Stronger brand personality"
    ]
  },
  {
    title: "E-commerce Solutions",
    icon: "🛒",
    description:
      "Sell smarter online with our end-to-end e-commerce solutions. From platform setup to payment integration and product management, we build scalable online stores designed to convert and grow.",
    shortDescription: "Launch and scale your online store with robust e-commerce development.",
    image: sharedImage,
    features: [
      "Shopify, WooCommerce, custom builds",
      "Secure payment gateway integration",
      "Inventory & order management"
    ],
    benefits: [
      "Frictionless shopping experience",
      "Increased online sales",
      "Scalable online presence"
    ]
  },
  {
    title: "Business Email & Hosting Support",
    icon: "📧",
    description:
      "Professional email and reliable hosting are the foundation of your digital operations. We offer secure business email setup and ongoing support, along with high-performance hosting solutions tailored to your needs.",
    shortDescription: "Get reliable email and hosting solutions to keep your business running smoothly.",
    image: sharedImage,
    features: [
      "Business email setup (Google Workspace, Zoho, etc.)",
      "Secure, fast web hosting",
      "Ongoing technical support"
    ],
    benefits: [
      "Improved business communication",
      "Reliable website uptime",
      "Expert support when needed"
    ]
  }
];





  return (
    <>
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
  <section className="py-24 md:pt-32 bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="text-center max-w-7xl mx-auto mb-12">
            <p className="uppercase text-sm text-bpc font-semibold tracking-widest">
              Service We Offers
            </p>
           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mt-2">
  Discover Our Full Spectrum of Professional Services That Empower Your Brand, Expand Your Reach, and Maximize Your Online Success.
</h2>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-xl p-6 shadow-sm hover:shadow-md cursor-pointer group 
                    transition-all duration-300 ease-in-out 
                    ${isActive 
                      ? "bg-gradient-to-br from-red-500 to-orange-600 text-white"
                      : "bg-white text-gray-900 border border-gray-100 hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-600 hover:text-white"
                    }`}
                >
                  <div
                    className={`mb-4 h-10 w-10 rounded-full flex items-center justify-center
                      transition-colors duration-300 ease-in-out 
                      ${isActive 
                        ? "bg-white text-bpc"
                        : "bg-red-100 text-bpc group-hover:bg-white group-hover:text-bpc"
                      }`}
                  >
                    <span className="text-lg">{service.icon}</span>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 transition-colors duration-300 ease-in-out">
                    {service.title}
                  </h4>

                  <p
                    className={`text-sm mb-4 transition-colors duration-300 ease-in-out 
                      ${isActive ? "text-white/90" : "text-gray-500 group-hover:text-white/90"}`}
                  >
                    {service.shortDescription}
                  </p>

                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalService(service);
                    }}
                    className={`text-sm font-medium transition-colors duration-300 ease-in-out 
                      ${isActive ? "text-white" : "text-bpc group-hover:text-white"}`}
                  >
                    LEARN MORE →
                  </span>
                </div>
              );
            })}
          </div>

          {/* Modal */}
          {modalService && (
            <ServiceModal service={modalService} onClose={() => setModalService(null)} />
          )}
        </section>
      </main>
    </>
  );
}
