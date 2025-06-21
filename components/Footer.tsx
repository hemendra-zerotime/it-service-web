import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gray-300 bottom-0 px-4 sm:px-6 lg:px-2">
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/weblogo.svg"
                alt="logo"
                height={120}
                width={150}
                priority
              />
            </Link>
            <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-md">
              We're a team of passionate developers and innovators dedicated to
              transforming businesses through cutting-edge technology and
              creative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-black rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-red-400 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                {
                  name: "Website Design & Development",
                  path: "/",
                },
                {
                  name: "SEO (Search Engine Optimization)",
                  path: "/about",
                },
                { name: "Social Media Marketing", path: "/services" },
                { name: "Google & Ads", path: "/contact" },
                { name: "Graphic Design & Branding", path: "/contact" },
                {
                  name: "Content Creation (Reels, Post, Videos)",
                  path: "/contact",
                },
                { name: "E-commerce Solutions", path: "/contact" },
                {
                  name: "Business Email & Hosting Support",
                  path: "/contact",
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-red-400 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                <span>Indore, Madhya Pradesh, 452010</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-gray-600 mt-1" />
                <span>
                  <Link href="tel:+918871450895" className="hover:underline">
                    +91-9981730291
                  </Link>
                </span>
              </li>
              <li className="flex justify-start text-gray-600 gap-x-3">
                <Mail className="h-5 w-5 text-gray-600 mt-1 shrink-0" />
                <span className="whitespace-normal break-keep">
                  <Link
                    href="mailto:info@fullydigitalagency.online"
                    className="hover:underline"
                  >
                    info@fullydigitalagency.online
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2022 Fully Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
