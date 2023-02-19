import { React, useState, useEffect } from 'react';
import Cards from '../cards/Cards';
import './cardsList.scss';


const CardsList = () => {
    // Create a hosts state
    const [hosts, setHosts] = useState([]);

    // getData function get datas and set it to hosts in a new state
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

    // useEffect only runs getData after the page load 
    useEffect(() => {
        getData()
    }, [])

    return (
        <section className='hostCards'>
            <div className='hostCards__board'>
                {/* map function allows to iterate on the hosts list */}
                {hosts.map((host) => (
                    <Cards
                        key={host.id}
                        host={host} />
                ))}
            </div>
        </section>
    );
};

export default CardsList;