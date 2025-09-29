import React from 'react';
import AlbumHeader from './AlbumHeader';
import AlbumInfo from './AlbumInfo';
import TrackList from './TrackList';

const MusicAlbum = ({ albumData }) => {
  return (
    <div className="music-album">
      <AlbumHeader 
        title={albumData.title}
        artist={albumData.artist}
        year={albumData.year}
        cover={albumData.cover}
      />
      
      <AlbumInfo album={albumData} />
      <TrackList tracks={albumData.tracks} />
    </div>
  );
};

export default MusicAlbum;