# 3D Art Gallery

This project is a 3D Art Gallery built with React, TypeScript, and react-three-fiber. It displays AI-generated images and videos in a virtual gallery room. It also includes listings for digital downloads.

## Installation

To install the dependencies, run:

```
npm install
```

## Running the App

To start the app, run:

```
npm start
```

## Structure

The main files of the project are:

- `src/App.tsx`: The main component of the application.
- `src/components/ArtGallery.tsx`: The component for the 3D art gallery.
- `src/components/VideoPlayer.tsx`: The component for the video player.
- `src/components/DigitalDownloads.tsx`: The component for the digital downloads listing.
- `src/models/Art.ts`: The data model for the art pieces.
- `src/models/Video.ts`: The data model for the videos.
- `src/models/DigitalDownload.ts`: The data model for the digital downloads.
- `src/services/ArtService.ts`: The service for loading and managing art pieces.
- `src/services/VideoService.ts`: The service for loading and managing videos.
- `src/services/DigitalDownloadService.ts`: The service for loading and managing digital downloads.

## Styles

The styles for the components are located in the `src/styles` directory.

## Public Assets

The public assets like the favicon, logos, and the manifest file are located in the `public` directory.

## Dependencies

This project uses the following dependencies:

- react
- react-dom
- react-three-fiber
- typescript
- three
- @react-three/drei
- styled-components
- axios

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.