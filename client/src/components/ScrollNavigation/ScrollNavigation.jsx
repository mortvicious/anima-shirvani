import React, {useState, useEffect} from 'react';
import styles from './ScrollNavigation.module.scss';
// import {} from 'react-router-dom'
import { useTranslation } from "react-i18next";

const ScrollNavigation = (props) => {
  const [enActive, setEnActive] = useState(true)
  const [deActive, setDeActive] = useState(false)
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageBtnEventDe = () => {
    setEnActive(false)
    setDeActive(true)
    changeLanguage('de')
  }

  const handleLanguageBtnEventEn = () => {
    setEnActive(true)
    setDeActive(false)
    changeLanguage('en')
  }  

  const [activeLink, setActiveLink] = useState('home')

  const handleActiveLink = (e) => {
    if (e.currentTarget.textContent === 'Home') {
      setActiveLink('home')
    } else if (e.currentTarget.textContent === 'Projects') {
      setActiveLink('projects')
    } else if (e.currentTarget.textContent === 'Concerts') {
      setActiveLink('concerts')
    } else if (e.currentTarget.textContent === 'Contacts') {
      setActiveLink('contacts')
    } else if (e.currentTarget.textContent === 'Media') {
      setActiveLink('media')
    }
  }

  useEffect(() => {
    
    setActiveLink(props.active)
  
    return () => {
      
    }
  }, [props.active])
  

  return (
  <div style={{'background-color' : props.background}} className={styles.ScrollNavigation}>
    <div className={styles['wrapper-navigation']}>
      <ul>
          <a onClick={handleActiveLink} className={activeLink === 'home' ? styles['active'] : ''} href="/#home">
            <li>{t("nav.home")}</li>
          </a>
          <a href="">
            <li>Ensemble</li>
          </a>
          <a onClick={handleActiveLink} className={activeLink === 'projects' ? styles['active'] : ''} href="/#projects">
            <li>Projects</li>
          </a>
          <a onClick={handleActiveLink} className={activeLink === 'media' ? styles['active'] : ''} href="/#media">
            <li>Media</li>
          </a>
          <a onClick={handleActiveLink} className={activeLink === 'concerts' ? styles['active'] : ''} href="/#concerts">
            <li>Concerts</li>
          </a>
          <a onClick={handleActiveLink} className={activeLink === 'contacts' ? styles['active'] : ''} href="/#contacts">
            <li>Contacts</li>
          </a>
      </ul>
      <div className={styles['language-switcher']}>
        <span onClick={handleLanguageBtnEventDe} className={ styles['lang-btn'] + ` ` + (deActive ? styles['active'] : '')}>DE</span>
        <span onClick={handleLanguageBtnEventEn} className={ styles['lang-btn'] + ` ` + (enActive ? styles['active'] : '')}>EN</span>
      </div>
    </div>
  </div>
)};



export default ScrollNavigation;
