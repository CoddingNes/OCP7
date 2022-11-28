import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logoKasa.svg';

const Header = () => {
    return (
        <header>
            <div className='bloc'>
                <img className='logo' src={logo} alt="logo Kasa" />
                <ul>
                    <NavLink to="/">
                        <li className='links' >Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className='links' >A propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;