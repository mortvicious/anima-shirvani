import React, {useState, useRef} from 'react';
import styles from './Projects.module.scss';
import { useTranslation } from "react-i18next";



const Tab = (props) => {
  return (
    <div id={props.id} onClick={props.onClick} className={styles.Tab + ` ` + props.className}>
      <span>{props.title}</span>
    </div>
  )
}

const TabContent = () => {
  const { t, i18n } = useTranslation();
  const [tab, setTab] = useState('wed')
  const mainWrapperRef = useRef(null)
  const [opacity, setOpacity] = useState(false)

  const handleTabChange = (e) => {
    let id = e.currentTarget.id
    if (e.currentTarget.id != tab) {
      setOpacity(true)
      setTimeout(() => {
        setTab(id)
        setOpacity(false)
      }, 300); 
    }
  }

  const render = {
    tabContent: () => {
      if (tab === 'wed') {
        return (
          <div className={styles['tab-info']}>
            <div className={styles['name-container']}>
              <span className={styles['name'] + ` ` + styles['name-main']}>{t("projects.westEasternDivan.name")}</span>
              <span className={styles['name'] + ` ` + styles['name-temp']}>{t("projects.westEasternDivan.description")}</span>
            </div>
            <div className={styles['separated-grid-container']}>
              <div className={styles['separated-container']}>
                <p className={styles['description']}>{t("projects.westEasternDivan.content2")}</p>
              </div>
              <div className={styles['separated-container'] + ` ` + styles['poem']}>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.1")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.2")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.3")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.4")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.5")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.6")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.7")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.8")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.9")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.10")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.11")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.12")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.13")}</span>
                <span className={styles['separated']}>{t("projects.westEasternDivan.poem.14")}</span>
              </div>
            </div>
          </div>
        )
      }
      if (tab === 'tsr') {
        return (
          <div className={styles['tab-info']}>
            <div className={styles['name-container']}>
              <span className={styles['name'] + ` ` + styles['name-main']}>{t("projects.theSilkRoad.name")}</span>
            </div>
            <p>{t("projects.theSilkRoad.content1")}</p>
            <p>{t("projects.theSilkRoad.content2")}</p>
          </div>
          )
      }
      if (tab === 'ess') {
        return (
          <div className={styles['tab-info']}>
            <div className={styles['name-container']}>
              <span className={styles['name'] + ` ` + styles['name-main']}>{t("projects.eastSideStory.name")}</span>
              <span className={styles['name'] + ` ` + styles['name-temp']}>{t("projects.eastSideStory.description")}</span>
            </div>
            <p>{t("projects.eastSideStory.content1")}</p>
            <p>{t("projects.eastSideStory.content2")}</p>
          </div> 
          )
      }
      if (tab === 'tsc') {
        return (
          <div className={styles['tab-info']}>
              <div className={styles['name-container']}>
                <span className={styles['name'] + ` ` + styles['name-main']}>{t("projects.theSevenColours.name")}</span>
              </div>
            <p>{t("projects.theSevenColours.content1")}</p>
            <p>{t("projects.theSevenColours.content2")}</p>
          </div>
          )
      }
      if (tab === 'tbg') {
        return (
          <div className={styles['tab-info']}>
                <div className={styles['name-container']}>
                  <span className={styles['name'] + ` ` + styles['name-main']}>{t("projects.theBlackGarden.name")}</span>
                </div>
                <div className={styles['coming-soon']}>
                  <p className={styles['alarm']}>{t("projects.theBlackGarden.content1")}</p>
                </div>  
          </div> 
          )
      }
    }
  }



  return (
    <div className={styles.TabContent}>
      <nav className={styles.tabs}>
        <div className={styles['tabs-wrapper']}>
          <Tab 
          className={tab === 'wed' ? styles['active'] : ''} 
          onClick={handleTabChange} 
          title={t("projects.westEasternDivan.name")} id='wed'/>
          <Tab 
          className={tab === 'tsr' ? styles['active'] : ''} 
          onClick={handleTabChange} 
          title={t("projects.theSilkRoad.name")} id='tsr'/>
          <Tab 
          className={tab === 'ess' ? styles['active'] : ''} 
          onClick={handleTabChange} 
          title={t("projects.eastSideStory.name")} id='ess'/>
          <Tab 
          className={tab === 'tsc' ? styles['active'] : ''} 
          onClick={handleTabChange} 
          title={t("projects.theSevenColours.name")} id='tsc'/>
          <Tab 
          className={tab === 'tbg' ? styles['active'] : ''} 
          onClick={handleTabChange} 
          title={t("projects.theBlackGarden.name")} id='tbg'/>
        </div>
      </nav>
      <div ref={mainWrapperRef} className={styles['tab-actual'] + (opacity ? '' : styles['active'])}>
        {render.tabContent()}
      </div>
    </div>
  )
}


export default TabContent