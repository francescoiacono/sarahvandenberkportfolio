import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { setCurrentWork } from '../../store/reducers/works/worksActions';

import classes from './picturePage.module.css';

const PicturePage = () => {
  const state = useSelector((state) => state.works);
  const { currentWork, works } = state;

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
