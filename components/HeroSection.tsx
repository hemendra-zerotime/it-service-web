import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { BoxReveal } from "@/components/magicui/box-reveal";


export default function HeroSection() {
  return (
     <BackgroundLines className="flex justify-center w-full flex-col items-center text-center md:px-15">
<BoxReveal boxColor='transparent' duration={0.5}><h2 
className="bg-clip-text md:max-w-6xl text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
       <span className="text-red-600">Crafting </span>
  <span className="text-black">Websites, Content & Campaigns </span>
  <span className="text-red-600">That Deliver Growth</span>
      </h2></BoxReveal>

<BoxReveal boxColor='transparent' duration={0.5}><p className="max-w-4xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 mb-4">
        We build high-performance websites, design scroll-stopping social media posts, and create content that ranks. From SEO and WhatsApp CRM to IVR and marketing automation — everything we do is tailored to grow your visibility, engagement, and sales.
      </p></BoxReveal>
      <BoxReveal boxColor='transparent' duration={0.5}> <Link href={'/contact'}><ShimmerButton className="shadow-2xl">
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Get Started
      </span>
    </ShimmerButton></Link></BoxReveal>
    </BackgroundLines>
  );
}

