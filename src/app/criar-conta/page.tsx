"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import CreateAccountForm from '../components/CreateAccountForm';
import './styles.css';
import Footer from '../components/FooterComponent';

const CreateAccount: React.FC = () => {
    return (
        <main>
            <Navbar/>
            <div className='gradient-container'>
                <CreateAccountForm />   
            </div>
            <Footer />
        </main>


    );
};

export default CreateAccount;
