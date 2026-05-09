import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert text-white/60 space-y-6">
          <p>Last updated: May 9, 2026</p>
          <p>At Clipora, we take your privacy seriously. This policy explains what information we collect and how we use it.</p>
          <h2 className="text-2xl font-bold text-white">Data Collection</h2>
          <p>We do not collect personal information such as names, email addresses, or phone numbers unless you explicitly provide them through a contact form.</p>
          <h2 className="text-2xl font-bold text-white">Log Files</h2>
          <p>Like many other websites, Clipora makes use of log files. These files merely log visitors to the site - usually a standard procedure for hosting companies and a part of hosting services' analytics.</p>
          <h2 className="text-2xl font-bold text-white">Cookies</h2>
          <p>We use cookies to store information about visitors' preferences and to record user-specific information on which pages the site visitor accesses or visits.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
