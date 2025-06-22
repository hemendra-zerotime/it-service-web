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

      <main className="px-4 md:px-10 lg:px-20 py-12 mx-auto max-w-7xl">
        <section className="text-center mb-12 space-y-2">
          <h1 className="text-4xl font-bold">Let’s Work Together</h1>
          <p className="text-gray-600">
            We’d love to hear from you. Whether you're ready to start or just exploring, reach out and let’s talk.
          </p>
        </section>

        {/* Grid Layout for Contact */}
        <section id="contact" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side – Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-gray-700">
              <strong>Welcome to Fully Digital Agency</strong><br />
              Thanks for showing your interest. We need some basic information to understand you better.
              Fill out our form and our expert will contact you within 24hrs.
            </p>

            <div className="text-gray-700 space-y-4">
              <p>
                <strong>Address:</strong><br />
                Indore, MP, 452010
              </p>

              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+91 88714 50895" className="text-blue-600 hover:underline">
                  +91 88714 50895
                </a>
              </p>

              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@fullydigitalagency.online" className="text-blue-600 hover:underline">
                  info@fullydigitalagency.online
                </a>
              </p>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <div >
          <form className="space-y-4 self-center">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Phone Number" type="tel" />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
          </div>
        </section>
      </main>
    </>
  );
}
