import React, { useEffect, useState } from 'react';
import Tag from '../../components/tag/Tag';
import Collapse from '../../components/collapse/Collapse';
import Gallery from '../../components/gallery/Gallery';
import Rating from '../../components/rating/Rating';
import Lodge from '../../components/lodge/Lodge';
import Owner from '../../components/owner/Owner';
import { useNavigate } from 'react-router-dom';


const Fiche_logement = () => {
    const [host, setHost] = useState([]);
    const [display, setDisplay] = useState(false);
    const getData = () => {
        fetch('../logements.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                const id = window.location.pathname.split('=')[1];
                const host = myJson.find(host => host.id === id);
                if (host) {
                    setHost(host);
                    setDisplay(true);
                } else {
                    redirection()
                }
            });
    }

    useEffect(() => {
        getData()
    }, [])

    const navigate = useNavigate();
    const redirection = () => {
        navigate("/404");
    };

    if (display) {
        return (
            <main>
                <section className='carousel__block'>
                    <Gallery pictures={host.pictures} />
                </section>
                <section className='details'>
                    <div className='details__lodge'>
                        <Lodge title={host.title} location={host.location} />
                        <div className='details__lodge-tags'>
                            {host.tags.map((tags, index) =>
                                <Tag key={index} tags={tags} />
                            )}
                        </div>
                    </div>
                    <div className='details__owner'>
                        <Owner name={host.host.name} picture={host.host.picture} />
                        <Rating stars={host.rating} />
                    </div>
                </section>
                <section className='collapse__property-section'>
                    <Collapse
                        key={'description-' + host.id}
                        title='Description'
                        text={
                            <p className='property collapse__details-text'>{host.description}</p>
                        }
                        className=' property' />
                    <Collapse
                        key={'equipments-' + host.id}
                        title='Equipement'
                        text={
                            <ul className='property collapse__details-text'>
                                {host.equipments.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        }
                        className=' property' />
                </section>
            </main>
        );
    }
};

export default Fiche_logement;