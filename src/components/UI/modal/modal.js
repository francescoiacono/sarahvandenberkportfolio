import React, { useState } from 'react';
import Backdrop from '../backdrop/backdrop';

import classes from './modal.module.css';

const Modal = ({ info, clicked, show, invert }) => {
  const [visible, setVisible] = useState(show);
  return (
    <div>
      <Backdrop
        show={visible}
        clicked={() => {
          clicked();
          setVisible(false);
        }}
      />

      <div
        className={classes.Modal}
        style={{
          visibility: visible ? 'visible' : 'hidden',
          background: invert && '#1f92c1',
        }}
      >
        <div
          className={classes.Container}
          style={{
            background: invert && '#fff',
          }}
        >
          <button
            className={classes.CloseModalButton}
            onClick={() => {
              clicked();
              setVisible(false);
            }}
          >
            X
          </button>
          <div className={classes.Info}>
            <ul>
              {info.map((i) => {
                return (
                  <li
                    key={info.indexOf(i)}
                    style={{
                      color: invert && '#fff',
                      background: invert && '#1f92c1',
                    }}
                  >
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          {invert ? (
            <div className={classes.SocialMedia}>
              <a href='https://www.instagram.com/s.arahvx'>
                <img
                  style={{ width: '50px' }}
                  src='assets/UI/icons8-instagram-100.png'
                  alt='instagram icon'
                />
              </a>

              <a href='https://www.youtube.com/channel/UC4UHx60r4hxXuY2weUY2aEA/videos'>
                <img
                  style={{ width: '50px' }}
                  src='assets/UI/icons8-youtube-squared-100.png'
                  alt='youtube icon'
                />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;
