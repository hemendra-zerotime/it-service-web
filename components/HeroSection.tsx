import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="text-center  hero-bg space-y-6  h-[70vh] mx-auto">
      <div className="flex flex-col justify-center gap-4 h-full items-center">
        <h1 className="text-[1.6rem] sm:text-4xl md:max-w-2xl text-[#1E293B] font-bold">Empowering Businesses Through Innovative Web Solutions</h1>
      <p className="md:text-lg md:max-w-3xl text-gray-600">
        Full-Stack MERN Development and Custom Digital Services Designed to Scale With Your Vision.
      </p>
      <Button>Get a Free Consultation</Button>
      </div>
    </section>
  );
}