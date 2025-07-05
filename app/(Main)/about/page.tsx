import AboutPageClient from "@/components/AboutPageClient";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us – Fully Digital Agency | Team, Mission, Vision & Technology",
  description:
    "Learn more about Fully Digital Agency – a remote-first team of creative and technical experts building innovative digital solutions. Discover our mission, vision, values, and the cutting-edge tools we use to transform brands.",
  keywords: [
    "about Fully Digital Agency",
    "digital agency mission vision",
    "remote-first digital team",
    "creative tech team India",
    "web design agency team",
    "SEO and marketing experts",
    "digital strategy specialists",
    "digital branding company",
    "custom website development team",
    "top digital marketing professionals",
    "Next.js and React developers",
    "content and design experts",
    "MarTech agency in India",
    "cutting-edge tech stack",
    "Figma Canva WordPress team",
    "SEO PPC SMM team India",
    "Who we are digital agency",
    "tech-driven creative team",
    "Fully Digital Agency values",
    "best marketing agency team India",
  ],
  applicationName: "Fully Digital Agency",
  authors: [
    { name: "Fully Digital Agency", url: "https://fullydigitalagency.online" },
  ],
  creator: "Fully Digital Agency",
  publisher: "Fully Digital Agency",
  category: "Digital Marketing & Technology",
  metadataBase: new URL("https://fullydigitalagency.online"),
  alternates: {
    canonical: "https://fullydigitalagency.online/about",
  },
  openGraph: {
    title: "Meet the Team Behind Fully Digital Agency – Vision & Values",
    description:
      "At Fully Digital Agency, we craft seamless digital experiences through collaboration, innovation, and strategic execution. Discover our story, values, and technology stack.",
    url: "https://fullydigitalagency.online/about",
    siteName: "Fully Digital Agency",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://fullydigitalagency.online/banner.jpg",
        width: 1200,
        height: 630,
        alt: "About Fully Digital Agency – Mission, Vision, Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fully Digital Agency – Our Story, Team & Technology",
    description:
      "Meet the passionate team driving your digital growth. Learn how Fully Digital Agency delivers high-performance websites, SEO, ads, and branding strategies.",
    images: ["https://fullydigitalagency.online/banner.jpg"],
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
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: {
    google: "cYbTHQCUCjTPIPG6g-K1jzAxMaVqUImN96_9vMS_tA0",
  },
};

export default function AboutPage() {
  return (
    <AboutPageClient/>
  );
}
