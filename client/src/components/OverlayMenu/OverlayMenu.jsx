import React, {useState} from 'react'
import styles from './OverlayMenu.module.scss'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { useTranslation } from "react-i18next"


export default function OverlayMenu(props) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('de')
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
  // const [active, setActive] = useState('')
  return (
    <div className={styles.OverlayMenu + ` ` + props.shown}>
        <div className={styles.wrapper}>
          <ul>
              <Link
                activeClass={styles['active']}
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                spyThrottle={500}
                // onSetActive={handleSetActive.background.remove}
                >
                <li>{t("nav.home", {defaultValue : "Home"}) }</li>
              </Link>
              <Link
                activeClass={styles['active']}
                to="concerts" spy={true}
                smooth={true} offset={0}
                duration={100} delay={0}
                spyThrottle={0}
                // onSetActive={handleSetActive.background.add}
                >
                <li>{t("nav.concerts", {defaultValue : "Konzerte"})}</li>
              </Link>
              <Link
                activeClass={styles['active']}
                to="ensemble"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                spyThrottle={500}
                onSetActive={handleSetActive.background.add}
                >
                <li>{t("nav.ensemble", {defaultValue : "Ensemble"}) }</li>
              </Link>
              <Link
                activeClass={styles['active']}
                to="projectsmob"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                delay={0}
                spyThrottle={500}
                onSetActive={handleSetActive.background.add}
                >
                <li>{t("nav.projects", {defaultValue : "Projecte"})}</li>
              </Link>
              <Link
                activeClass={styles['active']}
                to="media"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                delay={0}
                spyThrottle={500}
                onSetActive={handleSetActive.background.add}
                >
                <li>{t("nav.media", {defaultValue : "Medien"})}</li>
              </Link>
              <Link
                activeClass={styles['active']}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
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
        </div>
    </div>
  )
}
