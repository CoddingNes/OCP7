import React from 'react';
import banner from '../assets/banner.svg';

const Banner = () => {
    return (
        <section className='homeBanner'>
            <div className='homeBanner__background'>
                <img
                    src={banner}
                    alt="paysage d'illustration"
                    className='homeBanner__img' />
                <h1 className='homeBanner__title'>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    );
};

export default Banner;