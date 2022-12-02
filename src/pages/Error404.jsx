import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { NavLink } from 'react-router-dom';


const Error404 = () => {
    return (
        <div>
            <Header />
            <main className='error404'>
                <h1 className='error404__title'>404</h1>
                <h2 className='error404__subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
                <NavLink to='/' className='error404__link'>
                    <p className='error404__link'>Retourner sur la page d’accueil</p>
                </NavLink>
            </main>
            <Footer />
        </div>
    );
};

export default Error404;