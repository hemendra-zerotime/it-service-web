import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Start Your Project"
        description="Get in touch with our expert MERN developers. We’re here to help launch your next project."
      />
      <main className="p-6  mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Let’s Work Together</h1>
          <p className="text-gray-600">
            We’d love to hear from you. Whether you're ready to start or just exploring, reach out and let’s talk.
          </p>
        </section>
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
