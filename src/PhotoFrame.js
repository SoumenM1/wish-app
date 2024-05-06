// PhotoFrame.js

import React from 'react';
// import './PhotoFrame.css'; // You can style this component

const PhotoFrame = ({ year, photo, text }) => {
  return (
    <div className="photo-frame">
      <h2>{year}</h2>
      <img src={photo} alt="Celebration" />
      <p>{text}</p>
    </div>
  );
};

export default PhotoFrame;
