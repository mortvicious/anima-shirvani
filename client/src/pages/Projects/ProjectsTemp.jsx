import React, {useState} from 'react'
import styles from './ProjectsTemp.module.scss'
import { useTranslation } from "react-i18next"

function ProjectsTemp() {
    const { t, i18n } = useTranslation();
    const [tab, setTab] = useState('wed')
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
        tab: () => {
            if (tab === 'wed') {
                return (
                    <span className={styles.title}>{t("projects.westEasternDivan.name")}</span>
                )
            }
            if (tab === 'tsr') {
                return (
                    <span className={styles.title}>{t("projects.theSilkRoad.name")}</span>
                )
            }
            if (tab === 'ess') {
                return (
                    <span className={styles.title}>{t("projects.eastSideStory.name")}</span>
                )
            }
            if (tab === 'tsc') {
                return (
                    <span className={styles.title}>{t("projects.theSevenColours.name")}</span>
                )
            }
            if (tab === 'tbg') {
                return (
                    <span className={styles.title}>{t("projects.theBlackGarden.name")}</span>
                )
            }
        },
        tabContent: () => {
            if (tab === 'wed') {
                return (
                    <div className={styles.description}>
                        <p>{t("projects.westEasternDivan.content1")}</p>
                        <p>{t("projects.westEasternDivan.content2")}</p>
                        <div className={styles['poem']}>
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
                )
            } else if (tab === 'tsr' ) {
                return (
                    <div className={styles.description}>
                        <p>{t("projects.theSilkRoad.content1")}</p>
                        <p>{t("projects.theSilkRoad.content2")}</p>
                    </div>
                )
            } else if (tab === 'ess' ) {
                return (
                    <div className={styles.description}>
                        <p>{t("projects.eastSideStory.content1")}</p>
                        <p>{t("projects.eastSideStory.content2")}</p>
                    </div>
                )
            } else if (tab === 'tsc' ) {
                return (
                    <div className={styles.description}>
                        <p>{t("projects.theSevenColours.content1")}</p>
                        <p>{t("projects.theSevenColours.content2")}</p>
                    </div>
                )
            } else if (tab === 'tbg' ) {
                return (
                    <div className={styles.description}>
                        <p>COMING SOON</p>
                    </div>
                )
            }
        }
    }

    return (
        <div id='projectsmob' className={styles.ProjectsTemp}>
            <span className='mobile-title'>{t("nav.projects")}</span>
            <div className={styles.Tabs}>
                <span onClick={handleTabChange} id='wed' className={styles.Tab + ` ` + (tab === 'wed' ? styles['active'] : '')}>{t("projects.westEasternDivan.name")}</span>
                <span onClick={handleTabChange} id='tsr' className={styles.Tab + ` ` + (tab === 'tsr' ? styles['active'] : '')}>{t("projects.theSilkRoad.name")}</span>
                <span onClick={handleTabChange} id='ess' className={styles.Tab + ` ` + (tab === 'ess' ? styles['active'] : '')}>{t("projects.eastSideStory.name")}</span>
                <span onClick={handleTabChange} id='tsc' className={styles.Tab + ` ` + (tab === 'tsc' ? styles['active'] : '')}>{t("projects.theSevenColours.name")}</span>
                <span onClick={handleTabChange} id='tbg' className={styles.Tab + ` ` + (tab === 'tbg' ? styles['active'] : '')}>{t("projects.theBlackGarden.name")}</span>
            </div>
            <div className={styles.wrapper + ` ` + (opacity ? '' : styles['active-tab-info'])}> 
                {render.tab()}
                {render.tabContent()}
            </div>
        </div>
    )
}

export default ProjectsTemp

