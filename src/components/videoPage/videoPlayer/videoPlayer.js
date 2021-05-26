import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video width='520' height='440' controls>
        <source
          src='assets/works/The faders No Sleep Tonight.mp4'
          type='video/mp4'
        ></source>
      </video>
    </div>
  );
};

export default VideoPlayer;
