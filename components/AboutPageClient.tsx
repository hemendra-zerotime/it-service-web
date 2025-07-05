"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import WhatWeStandFor from "./AnimatedWhatweStandFor";

type DigitalStack = {
  stackName: string;
  iconLink: string;
};

const digitalStack: DigitalStack[] = [
  {
    stackName: "HTML5",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751649363/nextjs-gallery/z9q5k6kq5olax7mvxohb.png",
  },
  {
    stackName: "CSS3",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751640120/nextjs-gallery/band08nlcjea9lphvqyl.png",
  },
  {
    stackName: "JavaScript",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751649363/nextjs-gallery/suu42ifgbfrbihl0m4hi.png",
  },
  {
    stackName: "React JS",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751649363/nextjs-gallery/tvjl3kwifuilyszsevem.png",
  },
  {
    stackName: "Next JS",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751637930/nextjs-gallery/fmpdb1wjanwknaszx3if.png",
  },
  {
    stackName: "Canva",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751649363/nextjs-gallery/s35ukmgimobp7tfjydy5.png",
  },
  {
    stackName: "WordPress",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751649363/nextjs-gallery/psf37dczgqzucvfyrc4w.png",
  },
  {
    stackName: "Figma",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751649363/nextjs-gallery/xvraefpmuswniyjtqopz.png",
  },
  {
    stackName: "Meta Ads",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751662053/nextjs-gallery/avxu95hgzwa018rfgyd1.png",
  },
  {
    stackName: "Google Ads",
    iconLink: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1751649363/nextjs-gallery/hxmkt9tsidfp4mernw87.png",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Who We Are Section */}
      <section
        aria-labelledby="who-we-are"
        className="bg-white text-gray-900 pt-12 sm:pt-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
          <header>
            <h2
              id="who-we-are"
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            >
              Who We Are
            </h2>
          </header>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            We are a team driven by innovation and precision, crafting seamless digital experiences that elevate brands and foster genuine connections across every platform.
          </p>

          <article className="text-left border-l-4 border-bpc pl-4 pr-2 sm:pl-6 sm:pr-4 text-sm sm:text-base md:text-lg font-medium text-gray-800 max-w-5xl mx-auto space-y-6 leading-relaxed">
            <blockquote>
              <p>“Our foundation is built on understanding audiences deeply and delivering intuitive, data-informed solutions that inspire action and nurture loyalty.”</p>
            </blockquote>
            <blockquote>
              <p>“Through thoughtful design, intelligent automation, and insightful analytics, we empower businesses to tell their stories more effectively and engage meaningfully.”</p>
            </blockquote>
          </article>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            At the crossroads of creativity and technology, we blend strategy with craftsmanship to transform ideas into impactful, measurable outcomes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-20 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <article className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <figure className="w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dnhtqoroy/image/upload/v1751701757/nextjs-gallery/bwidwzpipyquyxdasjsr.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </figure>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black border-l-4 border-bpc pl-4 mb-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
              To empower businesses with cutting-edge digital solutions that transcend geographical boundaries.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We believe in the power of technology to transform businesses and are committed to delivering results that matter.
            </p>
          </div>
        </article>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="py-20 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <article className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black border-l-4 border-bpc pl-4 mb-4">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
              To be the leading remote-first digital agency that sets new standards in creative excellence and innovation.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We envision a world where distance is no barrier to collaboration, enabling lasting digital impressions.
            </p>
          </div>
          <figure className="w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://res.cloudinary.com/dnhtqoroy/image/upload/v1751700427/nextjs-gallery/fhjhthqq7cx2iwycwzfj.png"
              alt="Our Vision"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </figure>
        </article>
      </section>

      {/* Values Section */}
      <WhatWeStandFor />

      {/* Technology Stack */}
      <section
        id="tech-stack"
        className="py-20 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Our Cutting-Edge Digital Technology Stack
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed">
            We harness a powerful suite of advanced tools to build scalable, secure, and engaging solutions across all platforms.
          </p>

          <Marquee pauseOnHover gradient={false} speed={40}>
            <div className="flex gap-8 sm:gap-12 items-center px-4">
              {digitalStack.map((item, index) => (
                <figure key={index} className="flex flex-col items-center">
                  <Image
                    src={item.iconLink}
                    alt={item.stackName}
                    width={50}
                    height={50}
                    className="grayscale hover:grayscale-0 transition duration-300"
                    priority={index < 5}
                  />
                  <figcaption className="mt-2 text-xs text-gray-500 text-center">
                    {item.stackName}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}
