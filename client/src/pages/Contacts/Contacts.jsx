import React from 'react';
import styles from './Contacts.module.scss';

const Main = () => {
  return (
    <main className={styles.Main}>
      <div className={styles.name}>
          <input placeholder='First Name' className={styles.fname} type="text" />
          <input placeholder='Last Name' className={styles.lname} type="text" name="" id="" />
      </div>
        <input placeholder='Email' className={styles.email} type="text" />
        <input placeholder='Subject' className={styles.subject} type="text" />
        <textarea className={styles.message} name="" id="" cols="30" rows="10"></textarea>
        <button>Submit</button>
    </main>

  )
}

const Contacts = () => (
  <div id='contacts' className={styles.Contacts + ` ` + 'snap-child'}>
    <header className={styles['contacts-header']}>
      <span className={styles['contact-title']}>Contact us</span>
    </header>
    <div className={styles['wrapper']}><Main/></div>
  </div>
);



export default Contacts;
