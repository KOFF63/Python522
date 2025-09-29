import React from 'react';
import AlbumCover from './AlbumCover';

const AlbumHeader = ({ title, artist, year, cover }) => {
  return (
    <div className="album-header">
      <AlbumCover cover={cover} title={title} />
      <div className="album-details">
        <h1 className="album-title">{title}</h1>
        <p className="album-artist">{artist}</p>
        <p className="album-year">{year}</p>
      </div>
    </div>
  );
};

export default AlbumHeader;