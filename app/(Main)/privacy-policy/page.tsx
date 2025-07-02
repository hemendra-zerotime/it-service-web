import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Suren's Dev Studio"
        description="Our privacy policy explains how we handle your data, your rights, and our commitment to privacy."
      />
      <main className="max-w-3xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
        <section className="space-y-4 text-gray-700 text-sm">
          <p>This Privacy Policy explains how we collect, use, and protect your personal information.</p>
        </section>
      </main>
    </>
  );
}
