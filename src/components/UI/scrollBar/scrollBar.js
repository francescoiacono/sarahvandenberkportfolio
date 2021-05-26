import React from 'react';
import classes from './scrollBar.module.css';

const ScrollBar = () => {
  return (
    <div className={classes.Filler}>
      <div className={classes.ScrollBar}>
        <img src='/assets/UI/arrow.png' alt='Scroll Up Arrow' />
        <img
          className={classes.ScrollDown}
          src='/assets/UI/arrow.png'
          alt='Scroll Down Arrow'
        />
      </div>
    </div>
  );
};

export default ScrollBar;
