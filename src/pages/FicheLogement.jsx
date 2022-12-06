import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Tag from '../components/Tag';
import Dropdown from '../components/Dropdown';
import hosts from '../assets/logements.json';
import { useState } from 'react';


const Fiche_logement = () => {
    let [hostDetails, setHostDetails] = useState([]);
    if (hostDetails.length === 0) {
        const id = window.location.pathname.split('=')[1];
        setHostDetails(hosts.find(host => host.id === id));
    }


    return (
        <div>
            <Header />
            <main>
                {/* <Carrousel /> */}
                <section>
                    <p></p>
                    <h1>{hostDetails.title}</h1>
                    <p>{hostDetails.location}</p>
                    <div>
                        {hostDetails.tags.map((tags, index) =>
                            <Tag key={index} tags={tags} />
                        )}

                    </div>
                    <div>
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