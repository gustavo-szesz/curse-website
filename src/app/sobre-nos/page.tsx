import * as React from 'react';
import Navbar from '../components/Navbar';
import styles from '../page.module.css';
import ModalBasic from '../components/ModalBasic';
import './sobrenos.css';

const SobreNosPage: React.FC = () => {
    return (
        <main>
        <Navbar />
        <div className={styles['gradient-container']}>
            <div className={styles['card-container']}>
                <h2>Sobre Nós</h2>
                    <p>-------------------------</p>
                    <p>Bem-vindo à Empresa de Cursos de Tecnologia!</p>
                    <p>Na Empresa de Cursos de Tecnologia, acreditamos no poder da educação para transformar vidas. Desde 2024, temos o compromisso de oferecer cursos online de alta qualidade, criados por especialistas em diversas áreas do conhecimento.</p>
                    <p>Nosso objetivo é proporcionar acesso à educação de excelência para pessoas em todo o mundo. Com a flexibilidade do ensino online, você pode aprender no seu próprio ritmo, de acordo com sua agenda e onde quer que esteja.</p>
                <h3>O que nos torna diferentes:</h3>
                    <p>-------------------------</p>
                    <ModalBasic title='Professores Especializados' description='Matricule-se já!' description2='Nossos cursos são desenvolvidos por profissionais experientes e apaixonados pelo que fazem. Eles estão comprometidos em compartilhar seu conhecimento e experiência para ajudar você a alcançar seus objetivos.'/>
                    <ModalBasic title='Variedade de Cursos' description='Matricule-se já!' description2='Oferecemos uma ampla gama de cursos em diversas áreas, desde programação até artes criativas, negócios, saúde e muito mais. Há sempre algo novo para aprender e explorar.'/>
                    <ModalBasic title='Aprendizado Interativo' description='Matricule-se já!' description2='Acreditamos que a aprendizagem deve ser envolvente e interativa. Nossos cursos incluem vídeos, quizzes, projetos práticos e fóruns de discussão para que você possa realmente se aprofundar no conteúdo.'/>
                    <ModalBasic title='Suporte ao Aluno' description='Matricule-se já!' description2='Nossa equipe de suporte está sempre disponível para ajudar. Se você tiver dúvidas sobre o curso, problemas técnicos ou precisa de orientação, estamos aqui para oferecer suporte em cada etapa da sua jornada de aprendizado.'/>
                    <ModalBasic title='Nossa Missão' description='Matricule-se já!' description2='Empoderar pessoas por meio da educação, oferecendo cursos de qualidade que impulsionam o crescimento pessoal e profissional.'/>
                <p>Junte-se a nós na jornada do conhecimento e descubra um mundo de possibilidades. Estamos entusiasmados em fazer parte da sua trajetória de aprendizado.</p>
                <p>Seja bem-vindo à Empresa de Cursos de Tecnologia!</p>
            </div>
        </div>
        </main>
    )
}

export default SobreNosPage;