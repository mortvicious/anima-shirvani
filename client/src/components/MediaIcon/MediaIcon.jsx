import React from 'react';
import styles from './MediaIcon.module.scss';

const MediaIcon = (props) => {
  return (
    <img src={props.icon} className={props.className + ` ` + styles.MediaIcon}/>
  )
}

export default MediaIcon