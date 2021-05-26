import React from 'react';
import { Link } from 'react-router-dom';

import Item from '../item/item';

import classes from './items.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWork } from '../../store/reducers/works/worksActions';

const Items = () => {
  const state = useSelector((state) => state.works);
  const { loading, works } = state;
  const dispatch = useDispatch();

  return (
    <div className={classes.Wrapper}>
      {!loading ? (
        <div className={classes.Items}>
          {works.map((e) => {
            return (
              <Link key={e.id} to={e.path}>
                <Item
                  workTitle={e.title}
                  img={e.preview_img}
                  deets={e.deets}
                  clicked={() => {
                    dispatch(setCurrentWork(e));
                  }}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Items;
