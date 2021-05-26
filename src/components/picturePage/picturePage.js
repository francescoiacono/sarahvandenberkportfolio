import React from 'react';
import { useSelector } from 'react-redux';

import classes from './picturePage.module.css';

const PicturePage = () => {
  const state = useSelector((state) => state.works);
  const { currentWork } = state;

  return (
    <div className={classes.PicturePage}>
      {currentWork ? (
        currentWork.pageDeets.pics.map((pic) => {
          return <img src={pic} alt='test' />;
        })
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default PicturePage;
