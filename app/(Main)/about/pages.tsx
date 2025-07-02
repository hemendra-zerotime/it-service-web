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
          <div className="flex text-center  justify-center items-center">
            {" "}
            <p className=" max-w-3xl text-gray-700 text-lg text-center">
              We are a passionate team of developers, designers, and innovators
              dedicated to delivering exceptional digital solutions. Our mission
              is to empower businesses with modern, scalable technology.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4"></CardContent>
            </Card>
            <Card>
              <CardContent className="p-4"></CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
