import React from 'react';
import MediaItem from './MediaItem';
import styles from './Media.module.scss';
import { useTranslation } from "react-i18next";

const Media = () => {
  const { t, i18n } = useTranslation()
  return (
  <div id='media' className={styles.Media + ` ` + ''}>
    <span className='mobile-title limited'>{t("nav.media")}</span>
    <MediaItem src='https://www.youtube.com/embed/Nxo6XvEleak' title={t("media.title1")}/>
    <MediaItem src='https://www.youtube.com/embed/d7IUg9EDFbs' title={t("media.title2")}/>
  </div>
)};


export default Media;
