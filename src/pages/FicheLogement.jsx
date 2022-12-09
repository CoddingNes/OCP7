import React from 'react';
import hosts from '../assets/logements.json';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Tag from '../components/Tag';
import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
// import { useState } from 'react';


const Fiche_logement = () => {
    // let [hostDetails, setHostDetails] = useState([]);
    const id = window.location.pathname.split('=')[1];
    const hostDetails = hosts.find(host => host.id === id);

    return (
        <div>
            <Header />
            <main>
                <section className='carousel__block'>
                    <Carousel pictures={hostDetails.pictures} />
                </section>
                <section className='details'>
                    <div className='details__lodge'>
                        <h1 className='details__lodge-title'>{hostDetails.title}</h1>
                        <p className='details__lodge-subtitle'>{hostDetails.location}</p>
                        <div className='details__lodge-tags'>
                            {hostDetails.tags.map((tags, index) =>
                                <Tag key={index} tags={tags} />
                            )}
                        </div>
                    </div>
                    <div className='details__owner'>
                        <div className='details__owner-data'>
                            <div className="details__owner-name">
                                <p>{hostDetails.host.name.split(" ")[0]}</p>
                                <p>{hostDetails.host.name.split(" ")[1]}</p>
                            </div>
                            <img
                                src={hostDetails.host.picture}
                                alt='hôte'
                                className='details__owner-pic' />
                        </div>
                        <Rating stars={hostDetails.rating} />
                    </div>
                </section>
                <section className='dropdown'>
                    <Dropdown
                        key={'description-' + hostDetails.id}
                        title='Description'
                        text={hostDetails.description} />
                    <Dropdown
                        key={'equipments-' + hostDetails.id}
                        title='Equipement'
                        text={hostDetails.equipments}
                        className='dropdown__equipments' />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Fiche_logement;