import React from 'react';
import { useState } from 'react';
import ArrowDown from '../assets/dropdownDownArrow.svg'
import ArrowUpown from '../assets/dropdownUpArrow.svg'

const Dropdown = ({ title, text }) => {
    const [hidden, setHidden] = useState(false);
    const open = () => {
        if (hidden) {
            setHidden(false);
        }
        else {
            setHidden(true);
        }
    };

    return (
        <li className={hidden ? 'aPropos fiche dropdown' : 'aPropos fiche dropdown translate'} onClick={open} >
            <div className={hidden ? 'aPropos fiche dropdown__box' : 'aPropos fiche dropdown__box translate'} >
                <p className='aPropos fiche dropdown__title'>{title}</p>
                <img id="img" src={ArrowDown} alt="Flèche déroulante" className={hidden ? 'aPropos fiche dropdown__image hidden' : 'aPropos fiche dropdown__image'} />
                <img src={ArrowUpown} alt="Flèche déroulante" className={hidden ? 'aPropos fiche dropdown__image' : 'aPropos fiche dropdown__image hidden'} />
            </div>
            <div className={hidden ? 'aPropos fiche dropdown__details-box hidden' : 'aPropos fiche dropdown__details-box'} >
                <p className='aPropos fiche dropdown__details-text'>{text}</p>
            </div>
        </li>
    );
};

export default Dropdown;