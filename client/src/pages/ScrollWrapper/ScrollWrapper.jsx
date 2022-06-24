import React from 'react';
import styles from './ScrollWrapper.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Home from '../Home/Home'
import Concerts from '../Concerts/Concerts'
import Contacts from "../Contacts/Contacts";
import Ensemble from '../Ensemble/Ensemble'
import Media from '../Media/Media'
import Projects from '../Projects/Projects'
import MediaIcon from '../../components/MediaIcon/MediaIcon';
import fb from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import spotify from '../../assets/icons/spotify.svg'
import youtube from '../../assets/icons/youtube.svg'
import ProjectsTemp from '../Projects/ProjectsTemp'

const ScrollWrapper = () => {

  return (
  <div className={styles.ScrollWrapper + ` ` + 'snap-container'}>
    <Navigation/>
    <Home/>
    <Concerts/>
    <Ensemble/>
    <Projects/>
    <ProjectsTemp/>
    <Media/>
    <Contacts/>
    <div className={styles['media-container']}>
        <MediaIcon className={styles['media-icon']} icon={fb}/>
        <MediaIcon className={styles['media-icon']} icon={instagram}/>
        <MediaIcon className={styles['media-icon']} icon={twitter}/>
        <MediaIcon className={styles['media-icon']} icon={youtube}/>
        <MediaIcon className={styles['media-icon']} icon={spotify}/>
      </div>
  </div>
)};



export default ScrollWrapper
