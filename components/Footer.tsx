import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t relative bottom-0 py-6 text-center text-gray-600 text-sm">
      <div className="space-y-2">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>
          <a href="/privacy" className="hover:underline">Privacy Policy</a> |{' '}
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </p>
      </div>
           <div className="text-center text-gray-600 space-y-2">
          <p>123 Main St, Anytown, USA 12345</p>
          <p>+1 (555) 555-5555</p>
          <p>Follow us:
            <a href="#" className="text-blue-600 ml-2">LinkedIn</a>,
            <a href="#" className="text-blue-400 ml-2">Twitter</a>,
            <a href="#" className="text-blue-700 ml-2">Facebook</a>
          </p>
        </div>
    </footer>
  );
}
