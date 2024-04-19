import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import type { AppProps } from 'next/app';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles['gradient-container']}>
        <p>Inisra o card dos cursos aqui </p>
      </div>
    </main>
  )
}