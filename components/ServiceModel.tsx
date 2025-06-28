"use client";

import { ServiceItem } from "./ServicesPageClient"; // adjust as needed
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  service: ServiceItem;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60 px-0 sm:px-4 py-0 sm:py-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`
          relative 
          bg-white 
          rounded-none sm:rounded-3xl 
          shadow-2xl 
          overflow-y-auto 
          w-full h-full 
          sm:w-full sm:h-auto 
          md:max-w-2xl lg:max-w-4xl
        `}
        onClick={(e) => e.stopPropagation()} // prevent close on click inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 w-full">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            {service.title}
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-5 leading-relaxed">
            {service.description}
          </p>

          {service.features && service.features.length > 0 && (
            <div className="mb-5">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                What We Offer
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {service.benefits && service.benefits.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                Key Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1">
                {service.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
<Link href={"/contact"}>
          <Button
                    
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white"
                  >
                    Contact us
                  </Button>
                  </Link>
        </div>
      </div>
    </div>
  );
}
