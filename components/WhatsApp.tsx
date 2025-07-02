"use client";

import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phone = "919981730291";
  const message =
    "Hi Fully Digital Agency 👋, I'm interested in your services. Can you share more details? 🚀";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white p-3 rounded-full shadow-lg text-green-500 hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
