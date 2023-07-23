import axios from 'axios';
import { Art } from '../models/Art';

class ArtService {
  private static instance: ArtService;
  private constructor() {}

  public static getInstance(): ArtService {
    if (!ArtService.instance) {
      ArtService.instance = new ArtService();
    }

    return ArtService.instance;
  }

  public async loadArt(): Promise<Art[]> {
    const response = await axios.get('https://api.art.com');
    return response.data.map((art: any) => new Art(art));
  }
}

export default ArtService.getInstance();