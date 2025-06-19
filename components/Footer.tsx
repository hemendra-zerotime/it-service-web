// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="mt-16 border-t relative bottom-0 py-6 text-center text-gray-600 text-sm">
//       {/* <div className="space-y-2">
//         <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
//         <p>
//           <a href="/privacy" className="hover:underline">Privacy Policy</a> |{' '}
//           <a href="/terms" className="hover:underline">Terms of Service</a>
//         </p>
//       </div>
//            <div className="text-center text-gray-600 space-y-2">
//           <p>123 Main St, Anytown, USA 12345</p>
//           <p>+1 (555) 555-5555</p>
//           <p>Follow us:
//             <a href="#" className="text-black-600 ml-2">LinkedIn</a>,
//             <a href="#" className="text-black-400 ml-2">Twitter</a>,
//             <a href="#" className="text-black-700 ml-2">Facebook</a>
//           </p>
//         </div> */}
        
//     </footer>
//   );
// }


import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bottom-0 px-6">
      <div className=" mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
             <Image src={'/logo.png'} alt={'logo'} height={120} width={150} className="object-contain"/>
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
                  className="p-3 bg-black rounded-full hover:bg-black/10 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-white hover:text-black" />
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