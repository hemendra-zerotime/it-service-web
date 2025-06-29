"use client";
import ScrollProgress from "@/components/eldoraui/scrollprogress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "./WhatsApp";
import GetStart from "./GetStart";
import { AnimatedTestimonialsDemo } from "./Testimonials";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <ScrollProgress className="top-0 z-[999]" />
      {children}
      <FloatingWhatsApp />
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
  <AnimatedTestimonialsDemo />
</div>

      <div className="mt-15"><GetStart/></div>
      <Footer />
    </>
  );
}