import React, {useState, useEffect} from 'react'
import styles from './Navigation.module.scss'
import { useTranslation } from "react-i18next"
// import * as Scroll from 'react-scroll'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import OverlayMenu from '../OverlayMenu/OverlayMenu'
import NavigationMobile from '../NavigationMobile/NavigationMobile'

const Navigation = (props) => {

  const [language, setLanguage] = useState('de')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  };

  const handleLanguageChange = (e) => {
    let id = e.currentTarget.id
    changeLanguage(id)
    setLanguage(id)
  }

  const [navBackground, setNavBackground] = useState(true)
  const handleSetActive = {
    background: {
      remove: () => {
        if (navBackground === true) {
          setNavBackground(false)
        }
      },
      add: () => {
        if (navBackground === false) {
          setNavBackground(true)
        }
      }
    }
  }
  const addScroller = () => {
      Events.scrollEvent.register('begin', function(to, element) {
      });
      Events.scrollEvent.register('end', function(to, element) {
      });
      scrollSpy.update()
  }

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
  const handleMobileClick = () => {
    setMobileMenuOpened(!mobileMenuOpened)
  }

  useEffect(() => {
    addScroller()
    return () => {
      
    }
  }, [])


return (
  <div className={styles['navigation-fix-wrapper']}>
    <NavigationMobile 
      onClick={handleMobileClick} 
      navBackground={(navBackground ? styles['mobile-navigation-background'] : '')}
      burgerTransform={mobileMenuOpened}
      />
    <OverlayMenu 
      shown={(mobileMenuOpened ? 'mobile-menu-opened' : '')}/>
    <nav className={styles.Navigation + ` ` + (navBackground? styles['navigation-background'] : '')}>
      <ul>
      <Link 
        activeClass={styles['active']} 
        to="home" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={100} 
        spyThrottle={500}
        onSetActive={handleSetActive.background.remove}
        >
        <li>{t("nav.home", {defaultValue : "Home"}) }</li>
      </Link>
      <Link 
        activeClass="active" 
        to="concerts" spy={true} 
        smooth={true} offset={-50} 
        duration={100} delay={0} 
        spyThrottle={0} 
        onSetActive={handleSetActive.background.add}
        >
        <li>{t("nav.concerts", {defaultValue : "Konzerte"})}</li>
      </Link>
      <Link 
        activeClass={styles['active']} 
        to="ensemble" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={100}
        spyThrottle={500}
        onSetActive={handleSetActive.background.add}
        >
        <li>{t("nav.ensemble", {defaultValue : "Ensemble"}) }</li>
      </Link>
      <Link 
        activeClass="active" to="projects" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={100} 
        delay={0}
        spyThrottle={500}
        onSetActive={handleSetActive.background.add}
        >
        <li>{t("nav.projects", {defaultValue : "Projecte"})}</li>
      </Link>
      <Link 
        activeClass="active" 
        to="media" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={100} 
        delay={0} 
        spyThrottle={500}
        onSetActive={handleSetActive.background.add}
        >
        <li>{t("nav.media", {defaultValue : "Medien"})}</li>
      </Link>
      <Link 
        activeClass="active" 
        to="contacts" 
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={100} 
        delay={0} 
        spyThrottle={500} 
        onSetActive={handleSetActive.background.remove} 
        >
        <li>{t("nav.contacts", {defaultValue : "Kontakt"})}</li>
      </Link>
      </ul>
      <div className={styles['language-switcher']}>
        <span 
          id='de' 
          onClick={handleLanguageChange} 
          className={ styles['lang-btn'] + ` ` + (language === 'de' ? styles['active'] : '')}
          >DE</span>
        <span 
          id='en' 
          onClick={handleLanguageChange} 
          className={ styles['lang-btn'] + ` ` + (language === 'en' ? styles['active'] : '')}
          >EN</span>
      </div>
  </nav>
</div>
)}

export default Navigation;
