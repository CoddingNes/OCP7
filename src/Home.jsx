import React from 'react';
import Banner from './components/Banner';
import Header from './layouts/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner />

            </main>
            <h1>Accueil</h1>
        </div>
    );
};

export default Home;
