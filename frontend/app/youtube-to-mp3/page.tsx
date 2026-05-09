import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube to MP3 – Convert YouTube to High Quality MP3 | Clipora",
  description: "Convert YouTube videos to MP3 320kbps instantly. The fastest free online YouTube MP3 downloader for mobile and PC.",
};

export default function YouTubeToMP3() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        <Hero />
      </div>

      <section className="py-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Fastest YouTube to MP3 Converter Online</h2>
        <div className="prose prose-invert max-w-none text-white/60 space-y-6">
          <p>
            Looking for a way to listen to your favorite YouTube music offline? Clipora is the 
            fastest YouTube to MP3 converter that allows you to extract audio from any YouTube 
            video in high-quality 320kbps MP3 format.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-12 mb-4">Why use Clipora for MP3?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-2">320kbps Audio</h4>
                <p className="text-sm">We provide the highest possible bitrate for crystal clear sound.</p>
             </div>
             <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-2">Instant Conversion</h4>
                <p className="text-sm">Our servers convert video to audio in real-time, saving you time.</p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
