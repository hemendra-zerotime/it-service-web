"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ClipboardList,
  Layout,
  FileText,
  MessageSquare,
} from "lucide-react";
import AnimatedMobileMenu from "@/components/AnimatedMobileMenu";

// ✅ Discriminated union types
type MobileSidebarProps = {
  isMobile: true;
  isOpen: boolean;
  onClose: () => void;
};

type DesktopSidebarProps = {
  isMobile?: false;
};

type SidebarProps = MobileSidebarProps | DesktopSidebarProps;

const navLinks = [
  { name: "Home", href: "/admin", icon: <Home className="w-5 h-5" /> },
  {
    name: "Enquiries",
    href: "/admin/enquiries",
    icon: <ClipboardList className="w-5 h-5" />,
  },
];

const contentLinks = [
  {
    name: "Pages",
    href: "/admin/content/pages",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    name: "Blog Posts",
    href: "/admin/content/blog",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Testimonials",
    href: "/admin/content/testimonials",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];

export default function AdminSidebar(props: SidebarProps) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const sidebarContent = (
    <div className="space-y-6">
      <div className="space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={"onClose" in props ? props.onClose : undefined}
            className={`flex items-center gap-3 text-lg font-medium transition-colors duration-300 hover:text-red-400 ${
              isActive(link.href) ? "text-red-400" : "text-white"
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase font-semibold mb-2">
          Content Management
        </p>
        <div className="space-y-2">
          {contentLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={"onClose" in props ? props.onClose : undefined}
              className={`flex items-center gap-3 text-lg font-medium transition-colors duration-300 hover:text-red-400 ${
                isActive(link.href) ? "text-red-400" : "text-white"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  if (props.isMobile) {
    return (
      <AnimatedMobileMenu isOpen={props.isOpen} onClose={props.onClose}>
        {sidebarContent}
      </AnimatedMobileMenu>
    );
  }

  // Desktop sidebar
  return (
    <aside className="hidden md:block">
      <div className="w-64 bg-white min-h-screen border-r shadow-sm sticky top-20 px-4 py-6">
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
  );
}
