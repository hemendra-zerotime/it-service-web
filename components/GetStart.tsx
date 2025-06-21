'use client';
import Link from "next/link";
import { ShimmerButton } from "./magicui/shimmer-button";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const GetStart = () => {

  return (
   <section className="p-8 bg-gradient-to-r from-gray-300 to-gray-400 text-center">
      <h2 className="text-black text-2xl md:text-4xl font-bold mb-5">
        Ready to Transform Your Business?
      </h2>
      <div className="flex justify-center items-center">
        <p className="text-gray-900 mb-5 max-w-5xl text-1xl">
        Let's discuss your project and bring your vision to life with our expert development team        </p>
      </div>
       <Link href={"/contact"} className="flex justify-center">
                    <ShimmerButton
                      background="rgba(220, 38, 38, 1)"
                      className="shadow-2xl"
                    >
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Get in Touch
                      </span>
                 <IconArrowRight className="h-5 w-5 ml-2 text-white transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
                      
                    </ShimmerButton>
                  </Link>
</section>
  );
};

export default GetStart;
