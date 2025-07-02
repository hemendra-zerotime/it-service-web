"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ClipboardList,
  Layout,
  FileText,
  MessageSquare,
  X,
} from "lucide-react";

type SidebarProps = {
  isMobile?: boolean;
  onClose?: () => void;
};

const navLinks = [
  { name: "Home", href: "/admin", icon: <Home className="w-5 h-5" /> },
  { name: "Enquiries", href: "/admin/enquiries", icon: <ClipboardList className="w-5 h-5" /> },
];

const contentLinks = [
  { name: "Pages", href: "/admin/content/pages", icon: <Layout className="w-5 h-5" /> },
  { name: "Blog Posts", href: "/admin/content/blog", icon: <FileText className="w-5 h-5" /> },
  { name: "Testimonials", href: "/admin/content/testimonials", icon: <MessageSquare className="w-5 h-5" /> },
];

export default function AdminSidebar({ isMobile = false, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {isMobile ? (
        <aside className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          {/* Close button on blurred background */}
          <button
            className="absolute top-4 right-4 text-black hover:text-red-500 text-xl z-50"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 p-1 rounded-full bg-white shadow" />
          </button>

          {/* Sidebar panel */}
          <div className="w-64 bg-white h-full shadow-lg p-6 absolute left-0 top-0 z-40">
            {/* Nav */}
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition ${
                    isActive(link.href)
                      ? "bg-red-100 text-red-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Content Management */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 uppercase font-semibold px-4 mb-2">
                Content Management
              </p>
              <nav className="space-y-2">
                {contentLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition ${
                      isActive(link.href)
                        ? "bg-red-100 text-red-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      ) : (
        <aside className="hidden md:block">
          <div className="w-64 bg-white min-h-screen border-r shadow-sm sticky top-20 px-4 py-6">
            {/* Desktop Sidebar */}
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition ${
                    isActive(link.href)
                      ? "bg-red-100 text-red-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-6">
              <p className="text-xs text-gray-500 uppercase font-semibold px-4 mb-2">
                Content Management
              </p>
              <nav className="space-y-2">
                {contentLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition ${
                      isActive(link.href)
                        ? "bg-red-100 text-red-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

