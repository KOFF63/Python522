import React from 'react';

const AlbumInfo = ({ album }) => {
  return (
    <div className="album-info">
      <h2>Информация об альбоме</h2>
      <div className="info-grid">
        <div className="info-item">
          <span className="label">Исполнитель:</span>
          <span className="value">{album.artist}</span>
        </div>
        <div className="info-item">
          <span className="label">Год издания:</span>
          <span className="value">{album.year}</span>
        </div>
        <div className="info-item">
          <span className="label">Издатель:</span>
          <span className="value">{album.publisher}</span>
        </div>
        <div className="info-item">
          <span className="label">Жанр:</span>
          <span className="value">{album.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;