import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = ({ host }) => {
    const routepath = "./fiche_logement/:"
    return (
        <NavLink to={routepath + "id=" + host.id} className='hostCard__link'>
            <article className='hostCard__article'>
                <img
                    src={host.cover}
                    alt="illustration logement"
                    className='hostCard__img' />
                <h2 className='hostCard__title'>{host.title}</h2>
            </article>
        </NavLink>
    );
};

export default Cards;