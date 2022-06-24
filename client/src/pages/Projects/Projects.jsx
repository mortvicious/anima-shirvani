import React from 'react';
import TabContent from './TabContent';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
  <div id='projects' className={styles.Projects + ` ` + 'snap-child'}>
    <div className={styles.wrapper}>
      <TabContent/>
    </div>
  </div>
)};


export default Projects;
