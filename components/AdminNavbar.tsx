"use client";

import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
const AdminNavbar = () => {
  const router = useRouter();
  const handleLogout = async () => {
  try {
    // Firebase sign out
    await signOut(auth);

    // Clear updated secure cookie
    document.cookie =
      "__SecureAdmin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=strict";

    // Redirect to sign-in
    router.replace("/sign-in");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-stone-100 to-stone-200 border-b border-white/10 shadow-sm">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/admin" className="flex items-center">
            <Image
              src="/weblogo.svg"
              alt="Admin Logo"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Logout Button */}
          <ShimmerButton
            background="rgba(220, 38, 38, 1)"
            className="text-white font-medium text-sm sm:text-base px-4 py-2"
            onClick={handleLogout}
          >
            Logout
          </ShimmerButton>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
