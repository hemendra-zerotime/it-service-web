"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Your Agency</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist or has been moved."
        />
      </Head>

      <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-16 text-center">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-8">
          <Image
            src="https://res.cloudinary.com/dnhtqoroy/image/upload/v1751393383/nextjs-gallery/iq1kiqrgzvstlpfovai8.svg"
            alt="404 Error Illustration"
            width={250}
            height={250}
            priority
            className="w-full h-80 object-contain"
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 max-w-2xl leading-tight">
          Lost in the Digital Universe
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
          The page you’re looking for doesn’t exist — or maybe it's still under
          creative construction. Let’s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" passHref>
            <Button className="bg-bpc text-white hover:bg-bpc/90 px-6 py-2 text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bpc">
              ← Back to Home
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button className="bg-black text-white hover:bg-black/70 px-6 py-2 text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
              Start a Project →
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
