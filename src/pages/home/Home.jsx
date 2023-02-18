import React from 'react';
import CardsList from '../../components/cardsList/CardsList';
import Banner from '../../components/banner/Banner';
import bannerMobile from '../../components/banner/homeBannerMobile.svg';
import './home.scss';


const Home = () => {

    return (
        <main>
            <Banner specificClass="" src={bannerMobile} />
            <CardsList />
        </main>
    );
};

export default Home;
