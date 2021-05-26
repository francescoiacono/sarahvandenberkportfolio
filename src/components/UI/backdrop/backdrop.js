import React from 'react';
import classes from './backdrop.module.css';
const Backdrop = (props) =>
  props.show ? (
    <div className={classes.BackDrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
