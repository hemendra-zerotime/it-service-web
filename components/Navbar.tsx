import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 py-4  font-medium sticky top-0 bg-white z-50 shadow-sm">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
