export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  content: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    title: "How to Download YouTube Videos on Android in 2026",
    slug: "how-to-download-youtube-videos-on-android",
    description: "Learn the easiest and fastest way to save YouTube videos directly to your Android gallery without any app.",
    date: "May 9, 2026",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbab?w=800&q=80",
    content: `
      <p>Downloading YouTube videos on Android has never been easier. While there are many apps available, most users prefer an online solution that doesn't require installation.</p>
      <h2>Step 1: Copy the Video Link</h2>
      <p>Open the YouTube app and find the video you want to download. Tap the 'Share' button and select 'Copy link'.</p>
      <h2>Step 2: Use Clipora</h2>
      <p>Open your mobile browser (Chrome or Samsung Internet) and go to Clipora.com. Paste the link into the downloader.</p>
      <h2>Step 3: Choose Quality and Download</h2>
      <p>Select MP4 720p or 1080p and hit the download button. The video will be saved to your 'Downloads' folder.</p>
    `
  },
  {
    title: "Best YouTube Downloader in 2026: Why Clipora Wins",
    slug: "best-youtube-downloader-2026",
    description: "We compare the top YouTube downloaders of 2026. See why Clipora is the fastest and most secure choice.",
    date: "May 8, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    content: `
      <p>The landscape of video downloading has changed. Users now demand speed, security, and high resolution. In this article, we look at the top players.</p>
      <h3>1. Speed</h3>
      <p>Clipora uses edge computing to process downloads closer to the user, resulting in 3x faster speeds than competitors.</p>
      <h3>2. Privacy</h3>
      <p>Unlike other sites, we don't track your downloads or store your IP address.</p>
    `
  }
];
