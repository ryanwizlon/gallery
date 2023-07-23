import axios from 'axios';
import { Video } from '../models/Video';

class VideoService {
  private static instance: VideoService;
  private constructor() {}

  public static getInstance(): VideoService {
    if (!VideoService.instance) {
      VideoService.instance = new VideoService();
    }

    return VideoService.instance;
  }

  public async loadVideo(): Promise<Video[]> {
    const response = await axios.get('https://api.example.com/videos');
    return response.data.map((video: any) => new Video(video));
  }

  public async selectVideo(id: string): Promise<Video> {
    const response = await axios.get(`https://api.example.com/videos/${id}`);
    return new Video(response.data);
  }
}

export default VideoService.getInstance();