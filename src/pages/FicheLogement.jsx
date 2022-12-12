import React, { useEffect } from 'react';
import hosts from '../assets/logements.json';
import Tag from '../components/Tag';
import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
import { useNavigate } from 'react-router-dom';


const Fiche_logement = () => {
    const navigate = useNavigate();
    const id = window.location.pathname.split('=')[1];
    const hostDetails = hosts.find(host => host.id === id);
    const redirection = () => {
        if (hostDetails === undefined) {
            navigate("/404");
        }
    };
    useEffect(redirection)

    if (hostDetails) {
        return (
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
                    <ul className='dropdown'>
                        <Dropdown
                            key={'description-' + hostDetails.id}
                            title='Description'
                            text={
                                <p className='component dropdown__details-text'>{hostDetails.description}</p>
                            } />
                        <Dropdown
                            key={'equipments-' + hostDetails.id}
                            title='Equipement'
                            text={
                                <ul className='component dropdown__details-text'>
                                    {hostDetails.equipments.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            }
                            className='dropdown__equipments' />
                    </ul>
                </section>
            </main>
        );
    }
};

export default Fiche_logement;