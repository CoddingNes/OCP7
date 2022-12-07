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
                <section className='details__block'>
                    <div>
                        <h1 className='details__title'>{hostDetails.title}</h1>
                        <p className='details__subtitle'>{hostDetails.location}</p>
                        <div className='details__tags-block'>
                            {hostDetails.tags.map((tags, index) =>
                                <Tag key={index} tags={tags} />
                            )}
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="details__hostName">{hostDetails.host.name}</p>
                            <img src={hostDetails.host.picture} alt="hôte" className="details__hostPic" />
                        </div>
                        <Rating stars={hostDetails.rating} />
                    </div>

                    <div className='details__dropdown-block'>
                        <Dropdown key={'description-' + hostDetails.id} title='Description' text={hostDetails.description} />
                        <Dropdown key={'equipments-' + hostDetails.id} title='Equipement' text={hostDetails.equipments} />
                    </div>


                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Fiche_logement;