import React from 'react';

const AlbumCover = ({ cover, title }) => {
  return (
    <div className="album-cover">
      <img src={cover} alt={`Обложка альбома "${title}"`} />
    </div>
  );
};

export default AlbumCover;