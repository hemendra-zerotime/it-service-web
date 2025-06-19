import SEO from '@/components/SEO'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import ServicesPage from './services/page';
export default function Home() {
  return (
    <>
      <SEO
        title="MERN Stack Development Services | IT Solutions"
        description="Expert MERN stack web development services. Custom, responsive, and scalable websites tailored for startups and growing businesses."
        keywords="MERN stack, web development, React, Node.js, IT services"
      />
      <main className="space-y-16 scroll-smooth">
        <HeroSection />
        <Features />
        <ServicesPage/>
        <section id="contact" className="max-w-xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Phone Number" type="tel" />
          <Input placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
      </section>
      </main>
    </>
  );
}
