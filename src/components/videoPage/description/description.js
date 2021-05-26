import React from 'react';
import classes from './description.module.css';

const Description = ({ title, description }) => {
  return (
    <div className={classes.Description}>
      {title ? (
        <div className={classes.Title}>
          <p>{title}</p>
        </div>
      ) : null}

      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
