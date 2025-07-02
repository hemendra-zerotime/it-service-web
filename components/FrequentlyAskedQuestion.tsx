"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wrench,
  Building,
  RefreshCcw,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const faqData = [
  {
    question: "What services does Fully Digital Agency offer?",
    answer: `We offer complete digital solutions, including:
- Website Design & Development
- Branding & Graphic Design
- Digital Marketing & Ads
- Social Media Management
- SEO (Search Engine Optimization)
- Content Creation
- WhatsApp & IVR Business Automation`,
    icon: Wrench,
    iconBg: "bg-blue-600",
    hoverBg: "hover:bg-blue-700",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes! Whether you're a startup, small business, or an established brand, we tailor our digital solutions to meet your unique needs and budget.",
    icon: Building,
    iconBg: "bg-green-600",
    hoverBg: "hover:bg-green-700",
  },
  {
    question: "Can you redesign or revamp an existing website?",
    answer:
      "Absolutely! We can modernize your website with fresh design, better UX, and improved performance—keeping your brand identity intact.",
    icon: RefreshCcw,
    iconBg: "bg-yellow-500",
    hoverBg: "hover:bg-yellow-600",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is flexible and depends on the project scope. We offer transparent and custom packages based on your goals. Contact us for a free quote.",
    icon: DollarSign,
    iconBg: "bg-purple-600",
    hoverBg: "hover:bg-purple-700",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide 15–30 days of free support (depending on the service). Maintenance packages are also available for ongoing updates and care.",
    icon: ShieldCheck,
    iconBg: "bg-red-600",
    hoverBg: "hover:bg-red-700",
  },
];

export function FrequentlyAskedQuestion() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-gray-300 to-gray-200 py-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-black dark:text-white mb-2">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="flex justify-center">
        <p className="text-center dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Explore helpful answers to your most frequently asked questions.
        </p>
      </div>
      <div className="w-full max-w-4xl md:max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="group no-underline hover:no-underline focus:no-underline cursor-pointer font-semibold text-black text-left text-base sm:text-lg">
                  <div className="flex items-center gap-3 w-full text-left">
                    <span
                      className={`transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:rotate-6 rounded-md flex items-center justify-center min-w-[32px] min-h-[32px] sm:min-w-[36px] sm:min-h-[36px] ${faq.iconBg} ${faq.hoverBg}`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    <span className="flex-1">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[48px] sm:pl-[52px] flex flex-col gap-3 text-balance text-sm sm:text-base">
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
