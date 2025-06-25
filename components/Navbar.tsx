"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShimmerButton } from "./magicui/shimmer-button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 left-0 z-50 right-0  bg-gradient-to-r bg-stone-100 border-b border-white/10">
      <div className="mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className=" flex justify-start">
            <Image
              src={"/weblogo.svg"}
              alt={"site-logo"}
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-red-400 relative group ${
                  isActive(item.path) ? "text-red-400" : "text-black"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-bpc to-red-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href={"/contact"}>
              <ShimmerButton
                background="rgba(220, 38, 38, 1)"
                className="shadow-2xl"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Get Started
                </span>
              </ShimmerButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black hover:text-red-400 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium transition-colors duration-300 hover:text-red-400 ${
                    isActive(item.path) ? "text-red-400" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href={"/contact"}>
                {" "}
                <ShimmerButton
                  background="rgba(220, 38, 38, 1)"
                  className="w-full font bold mt-4"
                >
                  Get in touch
                </ShimmerButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
