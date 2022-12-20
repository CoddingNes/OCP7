import React, { useEffect, useState } from 'react';
// import hosts from '../../assets/logements.json';
import Tag from '../../components/tag/Tag';
import Collapse from '../../components/collapse/Collapse';
import Gallery from '../../components/gallery/Gallery';
import Rating from '../../components/rating/Rating';
import Lodge from '../../components/lodge/Lodge';
import Owner from '../../components/owner/Owner';
// import { useNavigate } from 'react-router-dom';


const Fiche_logement = () => {
    const [hosts, setHosts] = useState([]);
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
                setHosts(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])

    // const navigate = useNavigate();
    const id = window.location.pathname.split('=')[1];
    const hostDetails = hosts.find(host => host.id === id);
    // const redirection = () => {
    //     if (hostDetails === undefined) {
    //         navigate("/404");
    //     }
    // };
    // useEffect(redirection)

    if (hostDetails) {
        return (
            <main>
                <section className='carousel__block'>
                    <Gallery pictures={hostDetails.pictures} />
                </section>
                <section className='details'>
                    <div className='details__lodge'>
                        <Lodge title={hostDetails.title} location={hostDetails.location} />
                        <div className='details__lodge-tags'>
                            {hostDetails.tags.map((tags, index) =>
                                <Tag key={index} tags={tags} />
                            )}
                        </div>
                    </div>
                    <div className='details__owner'>
                        <Owner name={hostDetails.host.name} picture={hostDetails.host.picture} />
                        <Rating stars={hostDetails.rating} />
                    </div>
                </section>
                <section className='collapse__property-section'>
                    <Collapse
                        key={'description-' + hostDetails.id}
                        title='Description'
                        text={
                            <p className='component collapse__details-text'>{hostDetails.description}</p>
                        }
                        className=' property' />
                    <Collapse
                        key={'equipments-' + hostDetails.id}
                        title='Equipement'
                        text={
                            <ul className='property collapse__details-text'>
                                {hostDetails.equipments.map((item, index) => (
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