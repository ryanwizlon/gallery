import React, { useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import ArtPiece from './ArtPiece';
import ArtService from '../services/ArtService';
import '../styles/ArtGallery.css';

interface ArtGalleryProps {
  onArtSelected: (artId: string) => void;
}

const ArtGallery: React.FC<ArtGalleryProps> = ({ onArtSelected }) => {
  const [artPieces, setArtPieces] = React.useState([]);

  useEffect(() => {
    loadArt();
  }, []);

  const loadArt = async () => {
    const art = await ArtService.getArt();
    setArtPieces(art);
  };

  return (
    <div id="artGallery" className="galleryStyle">
      <Canvas>
        <OrbitControls />
        <Stars />
        {artPieces.map((art: any) => (
          <ArtPiece key={art.id} art={art} onArtSelected={onArtSelected} />
        ))}
      </Canvas>
    </div>
  );
};

export default ArtGallery;