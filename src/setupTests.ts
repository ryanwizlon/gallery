import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/react';
import { Art } from '../models/Art';
import { Video } from '../models/Video';
import { DigitalDownload } from '../models/DigitalDownload';

import { ArtService } from '../services/ArtService';
import { VideoService } from '../services/VideoService';
import { DigitalDownloadService } from '../services/DigitalDownloadService';

test('ArtService loads art', async () => {
  const data = await ArtService.loadArt();
  expect(data).toBeInstanceOf(Art);
});

test('VideoService loads video', async () => {
  const data = await VideoService.loadVideo();
  expect(data).toBeInstanceOf(Video);
});

test('DigitalDownloadService loads download', async () => {
  const data = await DigitalDownloadService.loadDownload();
  expect(data).toBeInstanceOf(DigitalDownload);
});

test('Art is selected', () => {
  const { getByTestId } = render(<Art />);
  fireEvent.click(getByTestId('artPiece'));
  expect(getByTestId('artPiece')).toHaveClass('selected');
});

test('Video is selected', () => {
  const { getByTestId } = render(<Video />);
  fireEvent.click(getByTestId('videoPlayer'));
  expect(getByTestId('videoPlayer')).toHaveClass('selected');
});

test('Download is selected', () => {
  const { getByTestId } = render(<DigitalDownload />);
  fireEvent.click(getByTestId('digitalDownloads'));
  expect(getByTestId('digitalDownloads')).toHaveClass('selected');
});