import React from 'react';

import classes from './item.module.css';

const Item = ({ workTitle, img, deets, clicked }) => {
  return (
    <div onClick={clicked} className={classes.Wrapper}>
      <div className={classes.Item}>
        <div className={classes.Overlay}>
          <p className={classes.ProjectTitle}>{workTitle}</p>
          <p className={classes.ProjectDeets}>{deets}</p>
        </div>
        <img src={img.src} alt={img.alt} />
      </div>
      <div className={classes.WorkTitle}>
        <p>{workTitle}</p>
      </div>
    </div>
  );
};

export default Item;
