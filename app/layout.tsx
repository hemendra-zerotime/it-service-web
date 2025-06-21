import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fully Digital Agency",
  description: "Ignite your startup’s growth with agile digital marketing, WhatsApp CRM, IVR calling & smart tech—designed for customer acquisition and scalable success",
  icons: {
    icon:'/favicon.svg'
  },
  verification:{
    google:'wp1f7jDsujfI55P2rzQO4d3GKkDeWDykqQ8fwbBuB2M'
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
