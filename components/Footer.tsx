import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiThreads, SiX } from "react-icons/si";
const socialLinks = [
  { Icon: Facebook, url: "https://facebook.com/fullydigitalagency" },
  { Icon: SiX, url: "https://twitter.com/fullydigitalagency" },
  {
    Icon: Linkedin,
    url: "https://www.linkedin.com/company/fully-digital-agency/",
  },
  { Icon: Instagram, url: "https://instagram.com/fullydigitalagency" },
  { Icon: SiThreads, url: "https://www.threads.net/fullydigitalagency" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-neutral-900 text-gray-600 dark:text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y">
        {/* First Row - Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-2">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/weblogo.svg" alt="Logo" width={100} height={100} />
            </Link>
            <p className="text-sm">
              We're a team of passionate developers and marketers helping
              businesses grow through smart technology and digital innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black hover:bg-red-500 transition-all"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-bpc transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Website Design & Development",
                "SEO (Search Engine Optimization)",
                "Social Media Marketing",
                "Google Ads & PPC",
                "Graphic Design & Branding",
                "Content Creation (Reels, Posts, Videos)",
                "E-commerce Solutions",
                "Business Email & Hosting Support",
              ].map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Indore, MP, 452010</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1" />
                <Link href="tel:+918871450895">+91 88714 50895</Link>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1" />
                <Link href="mailto:info@fullydigitalagency.online">
                  info@fullydigitalagency.online
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row - Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2021{" "}
            <span className="bg-gradient-to-r from-bpc via-red-600 to-bpc bg-clip-text text-transparent font-semibold">
              Fully Digital Agency
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
