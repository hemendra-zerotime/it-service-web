"use client";
import ScrollProgress from "@/components/eldoraui/scrollprogress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <Footer />
    </>
  );
}
