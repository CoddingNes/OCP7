import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/index.scss';
import logo from '../assets/logoKasa.png';

const Header = () => {
    return (
        <div className='bloc'>
            <img src={logo} alt="logo Kasa" />
            <ul>
                <NavLink to="/">
                    <li className='links' >Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li className='links' >A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;