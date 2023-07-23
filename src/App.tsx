import React from 'react';
import ArtGallery from './components/ArtGallery';
import VideoPlayer from './components/VideoPlayer';
import DigitalDownloads from './components/DigitalDownloads';
import './styles/ArtGallery.css';
import './styles/VideoPlayer.css';
import './styles/DigitalDownloads.css';

function App() {
  return (
    <div className="App">
      <ArtGallery />
      <VideoPlayer />
      <DigitalDownloads />
    </div>
  );
}

export default App;