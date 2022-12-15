import React from 'react';
import ArticlesLogement from '../components/ArticlesLogement';
import Banner from '../components/HomeBanner';
import bannerMobile from '../assets/homeBannerMobile.svg';


const Home = () => {

    return (
        <main>
            <Banner specificClass="" src={bannerMobile} />
            <ArticlesLogement />
        </main>
    );
};

export default Home;
