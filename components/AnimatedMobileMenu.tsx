"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

interface AnimatedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const sidebarVariants: Variants = {
  open: {
    ...( { clipPath: `circle(150% at 95% 5%)` } as any ),
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    ...( { clipPath: "circle(0px at 95% 5%)" } as any ),
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function AnimatedMobileMenu({
  isOpen,
  onClose,
  children,
}: AnimatedMobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          className="fixed inset-0 z-50 bg-black text-white overflow-hidden md:hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-6 right-6 z-50 text-white hover:text-bpc transition md:hidden"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Animated Menu Content */}
          <div className="px-6 pt-32 pb-10 space-y-8">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
