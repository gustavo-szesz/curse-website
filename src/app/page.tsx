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
        <CardCourses title="React" description="Aprenda agora" 
        image={<img src='../images/curse.logo.png' alt='react'></img>} />
        </div>
      </div>

      <Grid container spacing={2} className={styles['div-display-couses']}>
        <CardCourses title=".NET" description="Aprenda a ultima versão" 
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
        <CardCourses title="Elixir" description="short desc"
        image={<img src='../images/curse.logo.png' alt='react'></img>} />
        <CardCourses title="Haskell" description="short descp"
        image={<img src='../images/curse.logo.png' alt='react'></img>}/>
      </Grid>


      <footer className={styles['gradient-container-footer']}>

      </footer>
    </main>
  );
}

