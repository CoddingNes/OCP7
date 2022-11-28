import React from 'react';
import banner from '../assets/banner.svg';

const Banner = () => {
    return (
        <section className='banner'>
            <div>
                {/* <div className='background--black'></div> */}
                <img src={banner} alt="paysage d'illustration" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    );
};

export default Banner;