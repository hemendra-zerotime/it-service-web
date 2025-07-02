"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
};

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
}: VideoModalProps) {
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
        <iframe
          width="100%"
          height="100%"
          src={`${videoUrl}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
}
