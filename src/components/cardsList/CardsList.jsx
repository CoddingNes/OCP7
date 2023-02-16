import React from 'react';
import Cards from '../cards/Cards';
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
                {hosts.map((host) => (
                    <Cards
                        key={host.id}
                        host={host} />
                ))}
            </div>
        </section>
    );
};

export default ArticleLogement;