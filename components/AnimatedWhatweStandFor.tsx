"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Handshake,
  Lightbulb,
  MessageCircle,
  LucideIcon,
} from "lucide-react";

export default function WhatWeStandFor() {
  const values: {
    icon: LucideIcon;
    fill?: boolean;
    title: string;
    desc: string;
  }[] = [
    {
      icon: MapPin,
      fill: true,
      title: "Remote-first Mindset",
      desc: "We believe talent knows no borders. Our distributed team brings diverse perspectives to every project.",
    },
    {
      icon: Handshake,
      fill: false,
      title: "Client-First",
      desc: "Your goals guide our direction. We build partnerships based on understanding your unique needs and challenges.",
    },
    {
      icon: Lightbulb,
      fill: true,
      title: "Creative Excellence",
      desc: "Design and innovation at every step. We push boundaries to deliver solutions that stand out in the digital landscape.",
    },
    {
      icon: MessageCircle,
      fill: true,
      title: "Transparency",
      desc: "Clear communication, always. We believe in honest dialogue and keeping you informed throughout our partnership.",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleInteraction = (index: number) => {
    if (isMobile) {
      setHoverIndex((prev) => (prev === index ? null : index));
    } else {
      setHoverIndex(index);
    }
  };

  const resetInteraction = () => {
    if (!isMobile) setHoverIndex(null);
  };

  const bgVariants = {
    initial: { backgroundColor: "#e5e7eb" }, // gray-200
    active: { backgroundColor: "#d1d5db" }, // gray-300
  };

  return (
    <motion.section
      initial="initial"
      animate={hoverIndex !== null ? "active" : "initial"}
      variants={bgVariants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4"
        >
          Our Core Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-600 mb-8 sm:mb-10 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
        >
          We cultivate a culture that embraces diverse talent, prioritizes strong
          client partnerships, fosters innovative solutions, and ensures clear,
          honest communication throughout every project.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {values.map((item, i) => {
            const isActive = hoverIndex === i;
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                layout
                onClick={() => handleInteraction(i)}
                onMouseEnter={() => !isMobile && handleInteraction(i)}
                onMouseLeave={() => resetInteraction()}
                transition={{
                  layout: {
                    duration: 1.2,
                    type: "spring",
                    stiffness: 80,
                    damping: 22,
                  },
                }}
                className={`cursor-pointer flex items-center justify-center ${
                  isActive
                    ? "w-64 h-54 rounded-xl px-6 py-3"
                    : "w-20 h-20 rounded-full p-2"
                } bg-white shadow-md border-t-4 border-bpc overflow-hidden`}
              >
                <motion.div layout className="flex flex-col items-start text-start">
                  <motion.div layout transition={{ duration: 0.5 }} className="mb-2">
                    <Icon
                      size={isActive ? 36 : 24}
                      stroke={item.fill ? "#ff5055" : "currentColor"}
                      fill={item.fill ? "#ff5055" : "none"}
                      className="text-bpc"
                    />
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                      >
                        <h3 className="text-base font-semibold text-black mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed max-w-[220px]">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
