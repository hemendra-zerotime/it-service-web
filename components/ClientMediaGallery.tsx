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
     <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full max-w-3xl mx-auto sm:max-w-4xl md:max-w-5xl overflow-hidden rounded-xl">
  <Image
    src="https://res.cloudinary.com/dnhtqoroy/image/upload/v1751229678/nextjs-gallery/xkll37dqpwlscdi4pyv3.jpg"
    alt="working team"
    width={300}
    height={200}
    className="rounded-xl object-cover col-start-1 row-start-1 w-full h-full"
  />
  <Image
    src="https://res.cloudinary.com/dnhtqoroy/image/upload/v1751229678/nextjs-gallery/sctw11lkencqxt78hhv7.jpg"
    alt="buisness growth"
    width={300}
    height={200}
    className="rounded-xl object-cover col-start-1 row-start-2 w-full h-full"
  />
  <div
    className="relative col-start-2 row-start-1 row-span-2 group rounded-xl overflow-hidden cursor-pointer"
    onClick={() => setIsOpen(true)}
  >
    <Image
      src="https://res.cloudinary.com/dnhtqoroy/image/upload/c_fill,g_auto,f_auto,q_auto,w_300,h_400/v1751221950/nextjs-gallery/v7okqn5p7d0bfamvfjyp.jpg"
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
