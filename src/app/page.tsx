import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import CardCourses from './components/CardCourses';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles['gradient-container']}>
        <div className={styles['card-container']}>
        <CardCourses title="Veja os planos" description="Mergulhe em conteúdo com a maior comunidade de tecnologia do país." 
        image={<img src='../images/curse.logo.png' alt='react'></img>} />
        </div>
      </div>

      <Grid container spacing={2} className={styles['div-display-couses']}>
        <CardCourses title="Programação" description="Lógica, Python, PHP, Java, .NET" 
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
        <CardCourses title="Devops" description="AWS, Azure, Docker, Linux"
        image={<img src='../images/curse.logo.png' alt='react'></img>} />
        <CardCourses title="Mobile" description="React Native, Flutter, IOS, Android"
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
        <CardCourses title="Front-End" description="HTML, CSS, React, Angular, JavaScript"
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
        <CardCourses title="Data Science" description="Ciência de dados, BI, SQL, NoSql"
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
        <CardCourses title="UX e Design" description="Usabilidade e UX, Video e Motion, 3D"
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
      </Grid>

      <footer className={styles['gradient-container-footer']}>

      </footer>
    </main>
  );
}

