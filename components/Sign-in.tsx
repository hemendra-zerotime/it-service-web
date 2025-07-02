"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, provider, db } from "@/lib/firebase";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  // ✅ If already logged in, redirect to /admin
  useEffect(() => {
    const hasAdminCookie = document.cookie.includes("admin=true");
    if (hasAdminCookie) {
      router.replace("/admin");
    }
  }, [router]);

  // ✅ Google Sign-In + Admin Check
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email || "";

      // 🔐 Check if this email exists in Firestore /admins/{email}
      const adminRef = doc(db, "admins", email);
      const adminSnap = await getDoc(adminRef);

      if (!adminSnap.exists()) {
        setError("❌ Access denied. You are not an authorized admin.");
        return;
      }

      // ✅ Set cookie and redirect
      document.cookie = "admin=true; path=/";
      router.replace("/admin");
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setError("⚠️ Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 space-y-6">
      {/* 🧭 Admin heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Admin
      </h1>

      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md text-center space-y-6">
        <div className="flex justify-center">
          <Image
            src="/weblogo.svg"
            alt="Company Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <h2 className="text-xl font-semibold">Sign in to continue</h2>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </div>
  );
}
