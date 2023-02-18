import React from 'react';
import Collapse from '../../components/collapse/Collapse';
import Banner from '../../components/banner/Banner';
import aboutDetails from '../../assets/aboutDetails.json'
import banner from '../../components/banner/aboutBanner.jpg';
import './about.scss';


const About = () => {

    return (
        <main>
            <Banner specificClass="about__style " src={banner} />
            <section className='collapse__about-section'>
                {aboutDetails.map((theme, index) =>
                    <Collapse
                        key={index}
                        title={theme.title}
                        text={
                            <p className='about collapse__details-text'>{theme.text}</p>
                        }
                        className=""
                    />
                )}
            </section>
        </main>
    );
};

export default About;