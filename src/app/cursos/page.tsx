"use client"
import * as React from 'react';
import styled from 'styled-components'; // Import styled from styled-components
import Card from '../components/Card';
import ResponsiveAppBar from '../components/Navbar';
import Footer from '../components/FooterComponent';

// Create styled components for the title and description
const Title = styled.h2`
  font-family: 'Lexend', sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px; 
`;

const Description = styled.p`
  font-family: 'Serif', serif; /* Change to serif font */
  font-size: 16px;
  color: #ffffff;
  text-align: justify; /* Align the description as justified */
`;

const CursosPage: React.FC = () => {
  const mainCard = "https://i.ibb.co/jL5hZdf/programing-card.jpg";
  return (
    <main>
      <ResponsiveAppBar />
      <div className='container'>
        <div className='background-div'>
          <Card imageUrl={mainCard} text='Imerção em desenvolvimento Web. atualizado para as necessidades do mercado'/>
          <div className='info'>
          {/* Use the styled components for the title and description */}
          <Title>Bootcamp de Desenvolvimento Front End</Title>
          <Description>
            Bem-vindo ao nosso bootcamp de desenvolvimento Front End! Aqui você vai aprender as habilidades essenciais para criar interfaces web incríveis e interativas. Com a orientação de nossos instrutores experientes, você mergulhará no mundo do HTML, CSS e JavaScript, além de frameworks modernos como React.js. Prepare-se para transformar suas ideias em realidade digital e dar os primeiros passos para se tornar um desenvolvedor Front End de sucesso!
          </Description>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default CursosPage;
