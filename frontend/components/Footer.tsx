import Link from "next/link";
import { Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-neon-gradient rounded-lg flex items-center justify-center shadow-neon-glow">
                <Play size={16} fill="white" className="ml-0.5" />
              </div>
              <span className="text-xl font-bold tracking-tighter">CLIPORA</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              The world's most advanced YouTube downloader. Fast, free, and secure.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Tools</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="/youtube-to-mp4" className="hover:text-white transition-colors">YouTube to MP4</Link></li>
              <li><Link href="/youtube-to-mp3" className="hover:text-white transition-colors">YouTube to MP3</Link></li>
              <li><Link href="/shorts-downloader" className="hover:text-white transition-colors">Shorts Downloader</Link></li>
              <li><Link href="/thumbnail-downloader" className="hover:text-white transition-colors">Thumbnail Saver</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca-policy" className="hover:text-white transition-colors">DMCA Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Clipora. All rights reserved. Not affiliated with YouTube.
          </p>
          <div className="flex space-x-6 text-white/20 text-xs">
             <span>Sitemap</span>
             <span>Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
