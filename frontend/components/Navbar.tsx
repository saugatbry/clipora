"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-neon-gradient rounded-xl flex items-center justify-center shadow-neon-glow group-hover:scale-110 transition-transform">
              <Play size={20} fill="white" className="ml-1" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">
              CLIPORA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/youtube-to-mp4" className="text-sm font-medium text-white/70 hover:text-white transition-colors">YouTube to MP4</Link>
            <Link href="/youtube-to-mp3" className="text-sm font-medium text-white/70 hover:text-white transition-colors">YouTube to MP3</Link>
            <Link href="/shorts-downloader" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Shorts</Link>
            <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Blog</Link>
          </div>

          <div className="hidden md:block">
            <button className="neon-button text-sm">
              Start Downloading
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-white/5 px-4 pt-2 pb-6 space-y-4"
        >
          <Link href="/youtube-to-mp4" className="block text-lg font-medium py-2">YouTube to MP4</Link>
          <Link href="/youtube-to-mp3" className="block text-lg font-medium py-2">YouTube to MP3</Link>
          <Link href="/shorts-downloader" className="block text-lg font-medium py-2">Shorts</Link>
          <Link href="/blog" className="block text-lg font-medium py-2">Blog</Link>
          <button className="w-full neon-button mt-4">
            Start Downloading
          </button>
        </motion.div>
      )}
    </nav>
  );
}
