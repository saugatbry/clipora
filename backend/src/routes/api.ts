import { Router } from 'express';
import { getMetadata } from '../services/yt-dlp';

const router = Router();

router.post('/fetch-metadata', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const metadata = await getMetadata(url);
    res.json(metadata);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/download', async (req, res) => {
  const { url, format } = req.body;

  if (!url || !format) {
    return res.status(400).json({ error: 'URL and format are required' });
  }

  // In a production app, we would use a more robust way to handle downloads
  // such as generating a temporary link or streaming the response.
  // For this demo, we'll return a simulated success message.
  
  res.json({
    message: 'Download started successfully',
    downloadUrl: `https://clipora-storage.s3.amazonaws.com/temp/${Date.now()}.mp4` // Simulated
  });
});

export default router;
