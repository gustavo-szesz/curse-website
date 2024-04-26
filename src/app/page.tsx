"use client"
import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import CardCourses from './components/CardCourses';
import styles from './page.module.css';
import Footer from './components/FooterComponent';
import programingCard from './components/images/programing-card.jpg'


export default function Home() {
  const mainCard = "https://i.ibb.co/jL5hZdf/programing-card.jpg"
  const developmentCard = "https://i.ibb.co/4F0QQfT/development.jpg"
  const devopsCard = "https://i.ibb.co/nzZTx3S/devops.jpg"
  const mobileCard = "https://i.ibb.co/f4B3MGS/mobile-Dev.jpg"
  const frontEndCard = "https://i.ibb.co/26kc14S/front-end.jpg"

  return (
    <main>
      <Navbar />
      <div className="gradient-container">
        <div className={styles['card-container']}>
        <h1>Cursos de <span>Tecnologia!</span></h1>
        <CardCourses title="Veja os planos" description="Mergulhe em conteúdo com a maior comunidade de tecnologia do país." 
        image={mainCard}/>
        </div>
      </div>

      <Grid container spacing={2} className={styles['div-display-couses']}>
        <CardCourses title="Programação" description="Lógica, Python, PHP, Java, .NET" 
        image={developmentCard}/>
        <CardCourses title="Devops" description="AWS, Azure, Docker, Linux"
        image={devopsCard}/>
        <CardCourses title="Mobile" description="React Native, Flutter, IOS, Android"
        image={mobileCard}/>
        <CardCourses title="Front-End" description="HTML, CSS, React, Angular, JavaScript"
        image={frontEndCard}/>
        <CardCourses title="Data Science" description="Ciência de dados, BI, SQL, NoSql"
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
        <CardCourses title="UX e Design" description="Usabilidade e UX, Video e Motion, 3D"
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
      </Grid>


      <Footer/>
    </main>
  );
}

