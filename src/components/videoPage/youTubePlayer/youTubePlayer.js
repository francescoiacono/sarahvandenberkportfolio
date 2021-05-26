import React from 'react';

import classes from './youTubePlayer.module.css';

const YouTubePlayer = ({ embedId }) => {
  return (
    <>
      {embedId ? (
        <div className={classes.videoResponsive}>
          <iframe
            width='853'
            height='480'
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      ) : null}
    </>
  );
};

export default YouTubePlayer;
