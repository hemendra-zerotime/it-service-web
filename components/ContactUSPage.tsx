"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { showErrorToast, showSuccessToast } from "@/lib/toasts";
export const metadata: Metadata = {
  title:
    "Contact Us | Fully Digital Agency – Web Design, SEO & Marketing Experts",
  description:
    "Need a stunning website, SEO strategy, or marketing help? Contact Fully Digital Agency for expert support, fast response, and personalized consultation from our Indore-based team.",
  keywords: [
    "contact digital agency",
    "contact Fully Digital Agency",
    "web design company Indore",
    "seo agency India contact",
    "website quote request",
    "talk to marketing expert",
    "web development support India",
    "call digital agency",
    "Fully Digital Agency contact info",
  ],
  openGraph: {
    title:
      "Contact Fully Digital Agency – Start Your Project or Ask a Question",
    description:
      "Get in touch with our expert team for web development, SEO, CRM integration, and digital marketing. Fully Digital Agency is ready to help you grow.",
    url: "https://fullydigitalagency.online/contact",
    siteName: "Fully Digital Agency",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://fullydigitalagency.online/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Fully Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fully Digital Agency – Expert Support & Fast Replies",
    description:
      "Reach out to discuss your project or get support. We offer expert digital solutions including SEO, web development, and CRM.",
    images: ["https://fullydigitalagency.online/banner.jpg"],
  },
  alternates: {
    canonical: "https://fullydigitalagency.online/contact",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

type FormFieldProps = {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

type EnquiryData = {
 firstName:string;
 lastName:string;
 phone?:string;
 email:string;
 message:string;
  createdAt: Date; 
};

const FormField = ({
  id,
  name,
  type = "text",
  placeholder,
  label,
  required,
  value,
  onChange,
  error,
}: FormFieldProps) => (
  <div className="space-y-1">
    <Label htmlFor={id}>
      <span className="inline text-gray-700">
        {label}
        {required && <span className="text-bpc">*</span>}
      </span>
    </Label>
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`bg-white/10 text-gray-600 border ${
        error ? "border-bpc" : "border-gray-300"
      } placeholder:text-gray-500`}
      value={value}
      onChange={onChange}
    />
    {error && <p className="text-sm text-bpc">{error}</p>}
  </div>
);

async function sendDatatoFirestore(enquirydata:EnquiryData){
 try {
     await addDoc(collection(db,"enquiry"),enquirydata)
    return true;
 } catch (error) {
    console.error("Error adding document ",error)
    return false
 }
}
export function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (formData.phone && !/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const dataToSend: EnquiryData = {
    ...formData,
    createdAt: new Date()
  };

  const ok = await sendDatatoFirestore(dataToSend);

  if (ok) {
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  showSuccessToast("Thanks for getting in touch!", "We’ve received your message and will respond within 24 hours.");

  } else {
   showErrorToast("Submission failed!", "Please try again or contact support.");
  }
  };

  return (
    <main className="px-4 md:px-10 lg:px-20 py-12 mx-auto max-w-7xl">
      <section className="text-center mb-20 space-y-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1B36] leading-tight">
          Let’s Build Something <span className="text-bpc">Great Together</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Whether you’re launching a new idea, expanding your business, or
          exploring what’s possible — we’re here to help you thrive online. We
          provide personalized digital solutions to bring your vision to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mt-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-bpc">
              Free Discovery Call
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Let’s discuss your goals and define what success means for your
              business.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-bpc">Proven Results</h3>
            <p className="text-sm text-gray-600 mt-2">
              We’ve helped brands boost traffic, leads, and engagement with
              result-driven digital strategies.
            </p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-bpc">
              Creative Collaboration
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Work hand-in-hand with a friendly, experienced team that truly
              understands your vision.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl shadow-lg text-white overflow-hidden px-4 py-8 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Info */}
          <div className="space-y-6 text-white break-words w-full max-w-full">
            <p className="text-sm sm:text-base leading-relaxed text-white">
              <strong className="text-base sm:text-lg block mb-1">
                Welcome to Fully Digital Agency
              </strong>
              Thanks for showing your interest. We need some basic information
              to understand you better. Fill out our form and our expert will
              contact you within 24hrs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4 flex-wrap">
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold">
                    Email Us
                  </h3>
                  <p className="break-all text-sm sm:text-base">
                    info@fullydigitalagency.online
                  </p>
                  <p className="text-xs sm:text-sm text-white/80">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 flex-wrap">
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold">
                    Call Us
                  </h3>
                  <Link
                    href="tel:+918871450895"
                    className="text-sm sm:text-base block"
                  >
                    +91 88714 50895
                  </Link>
                  <p className="text-xs sm:text-sm text-white/80">
                    Mon–Fri, 9 AM – 6 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 flex-wrap">
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold">
                    Visit Us
                  </h3>
                  <p className="text-sm sm:text-base">Indore, MP, 452010</p>
                  <p className="text-xs sm:text-sm text-white/80">
                    Schedule an appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white bg-opacity-10 rounded-xl p-4 sm:p-6 backdrop-blur-sm w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-bpc text-center">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-gray-600" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  id="first-name"
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <FormField
                  id="last-name"
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <FormField
                  required
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormField
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 88714 50895"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="message">
                  <span className="inline text-gray-700">
                    Message<span className="text-bpc text-xs">*</span>
                  </span>
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className={`w-full rounded-md border bg-white/10 px-3 py-2 text-sm text-gray-600 shadow-sm placeholder:text-gray-500 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bpc focus-visible:ring-offset-2
    ${
      errors.message
        ? "border-bpc focus-visible:ring-bpc"
        : "border-gray-300"
    }`}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-sm text-bpc">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-bpc hover:bg-bpc/80 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B36]">
            Strategically Based in Indore, Serving Clients Nationwide
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            While we operate remotely, we’re based in Indore — one of India’s
            most energetic and fast-growing tech hubs. Our digital-first culture
            allows us to work smarter and deliver exceptional value to clients
            across India and beyond.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1B36]">
              Let’s Start Something Impactful
            </h3>
            <p className="text-gray-600 text-base">
              We collaborate with startups, small businesses, and growing brands
              to craft high-performance websites, SEO strategies, CRM
              integrations, and digital campaigns.
            </p>

            <ul className="text-gray-600 text-base space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-bpc/10 text-bpc p-2 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
                    ></path>
                  </svg>
                </span>
                <span>Free consultations with real experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-bpc/10 text-bpc p-2 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12A9 9 0 113 12a9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span>Transparent timelines & pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-bpc/10 text-bpc p-2 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span>Long-term support & growth-focused approach</span>
              </li>
            </ul>

            <p className="text-gray-600 text-base">
              Ready to take the next step? Let’s turn your ideas into results.
            </p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-xl aspect-[3/1.4] border-4 border-white">
            <iframe
              title="Fully Digital Agency Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.925316770967!2d75.85772587480298!3d22.991210918021434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc4a7dbce77%3A0xc0a9b8c72c0e05f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1719663600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
