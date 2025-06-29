'use client';
import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import { Button } from "./ui/button";

export default function VideoPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
   className="relative col-span-1 row-span-2 group rounded-xl overflow-hidden cursor-pointer aspect-video"
  onClick={() => setIsOpen(true)}
>
        <Image
          src="https://res.cloudinary.com/dnhtqoroy/image/upload/v1751132878/nextjs-gallery/mkpftcclwfoskngwvjtq.png"
          alt="Video Preview"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
        />
        <Button className="absolute inset-0 m-auto flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
          <Play className="text-bpc w-6 h-6 sm:w-7 sm:h-7" />
        </Button>
      </div>

      {isOpen && (
        <VideoModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          videoUrl="https://www.youtube.com/embed/ZwNLjEag8zw"
        />
      )}
    </>
  );
}
