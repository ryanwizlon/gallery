import axios from 'axios';
import { DigitalDownload } from '../models/DigitalDownload';

class DigitalDownloadService {
  private static instance: DigitalDownloadService;
  private constructor() {}

  public static getInstance(): DigitalDownloadService {
    if (!DigitalDownloadService.instance) {
      DigitalDownloadService.instance = new DigitalDownloadService();
    }

    return DigitalDownloadService.instance;
  }

  public async loadDownloads(): Promise<DigitalDownload[]> {
    const response = await axios.get('https://api.example.com/digital-downloads');
    return response.data.map((download: any) => new DigitalDownload(download));
  }
}

export default DigitalDownloadService.getInstance();