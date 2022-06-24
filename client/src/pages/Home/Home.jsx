import React, {useRef, useEffect} from 'react';
import styles from './Home.module.scss';
import {gsap} from 'gsap'
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.gsap-home-title'), {
        opacity: 1,
        duration: 2
      })
      .to(q(".gsap-home-quote"), {
        opacity: 1,
        duration: 2
      })
  }, [])
  
  return (
    <div className={styles.Header + ` ` + 'snap-child home'}>
      <div ref={el} className={styles['main-header-content']}>
        <span className={styles.logo + ` gsap-home-title`}>ANIMA SHIRVANI</span>
        <p className={styles['quote'] + ` gsap-home-quote`}>"{t("home.quote", {defaultValue : '"Wer sich selbst und andere kennt, wird auch hier erkennen: Orient und Okzident sind nicht mehr zu trennen."'}) }"</p>
        <p className={styles['quote-author'] + ` gsap-home-quote`}>- Johann Wolfgang von Goethe</p>
      </div>
    </div>
  )
}

const Home = () => (
  <div id='home' className={styles.Home}>
    <Header/>
  </div>
);

export default Home;
