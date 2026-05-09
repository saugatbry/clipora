"use client";

import { motion } from "framer-motion";
import { Download, Clock, User, Share2, QrCode } from "lucide-react";

interface MetadataCardProps {
  metadata: {
    title: string;
    thumbnail: string;
    duration: string;
    uploader: string;
    formats: any[];
  };
}

export default function MetadataCard({ metadata }: MetadataCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-12 glass-card overflow-hidden text-left"
    >
      <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Thumbnail Preview */}
        <div className="md:w-1/3 shrink-0">
          <div className="relative group rounded-xl overflow-hidden shadow-2xl">
            <img 
              src={metadata.thumbnail} 
              alt={metadata.title}
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <Share2 className="text-white" size={32} />
            </div>
          </div>
        </div>

        {/* Info & Downloads */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 line-clamp-2">{metadata.title}</h2>
          
          <div className="flex flex-wrap gap-4 mb-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{metadata.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{metadata.uploader}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {metadata.formats.map((format, idx) => (
              <button
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex flex-col">
                  <span className="font-bold">{format.label}</span>
                  <span className="text-xs text-white/40 uppercase">{format.type}</span>
                </div>
                <Download 
                  size={20} 
                  className="text-white/40 group-hover:text-neonRed transition-colors" 
                />
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center space-x-4">
             <button className="text-white/40 hover:text-white flex items-center space-x-2 text-sm transition-colors">
               <QrCode size={18} />
               <span>Share QR</span>
             </button>
             <button className="text-white/40 hover:text-white flex items-center space-x-2 text-sm transition-colors">
               <Share2 size={18} />
               <span>Copy Link</span>
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
