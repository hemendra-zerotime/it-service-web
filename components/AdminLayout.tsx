"use client";

import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800">
      {" "}
      {/* ✅ Prevent layout overflow */}
      <AdminNavbar />
      {/* Mobile header bar */}
      <div className="md:hidden px-4 py-3 border-b bg-white shadow-sm flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-700">Admin Panel</span>
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-600 hover:text-red-500"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {/* Layout body */}
      <div className="flex">
        {/* Sidebar for desktop */}
        <AdminSidebar />

        {/* Sidebar for mobile */}
        {sidebarOpen && (
          <AdminSidebar isMobile={true} onClose={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-x-auto">
          {" "}
          {/* ✅ Scroll table here only */}
          {children}
        </main>
      </div>
    </div>
  );
}
