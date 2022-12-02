import React from 'react';
import ArticlesLogement from '../components/ArticlesLogement';
import Banner from '../components/HomeBanner';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner />
                <ArticlesLogement />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
