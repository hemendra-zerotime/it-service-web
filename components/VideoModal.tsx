// components/VideoModal.tsx
'use client';

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4">
      <div className="relative w-full max-w-3xl aspect-video bg-black/80 rounded-2xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 rounded-full p-1"
        >
          <X className="w-6 h-6" />
        </button>
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          autoPlay
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-2xl"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
