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
       <span className="text-bpc">Crafting </span>
  <span className="text-black">Websites, Content & Campaigns </span>
  <span className="text-bpc">That Deliver Growth</span>
      </h2></BoxReveal>

<BoxReveal boxColor='transparent' duration={0.5}><p className="max-w-4xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 mb-4">
        We design lightning-fast websites, scroll-stopping social media content, and SEO strategies that rank. From WhatsApp CRM and IVR calling to Google Ads and performance marketing — Fully Digital Agency builds custom solutions to increase your leads, conversions, and online success.
      </p></BoxReveal>
      <BoxReveal boxColor='transparent' duration={0.5}> <Link href={'/services'}><ShimmerButton>
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Take the First Step
      </span>
    </ShimmerButton></Link></BoxReveal>
    </BackgroundLines>
  );
}

