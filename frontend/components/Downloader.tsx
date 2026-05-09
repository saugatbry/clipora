"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Search, Loader2 } from "lucide-react";
import MetadataCard from "./MetadataCard";

export default function Downloader() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState<any>(null);
  const [error, setError] = useState("");

  const handleFetch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!url) return;

    setLoading(true);
    setError("");
    setMetadata(null);

    try {
      // Simulate API call for now since backend is not running locally
      // In production: const res = await axios.post('/api/fetch-metadata', { url });
      
      setTimeout(() => {
        setMetadata({
          id: "dQw4w9WgXcQ",
          title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
          thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          duration: "3:33",
          uploader: "Rick Astley",
          formats: [
            { quality: "1080p", label: "MP4 1080p", type: "video" },
            { quality: "720p", label: "MP4 720p", type: "video" },
            { quality: "360p", label: "MP4 360p", type: "video" },
            { quality: "audio", label: "MP3 320kbps", type: "audio" },
          ]
        });
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError("Could not fetch video details. Please check the URL.");
      setLoading(false);
    }
  };

  // Clipboard auto-detect
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const pastedData = e.clipboardData?.getData("text");
      if (pastedData?.includes("youtube.com") || pastedData?.includes("youtu.be")) {
        setUrl(pastedData);
      }
    };
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleFetch} className="relative group">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/40 group-focus-within:text-neonPurple transition-colors">
          <Link2 size={24} />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube video link here..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-40 text-lg focus:outline-none focus:border-neonPurple/50 focus:ring-4 focus:ring-neonPurple/10 transition-all backdrop-blur-xl"
        />
        <button
          type="submit"
          disabled={loading || !url}
          className="absolute right-3 top-3 bottom-3 bg-neon-gradient px-8 rounded-xl font-bold flex items-center space-x-2 shadow-neon-glow hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
          <span>{loading ? "Fetching..." : "Download"}</span>
        </button>
      </form>

      {error && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="mt-4 text-red-500 font-medium"
        >
          {error}
        </motion.p>
      )}

      <AnimatePresence>
        {metadata && <MetadataCard metadata={metadata} />}
      </AnimatePresence>
    </div>
  );
}
