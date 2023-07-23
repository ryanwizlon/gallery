import React from 'react';
import { Art } from '../models/Art';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { MeshWobbleMaterial, Html, useTexture } from '@react-three/drei';

interface ArtPieceProps {
  art: Art;
  selectArt: (art: Art) => void;
}

const ArtPiece: React.FC<ArtPieceProps> = ({ art, selectArt }) => {
  const texture = useLoader(TextureLoader, art.imageURL);

  return (
    <mesh onClick={() => selectArt(art)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <MeshWobbleMaterial attach="material" factor={0.6} speed={1} map={texture} />
      <Html position={[0, -0.5, 0]}>
        <div className="artPieceStyle">
          <h2>{art.title}</h2>
          <p>{art.description}</p>
        </div>
      </Html>
    </mesh>
  );
};

export default ArtPiece;