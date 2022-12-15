import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logoKasa.svg';

const Header = () => {
    return (
        <header>
            <div className='header__bloc'>
                <NavLink to='/'>
                    <img className='header__logo' src={logo} alt="logo Kasa" />
                </NavLink>
                <ul className='header__link-list'>
                    <NavLink to="/" activeclassname="active">
                        <li className={'header__link-element'} >Accueil</li>
                    </NavLink>
                    <NavLink to="/A_propos" activeclassname="active">
                        <li className='header__link-element' >A propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;