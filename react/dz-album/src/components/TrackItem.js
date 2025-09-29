import React from 'react';

const TrackItem = ({ track, number }) => {
  return (
    <li className="track-item">
      <span className="track-number">{number}.</span>
      <span className="track-title">{track.title}</span>
      <span className="track-duration">{track.duration}</span>
    </li>
  );
};

export default TrackItem;