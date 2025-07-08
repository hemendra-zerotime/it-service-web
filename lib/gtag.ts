// lib/gtag.ts

// 1. Declare the gtag function on window (TypeScript fix)
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 2. Your GA4 measurement ID
export const GA_MEASUREMENT_ID = "G-SH066WC6KG"; // Replace with your ID

// 3. Pageview tracking function
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
