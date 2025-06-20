import {  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gray-300 bottom-0 px-6">
      <div className=" mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
             <Image src={'/weblogo.svg'} alt={'logo'} height={120} width={150}/>
            </Link>
            <p className="text-gray-00 text-lg leading-relaxed mb-6 max-w-md">
              We're a team of passionate developers and innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
            </p>
            <div className="flex space-x-4">
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
            <h3 className="text-xl font-semibold text-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 <div>
            <h3 className="text-xl font-semibold text-black mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Marketing", path: "/" },
                { name: "SEO", path: "/about" },
                { name: "EMail", path: "/services" },
                { name: "Whats's App Crm", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-black-400" />
                <span>123 Tech Street, Digital City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-black-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-black-400" />
                <span>hello@techcraft.dev</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © 2022 Fully digital agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;