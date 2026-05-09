import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube to MP4 – Download YouTube Videos in HD Online | Clipora",
  description: "Fastest YouTube to MP4 converter. Download YouTube videos in 720p, 1080p, and 4K quality for free. No software installation needed.",
};

export default function YouTubeToMP4() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <Hero />
      </div>

      <section className="py-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">How to Download YouTube Videos to MP4</h2>
        <div className="prose prose-invert max-w-none text-white/60 space-y-6">
          <p>
            Clipora is the best tool for converting and downloading YouTube videos to MP4 format. 
            Whether you want to save a music video, a tutorial, or a documentary, our tool ensures 
            the highest quality output.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
             <div className="glass-card p-6">
                <div className="text-2xl font-bold text-neonRed mb-2">01</div>
                <div className="font-bold mb-2">Copy URL</div>
                <p className="text-xs">Copy the link of the YouTube video you want to download.</p>
             </div>
             <div className="glass-card p-6">
                <div className="text-2xl font-bold text-neonPurple mb-2">02</div>
                <div className="font-bold mb-2">Paste Link</div>
                <p className="text-xs">Paste the URL into the input field above.</p>
             </div>
             <div className="glass-card p-6">
                <div className="text-2xl font-bold text-blue-500 mb-2">03</div>
                <div className="font-bold mb-2">Save MP4</div>
                <p className="text-xs">Choose the quality and click the download button.</p>
             </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Features of Clipora YouTube to MP4 Converter</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>High-speed conversion and download.</li>
            <li>Support for HD, Full HD, and 4K resolutions.</li>
            <li>No registration or software installation required.</li>
            <li>Compatible with all devices (PC, Android, iPhone).</li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
