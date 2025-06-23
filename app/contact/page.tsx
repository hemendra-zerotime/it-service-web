import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
type FormFieldProps = {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  required?: boolean;
};
const FormField = ({ id, name, type = "text", placeholder, label, required }: FormFieldProps) => (
  <div className="space-y-1">
    <Label htmlFor={id}>
      {label} {required && "*"}
    </Label>
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className="bg-white/10 text-gray-600 border border-gray-300 placeholder:text-gray-500"
    />
  </div>
);
export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Start Your Project"
        description="Get in touch with our expert MERN developers. We’re here to help launch your next project."
      />

      <main className="px-4 md:px-10 lg:px-20 py-12 mx-auto max-w-7xl">
        <section className="text-center mb-12 space-y-2">
          <h1 className="text-4xl font-bold">Get in
             Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you have a project in mind, need technical consultation, or just want to say hello, don’t hesitate to reach out. Our team is here to help you succeed.
          </p>
        </section>

        {/* Main Contact Grid */}
        <section className="grid md:grid-cols-2 gap-10 bg-gradient-to-br from-red-500 to-orange-600 p-8 rounded-2xl shadow-lg text-white">
          {/* Left Side - Info */}
          <div className="space-y-6 text-white">
            <p className="text-base leading-relaxed">
              <strong>Welcome to Fully Digital Agency</strong><br />
              Thanks for showing your interest. We need some basic information to understand you better.
              Fill out our form and our expert will contact you within 24hrs.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p>info@fullydigitalagency.online</p>
                  <p className="text-sm text-white/80">We typically respond within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <Link href="tel:+918871450895">+91 88714 50895</Link>
                  <p className="text-sm text-white/80">Mon–Fri, 9 AM – 6 PM IST</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p>Indore, MP, 452010</p>
                  <p className="text-sm text-white/80">Schedule an appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-red-500 ">Send us a Message</h2>
           <form className="space-y-4 text-gray-600">
      {/* 2-column grid for inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField id="first-name" name="firstName" label="First Name" placeholder="John" required />
        <FormField id="last-name" name="lastName" label="Last Name" placeholder="Doe" required />
        <FormField id="email" name="email" label="Email Address" type="email" placeholder="john@example.com" required />
        <FormField id="phone" name="phone" label="Phone Number" type="tel" placeholder="+91 88714 50895" />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <Label htmlFor="message">Message *</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project requirements..."
          className="w-full rounded-md border border-gray-300 bg-white/10 px-3 py-2 text-sm text-gray-600 shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white"
      >
        Send Message ✈️
      </Button>
    </form>
          </div>
        </section>
      </main>
    </>
  );
}
