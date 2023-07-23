import React, { useEffect, useState } from 'react';
import { DigitalDownload } from '../models/DigitalDownload';
import { DigitalDownloadService } from '../services/DigitalDownloadService';
import '../styles/DigitalDownloads.css';

interface DigitalDownloadsProps {
  onDownloadSelected: (download: DigitalDownload) => void;
}

export const DigitalDownloads: React.FC<DigitalDownloadsProps> = ({ onDownloadSelected }) => {
  const [downloads, setDownloads] = useState<DigitalDownload[]>([]);

  useEffect(() => {
    DigitalDownloadService.getDownloads().then(setDownloads);
  }, []);

  return (
    <div id="digitalDownloads" className="downloadStyle">
      <h2>Digital Downloads</h2>
      {downloads.map((download) => (
        <div key={download.id} onClick={() => onDownloadSelected(download)}>
          <h3>{download.title}</h3>
          <p>{download.description}</p>
        </div>
      ))}
    </div>
  );
};