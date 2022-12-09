import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logoKasa.svg';

const Header = () => {
    return (
        <header>
            <div className='header__bloc'>
                <img className='header__logo' src={logo} alt="logo Kasa" />
                <ul className='header__link-list'>
                    <NavLink to="/" activeClassName="active">
                        <li className={'header__link-element'} >Accueil</li>
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        <li className='header__link-element' >A propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;