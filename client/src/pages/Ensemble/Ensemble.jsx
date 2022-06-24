import React, {useState} from 'react';
import { useTranslation } from "react-i18next";
import styles from './Ensemble.module.scss';
import avatar1 from '../../assets/img/TuralIsm.webp'
import avatar2 from '../../assets/img/DenMah.webp'
import avatar3 from '../../assets/img/PeAlDo.webp'
import avatar4 from '../../assets/img/DavBud.webp'
import avatar5 from '../../assets/img/DomMar.webp'
import avatar6 from '../../assets/img/SebFla.webp'

const ArtistCard = (props) => {
  return (
    <div className={styles.ArtistCard }>
      <div className={styles['artist-main-container']+ ` ` + props.customClass}>
        <div className={styles['name-container']}>
          <span id={props.id} onClick={props.onClick} className={styles['artist-name'] + ` ` + props.shownName}>{props.name}</span>
          <span className={styles['artist-position'] + ` ` + props.positionCustomClass}>{props.description}</span>
        </div>
        <img id={props.id} onClick={props.onClick} className={styles['artist-image'] + ` ` + props.shownImg} src={props.img} alt=""/>
      </div>
      <div className={styles['artist-description'] + ` ` + props.shownDescription}>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <p>{props.p4}</p>
        <p>{props.p5}</p>
        <p>{props.p6}</p>
      </div>
    </div>
  )
}

const Ensemble = () => {
  const { t, i18n } = useTranslation();
  const [shown, setShown] = useState('')
  const handleShown = (e) => {
    let id = e.currentTarget.id
    setShown(id)
    if (shown === id) {
      setShown('')
    }
  }

  return (
  <div id='ensemble' className={styles.Ensemble}>
    <div className={styles['main-container']}>
      <span className='mobile-title'>Ensemble</span>
      <div className={styles['main-container-section'] + ` ` + `snap-child`}>
      <ArtistCard 
        onClick={handleShown} 
        id='a1' 
        shownDescription={(shown === 'a1' ? styles['shown'] : '')}
        shownName={(shown === 'a1' ? styles['shown-name'] : '')} 
        shownImg={(shown === 'a1' ? styles['shown-img'] : '')}
        img={avatar1} 
        name='Tural Ismayilov'
        description='SACKBUT, ARTISTIC DIRECTOR'
        p1={t("ensemble.turalIsmayilov.description.p1")}
        p2={t("ensemble.turalIsmayilov.description.p2")}
        p3={t("ensemble.turalIsmayilov.description.p3")}
        p4={t("ensemble.turalIsmayilov.description.p4")}

        />
      <ArtistCard 
        onClick={handleShown} 
        id='a2' 
        shownDescription={(shown === 'a2' ? styles['shown'] : '')} 
        shownName={(shown === 'a2' ? styles['shown-name'] : '')} 
        shownImg={(shown === 'a2' ? styles['shown-img'] : '')}
        customClass={styles['reverse']} 
        img={avatar2} 
        name='Deniz Mahir Kartal'
        description='BALABAN (DUDUK), KAVAL'
        positionCustomClass={styles['artist-position-reverse']}
        p1={t("ensemble.denizMahirKartal.description.p1")}
        p2={t("ensemble.denizMahirKartal.description.p2")}
        p3={t("ensemble.denizMahirKartal.description.p3")}
        />
        
      <ArtistCard 
        onClick={handleShown} 
        id='a3' 
        shownDescription={(shown === 'a3' ? styles['shown'] : '')} 
        shownName={(shown === 'a3' ? styles['shown-name'] : '')} 
        shownImg={(shown === 'a3' ? styles['shown-img'] : '')}
        img={avatar3} 
        name='Pedro Alcacer Doria'
        description='THEORBE, RENAISSANCELAUTE'
        p1={t("ensemble.pedroAlcacerDoria.description.p1")}
        p2={t("ensemble.pedroAlcacerDoria.description.p2")}
        p3={t("ensemble.pedroAlcacerDoria.description.p3")}

        />
      <ArtistCard 
        onClick={handleShown} 
        id='a4' 
        shownDescription={(shown === 'a4' ? styles['shown'] : '')} 
        shownName={(shown === 'a4' ? styles['shown-name'] : '')} 
        shownImg={(shown === 'a4' ? styles['shown-img'] : '')}
        customClass={styles['reverse']} 
        positionCustomClass={styles['artist-position-reverse']}
        img={avatar4} 
        name='David Budai'
        description='VIOLA DA GAMBA'
        p1={t("ensemble.davidBudai.description.p1")}
        p2={t("ensemble.davidBudai.description.p2")}

        />
      <ArtistCard 
        onClick={handleShown} 
        id='a5' 
        shownDescription={(shown === 'a5' ? styles['shown'] : '')} 
        shownName={(shown === 'a5' ? styles['shown-name'] : '')} 
        shownImg={(shown === 'a5' ? styles['shown-img'] : '')}
        img={avatar5} 
        name='Domen Marincic'
        description='VIOLA DA GAMBA'
        p1={t("ensemble.domenMarincic.description.p1")}
        p2={t("ensemble.domenMarincic.description.p2")}
        p3={t("ensemble.domenMarincic.description.p3")}
        p4={t("ensemble.domenMarincic.description.p4")}

        />
      <ArtistCard 
        onClick={handleShown} 
        id='a6' 
        shownDescription={(shown === 'a6' ? styles['shown'] : '')} 
        shownName={(shown === 'a6' ? styles['shown-name'] : '')} 
        shownImg={(shown === 'a6' ? styles['shown-img'] : '')}
        customClass={styles['reverse']} 
        positionCustomClass={styles['artist-position-reverse']}
        img={avatar6} 
        name='Sebastian Flaig'
        description='PERCUSSION'
        p1={t("ensemble.sebastianFlaig.description.p1")}
        p2={t("ensemble.sebastianFlaig.description.p2")}
        p3={t("ensemble.sebastianFlaig.description.p3")}
        p4={t("ensemble.sebastianFlaig.description.p4")}
        p5={t("ensemble.sebastianFlaig.description.p5")}

        />
      </div>
    </div>
  </div>
)};

export default Ensemble;
