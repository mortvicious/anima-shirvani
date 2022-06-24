import React, {useState, useEffect} from 'react';
import styles from './Concerts.module.scss';
import { useTranslation } from "react-i18next"

const Main = () => {

  const [data, setData] = useState([])

  const fetchedData = [
    {    
      id: 0,
      name: 'Romeo Rachmaninoff op. 666',
      date: {
        week: 'Sat',
        month: 'Apr 30',
        time: '18:30'
      },
      location: {
        city: 'Germany, Hamburg',
        arena: 'Hamburger Arena',
      }
    },
    {    
      id: 1,
      name: 'Bach, Jeniffer and Fugue',
      date: {
        week: 'Mon',
        month: 'Apr 22',
        time: '13:00'
      },
      location: {
        city: 'Denmark, Oslo',
        arena: 'Wisdom Arena',
      }
    },
    {    
      id: 2,
      name: 'Mozart, op. 453 no. 69',
      date: {
        week: 'Sun',
        month: 'Mar 15',
        time: '19:00'
      },
      location: {
        city: 'Azerbaijan, Baku',
        arena: 'Heydar Aliyev Hall',
      }
    },
    {    
      id: 3,
      name: 'Pobida Armii',
      date: {
        week: 'Tue',
        month: 'Feb 23',
        time: '09:30'
      },
      location: {
        city: 'Ukraine, Kiyev',
        arena: 'Stublizka Gore',
      }
    },
    {    
      id: 4,
      name: 'Delightful Greece',
      date: {
        week: 'Fri',
        month: 'Jan 18',
        time: '11:00'
      },
      location: {
        city: 'USA, Washington',
        arena: 'Super Place For Music',
      }
    },
  ]

  const render = {
    data: () => {
      return (
        data.map((obj) => {
        return (
          <div key={obj.id} className={styles.DateElement}>
            <div className={styles['date-container']}>
              <p className={styles['week']}>{obj.date.week}</p>
              <p className={styles['month']}>{obj.date.month}</p>
              <p className={styles['time']}>{obj.date.time}</p>
            </div>
            <div className={styles['location-container']}>
              <p className={styles['city']}>{obj.location.city}</p>
              <p className={styles['arena']}>{obj.location.arena}</p>
            </div>
            <div className={styles['name-container']}>
              <p className={styles['name']}>{obj.name}</p>
            </div>          
          </div>
        )
      })      
      )


    }
  }

  useEffect(() => {
    setData(fetchedData)
  }, [])
  

  return (
  <div className={styles.Main}>
    <header className={styles['dates-container-header']}>
      <span className={styles['year']}>2022</span>
      <p>Dates</p>
    </header>
    <main className={styles['main-container']}>
      {render.data()}
    </main>
  </div>
)};

const Concerts = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id='concerts' className={styles.Concerts + ` ` + 'snap-child'}>
      <span className='mobile-title darken'>{t("nav.concerts")}</span>
      <Main/>
    </div>
  )
}

export default Concerts;
