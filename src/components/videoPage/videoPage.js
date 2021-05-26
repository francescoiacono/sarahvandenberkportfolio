import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import YouTubePlayer from './youTubePlayer/youTubePlayer';
import classes from './videoPage.module.css';
import Description from './description/description';
import { useDispatch, useSelector } from 'react-redux';
import PicturePage from '../picturePage/picturePage';
import { setCurrentWork } from '../../store/reducers/works/worksActions';

const VideoPage = (props) => {
  const worksState = useSelector((state) => state.works);
  const { currentWork, works, loading } = worksState;

  const location = useLocation();

  const dispatch = useDispatch();

  const checkItem = (arr) => {
    console.log(arr);
    arr.forEach((w) => {
      console.log(w.path, location.pathname);
      if (w.path === location.pathname) {
        dispatch(setCurrentWork(w));
      }
    });
  };

  useEffect(() => {
    checkItem(works);
  }, [works]);

  return (
    <>
      <Link to='/'>
        <img
          alt={props.alt}
          className={classes.BackButton}
          src='assets/UI/back-button.png'
        />
      </Link>
      {/* {!currentWork && checkItem(works)} */}
      {!loading && currentWork ? (
        <div className={classes.VideoPage}>
          {currentWork.pageDeets.embedId != '' ? (
            <YouTubePlayer embedId={currentWork.pageDeets.embedId} />
          ) : (
            <PicturePage />
          )}
          <Description
            title={currentWork.title}
            description={currentWork.pageDeets.description}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default VideoPage;
