"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating: number;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-yellow-400" />
          ) : (
            <FaRegStar key={i} className="text-gray-300 dark:text-gray-600" />
          )
        )}
      </div>
    );
  };

  return (
    <>
      <h2 className="text-center text-2xl md:text-4xl font-bold text-black dark:text-white mb-2">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
         Discover how our services have made a measurable impact — real feedback from clients who trust and value our work.
      </p>

      <div className="mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={testimonials[active].src}
              src={testimonials[active].src}
              alt={testimonials[active].name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-md"
            />
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-400">
              {testimonials[active].designation}
            </p>
            {renderStars(testimonials[active].rating)}

            <motion.p className="mt-4 text-gray-700 dark:text-neutral-300 text-base">
              {testimonials[active].quote}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
