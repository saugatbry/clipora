"use client";

import { motion } from "framer-motion";
import Downloader from "./Downloader";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-purple/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-red/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Free <span className="neon-text-gradient">YouTube</span> Video Downloader
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Download your favorite videos in HD, 4K, and MP3 instantly. Fast, secure, and no registration required.
          </p>
        </motion.div>

        <Downloader />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-white/40 text-sm flex items-center justify-center space-x-6"
        >
          <span>✓ Unlimited Downloads</span>
          <span>✓ No Software Needed</span>
          <span>✓ High Speed Servers</span>
        </motion.div>
      </div>
    </section>
  );
}
