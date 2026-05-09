import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Clipora – Free YouTube Video Downloader MP4 & MP3 Online",
  description: "Download YouTube videos instantly in MP4 and MP3 format with Clipora. Fast, secure, free online YouTube downloader for mobile and desktop.",
  keywords: "youtube video downloader, youtube to mp4, youtube to mp3, download youtube videos, shorts downloader",
  openGraph: {
    title: "Clipora – Free YouTube Video Downloader",
    description: "Fast, secure, free online YouTube downloader for mobile and desktop.",
    url: "https://clipora.com",
    siteName: "Clipora",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
