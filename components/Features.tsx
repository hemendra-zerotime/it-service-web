// export default function Features() {
//   return (
//     <section className="grid md:grid-cols-3 gap-6 text-center">
//       <div>
//         <div className="text-3xl">💻</div>
//         <h3 className="font-semibold">Custom Web Applications</h3>
//         <p className="text-sm text-gray-600">Tailored solutions for your business needs.</p>
//       </div>
//       <div>
//         <div className="text-3xl">🧰</div>
//         <h3 className="font-semibold">MERN Stack Development</h3>
//         <p className="text-sm text-gray-600">Fast, secure, scalable full-stack apps.</p>
//       </div>
//       <div>
//         <div className="text-3xl">📱</div>
//         <h3 className="font-semibold">Responsive Design</h3>
//         <p className="text-sm text-gray-600">Mobile-first, cross-device compatibility.</p>
//       </div>
//     </section>
//   );
// }
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
    <section className="px-6 grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <Card key={i}>
          <CardContent className="p-6 space-y-4 text-center">
            <Image src={f.img} alt={f.title} width={64} height={64} className="mx-auto" />
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}