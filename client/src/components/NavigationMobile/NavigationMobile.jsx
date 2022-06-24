import React, {useState, useEffect} from 'react'
import styles from './NavigationMobile.module.scss'

function NavigationMobile(props) {
  const [burgerTransformed, setBurgerTransformed] = useState(false)

  const handleBurgerTransform = (burgerTransform) => {
    setBurgerTransformed(burgerTransform)
  }

  useEffect(() => {
    
    handleBurgerTransform(props.burgerTransform)

    return () => {
      
    }
  }, [props.burgerTransform])
  

  return (
    <div onClick={props.onClick} className={styles.NavigationMobile}>
        <div className={styles['hamburger'] + ` ` + props.navBackground}>
          <div className={styles['hamburger-line'] + ` ` + (burgerTransformed ? styles['burger-line-hidden'] : '')}></div>
          <div className={styles['hamburger-line'] + ` ` + (burgerTransformed ? styles['burger-line-transform-top'] : '')}></div>
          <div className={styles['hamburger-line'] + ` ` + (burgerTransformed ? styles['burger-line-transform-bottom'] : '')}></div>
        </div>
    </div>
  )
}


export default NavigationMobile