import React from 'react';
import Cards from './Cards';
import hosts from '../assets/logements.json';

const ArticleLogement = () => {
    return (
        <section className='hostCards'>
            <div className='hostCards__board'>
                <ul className='hostCards__list'>
                    {hosts.map((host) => (
                        <Cards
                            key={host.id}
                            host={host} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ArticleLogement;