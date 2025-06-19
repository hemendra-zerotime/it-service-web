import SEO from "@/components/SEO";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | MERN Stack Experts"
        description="Discover the story behind our development team, our values, and our passion for delivering scalable, modern web applications."
      />
      <main className="p-6 space-y-12 max-w-6xl mx-auto">
       <section id="about" className="space-y-6 mx-auto">
      <h2 className="text-2xl font-bold text-center">About Us</h2>
     <div className="flex text-center  justify-center items-center"> <p className=" max-w-3xl text-gray-700 text-lg text-center">
        We are a passionate team of developers, designers, and innovators dedicated to delivering exceptional digital solutions. Our mission is to empower businesses with modern, scalable technology.
      </p></div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Suren Verma</h3>
            <p className="text-sm text-gray-600">Founder & Lead Developer</p>
            <p className="mt-2 text-gray-600">
              Suren is a MERN stack expert with a passion for crafting modern web apps, solving real business challenges, and building user-first experiences.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Our Values</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Innovation: Always adopting new tech</li>
              <li>Transparency: Open communication</li>
              <li>Client-Centric: Your success is our mission</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
      </main>
    </>
  );
}


