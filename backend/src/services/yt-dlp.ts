import { create } from 'yt-dlp-exec';
import path from 'path';
import fs from 'fs';

// Initialize yt-dlp
const ytdlp = create(process.env.YT_DLP_PATH || 'yt-dlp');

export interface VideoMetadata {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  uploader: string;
  formats: any[];
}

export const getMetadata = async (url: string): Promise<VideoMetadata> => {
  try {
    const output = await ytdlp(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: [
        'referer:youtube.com',
        'user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      ]
    });

    const data = JSON.parse(output as string);

    return {
      id: data.id,
      title: data.title,
      thumbnail: data.thumbnail,
      duration: formatDuration(data.duration),
      uploader: data.uploader,
      formats: data.formats.filter((f: any) => f.vcodec !== 'none' || f.acodec !== 'none')
    };
  } catch (error) {
    console.error('[yt-dlp Service] Error fetching metadata:', error);
    throw new Error('Failed to fetch video metadata');
  }
};

const formatDuration = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return [
    h > 0 ? h : null,
    m.toString().padStart(2, '0'),
    s.toString().padStart(2, '0')
  ].filter(Boolean).join(':');
};
