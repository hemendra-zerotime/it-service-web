'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import { Button } from "./ui/button";

export default function ClientMediaGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full max-w-md mx-auto sm:max-w-xl md:max-w-full overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
          alt="Work 1"
          width={300}
          height={200}
          className="rounded-xl object-cover col-start-1 row-start-1"
        />
        <Image
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
          alt="Work 2"
          width={300}
          height={200}
          className="rounded-xl object-cover col-start-1 row-start-2"
        />
        <div
          className="relative col-start-2 row-start-1 row-span-2 group rounded-xl overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="https://res.cloudinary.com/dnhtqoroy/image/upload/v1751133372/nextjs-gallery/t4ps6o2m2iktxvhhzl5q.jpg"
            alt="Video Preview"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-xl"
          />
          <Button className="absolute inset-0 m-auto flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
            <Play className="text-bpc w-8 h-8" />
          </Button>
        </div>
      </div>
      {mounted && isOpen && (
              <VideoModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                videoUrl="https://www.youtube.com/embed/ZwNLjEag8zw"
              />
            )}
    </>
  );
}
