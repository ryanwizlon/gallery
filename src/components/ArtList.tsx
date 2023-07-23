import React, { useEffect, useState } from 'react';
import { Art } from '../models/Art';
import { ArtService } from '../services/ArtService';
import ArtPiece from './ArtPiece';
import '../styles/ArtList.css';

interface ArtListProps {
  onArtSelected: (art: Art) => void;
}

const ArtList: React.FC<ArtListProps> = ({ onArtSelected }) => {
  const [arts, setArts] = useState<Art[]>([]);

  useEffect(() => {
    ArtService.loadArt().then(setArts);
  }, []);

  return (
    <div id="artList" className="artListStyle">
      {arts.map((art) => (
        <ArtPiece key={art.id} art={art} onArtSelected={onArtSelected} />
      ))}
    </div>
  );
};

export default ArtList;