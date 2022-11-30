import React from 'react';
import ArticlesLogement from '../components/ArticlesLogement';
import Banner from '../components/HomeBanner';
import Header from '../layouts/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <ArticlesLogement />
            </main>
        </div>
    );
};

export default Home;
