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
     <div className='max-sm:px-8 max-sm:py-4'>
        <AnimatedTestimonialsDemo />
        </div>
      <div className="mt-15"><GetStart/></div>
      <Footer />
    </>
  );
}