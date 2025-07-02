"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Result-Driven Strategy",
    desc: "Our approach is focused on outcomes that matter. Every website, campaign, or CRM setup is crafted to generate measurable results — be it traffic, leads, or sales. We continuously analyze and optimize to ensure your growth stays on track and ahead of competitors.",
    img: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  },
  {
    title: "Full-Service Digital Expertise",
    desc: "Whether it’s website development, SEO, email marketing, WhatsApp automation, or IVR calling — we offer complete solutions under one roof. This saves time, ensures consistency, and empowers your business with a unified digital strategy.",
    img: "https://cdn-icons-png.flaticon.com/512/2942/2942846.png",
  },
  {
    title: "Business-Centric Solutions",
    desc: "We first understand your goals, target audience, and market. Then we build digital tools — websites, CRMs, campaigns — that align directly with your business objectives. No fluff, just focused execution for real-world success.",
    img: "https://cdn-icons-png.flaticon.com/512/3024/3024605.png",
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "Our work doesn’t end after project delivery. We provide continuous support, performance monitoring, security updates, and quick bug fixes — ensuring your digital assets remain optimized and reliable at all times.",
    img: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
  },
  {
    title: "Affordable & Transparent Pricing",
    desc: "We believe in fair, flexible pricing with no hidden costs. You’ll always know what you’re paying for — with plans tailored to your needs and business stage, whether you're a startup or scaling company.",
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    title: "Fast Turnaround Time",
    desc: "We value your time and deadlines. With a streamlined process and an agile team, we deliver quality work — from websites to marketing campaigns — faster than industry standards without compromising on quality.",
    img: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
  {
    title: "Customizable & Scalable Solutions",
    desc: "Everything we build is designed to grow with your business. Whether it's adding new features, expanding to new markets, or scaling user loads — your digital assets will evolve without needing a rebuild.",
    img: "https://cdn-icons-png.flaticon.com/512/857/857681.png",
  },
  {
    title: "Dedicated Project Manager",
    desc: "From day one, you’ll have a dedicated point of contact who understands your project and keeps things on track. This ensures smooth communication, transparency, and delivery that meets your expectations.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
  {
    title: "Conversion-Focused Design",
    desc: "We don’t just design for beauty — we design for results. Each layout, CTA, and content block is optimized to increase engagement and drive more users toward actions that grow your business.",
    img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
  },
  {
    title: "Data-Backed Marketing Decisions",
    desc: "Our marketing isn't based on guesswork. We track performance, A/B test creatives, analyze behaviors, and fine-tune strategies to maximize ROI — ensuring your budget works harder and smarter.",
    img: "https://cdn-icons-png.flaticon.com/512/4221/4221783.png",
  },
  {
    title: "Trusted by Startups & Growing Brands",
    desc: "We’ve helped businesses across industries — from early-stage startups to growing e-commerce brands — build reliable digital foundations, increase visibility, and scale confidently in their space.",
    img: "https://cdn-icons-png.flaticon.com/512/4359/4359870.png",
  },
  {
    title: "Friendly, Collaborative Process",
    desc: "We believe collaboration brings the best results. We work as your extended team — approachable, proactive, and always ready to adapt to your ideas, timelines, and evolving business needs.",
    img: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
  },
];

export default function Features() {
  return (
    <section className="p-8 bg-gradient-to-r from-gray-300 to-gray-200 text-center">
      <h2 className="text-black text-2xl md:text-4xl font-bold mb-2">
        Why Choose Our Services?
      </h2>
      <div className="flex justify-center items-center">
        <p className="text-gray-900 mb-10 max-w-5xl text-1xl">
          As a results-driven digital partner, we specialize in crafting high-performing websites and executing data-backed digital marketing strategies that drive real business growth. Our professional team combines SEO, performance marketing, and smart automation tools like WhatsApp CRM and IVR to boost your brand visibility, engagement, and ROI. Choose us to scale smarter, rank higher, and convert better.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {features.map((f, i) => (
            <CarouselItem
              key={i}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-4 text-center">
                  <Image
                    src={f.img}
                    alt={f.title}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                  <h3 className="text-2xl font-semibold">{f.title}</h3>
                  <p className="text-gray-600 text-1xl">{f.desc}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows below the carousel */}
        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
