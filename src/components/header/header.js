import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../UI/modal/modal';
import classes from './header.module.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [invert, setInvert] = useState(false);
  const [info, setInfo] = useState([]);

  return (
    <>
      {/* Logo Container */}
      <div className={classes.Filler}>
        <div className={classes.Header}>
          <div className={classes.TitleContainer}>
            <Link to='/'>
              {window.innerWidth < 600 ? (
                <img
                  style={{ width: '110px' }}
                  src='/assets/UI/small-logo.png'
                  alt='Logo'
                />
              ) : (
                <img src='/assets/UI/logo.png' alt='Logo' />
              )}
            </Link>
          </div>

          {/* Btns Container */}
          <div className={classes.Buttons}>
            <button
              onClick={() => {
                setInvert(false);
                setInfo([
                  'London based',
                  'Graphic Design Student',
                  'Nostalgic, playful tone of voice',
                  'hand-made style ',
                ]);
                setShowModal(true);
              }}
            >
              About Me
            </button>
            <button
              onClick={() => {
                setInvert(true);
                setInfo(['saz.vandenberk@gmail.com', '07905657569']);
                setShowModal(true);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Modal Behaviour */}
      {showModal ? (
        <Modal
          invert={invert}
          show={showModal}
          info={info}
          clicked={() => setShowModal(false)}
        />
      ) : null}
    </>
  );
};

export default Header;
