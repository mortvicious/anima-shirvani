import React from 'react';
import styles from './Media.module.scss';

const MediaItem = (props) => {
    return (
      <div className={styles['media-item'] + ` ` + 'snap-child'}>
        <span>{props.title}</span>
        <div className={styles['wrapper-embedded-yt']}><iframe className={styles['embedded-yt']} src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
      </div>
    )
  }

export default MediaItem