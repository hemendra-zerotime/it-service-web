import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
const services = [
  {
    title: "Full Stack Web Development",
    desc: "End-to-end web development using the powerful MERN stack. From database architecture to pixel-perfect frontends — we do it all.",
    img: "https://cdn-icons-png.flaticon.com/512/2972/2972176.png"
  },
  {
    title: "Website Redesign & Modernization",
    desc: "Already have a website? We’ll give it a performance, design, and SEO boost with modern frameworks and responsive layout.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  },
  {
    title: "Landing Pages & Business Sites",
    desc: "Fast, high-converting, responsive websites tailored for your product or service — built for speed and conversions.",
    img: "https://cdn-icons-png.flaticon.com/512/2421/2421131.png"
  },
  {
    title: "Performance & SEO Optimization",
    desc: "Speed matters. We’ll optimize your website for fast load times and better search engine visibility.",
    img: "https://cdn-icons-png.flaticon.com/512/2201/2201570.png"
  },
  {
    title: "API Integration & Backend Development",
    desc: "Need to connect to third-party tools or create robust APIs? We design scalable backend systems with clean, secure code.",
    img: "https://cdn-icons-png.flaticon.com/512/3306/3306617.png"
  }
];
export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services | Web & App Development"
        description="Explore our MERN stack web development, responsive design, API integration, and SEO optimization services."
      />
      <main className="p-6 mx-auto">
   <section id="services" className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Card key={i}>
            <CardContent className="p-4 space-y-2">
              <Image src={service.img} alt={service.title} width={64} height={64} className="mx-auto" />
              <h3 className="font-semibold text-xl text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
     </main>
   </>
  );
}




// export default function Services() {
//   return (
//     <section id="services" className="space-y-8">
//       <h2 className="text-2xl font-bold text-center">Our Services</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {services.map((service, i) => (
//           <Card key={i}>
//             <CardContent className="p-4 space-y-2">
//               <Image src={service.img} alt={service.title} width={64} height={64} className="mx-auto" />
//               <h3 className="font-semibold text-xl text-center">{service.title}</h3>
//               <p className="text-gray-600 text-center">{service.desc}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }