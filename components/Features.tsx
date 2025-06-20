import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Tailored Web Applications",
    desc: "We build secure, scalable, and user-focused web applications tailored to your goals.",
    img: "https://cdn-icons-png.flaticon.com/512/9068/9068787.png",
  },
  {
    title: "MERN Stack Expertise",
    desc: "Built using MongoDB, Express, React, and Node — optimized for performance and growth.",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png",
  },
  {
    title: "Mobile-First & Responsive Design",
    desc: "Seamless experience across all devices, built with responsive, accessible UI.",
    img: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
];

export default function Features() {
  return (
    <section className="p-8 bg-gradient-to-r from-gray-300 to-gray-400 text-center">
      <h2 className="text-black text-2xl md:text-5xl font-bold mb-2"
       >
      Why Choose Our Services?
     </h2>
     <p className="text-gray-600 mb-10 text-lg">
      We combine technical expertise with creative innovation to deliver exceptional results
     </p>
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <Card key={i}>
          <CardContent className="p-6 space-y-4 text-center">
            <Image src={f.img} alt={f.title} width={64} height={64} className="mx-auto" />
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    </section>
  );
}