import React, { useEffect, useState } from 'react';
import { Video } from '../models/Video';
import { VideoService } from '../services/VideoService';
import '../styles/VideoPlayer.css';

interface VideoPlayerProps {
  videoService: VideoService;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoService }) => {
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    loadVideo();
  }, [videoService]);

  const loadVideo = async () => {
    const loadedVideo = await videoService.getVideo();
    setVideo(loadedVideo);
  };

  return (
    <div id="videoPlayer" className="videoPlayerStyle">
      {video && (
        <video controls>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};