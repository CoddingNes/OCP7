import React from 'react';
import Cards from '../cards/Cards';
// import hosts from '../../assets/logements.json';
import { useEffect } from 'react';
import { useState } from 'react';

const ArticleLogement = () => {
    const [hosts, setHosts] = useState([]);
    const getData = () => {
        fetch('./logements.json'
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

    return (
        <section className='hostCards'>
            <div className='hostCards__board'>
                {/* <ul className='hostCards__list'> */}
                {hosts.map((host) => (
                    <Cards
                        key={host.id}
                        host={host} />
                ))}
                {/* </ul> */}
            </div>
        </section>
    );
};

export default ArticleLogement;