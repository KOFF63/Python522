import React from 'react';
import TrackItem from './TrackItem';

const TrackList = ({ tracks }) => {
  return (
    <div className="track-list">
      <h3>Список композиций:</h3>
      <ol>
        {tracks.map((track, index) => (
          <TrackItem 
            key={index} 
            track={track} 
            number={index + 1} 
          />
        ))}
      </ol>
    </div>
  );
};

export default TrackList;