import SEO from '@/components/SEO'
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import { AnimatedTestimonialsDemo } from '@/components/Testimonials';

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
        <AnimatedTestimonialsDemo/>
      </main>
    </>
  );
}
