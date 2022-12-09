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
        <li className={hidden ? 'component dropdown' : 'component dropdown translate'} onClick={open} >
            <div className={hidden ? 'component dropdown__box' : 'component dropdown__box translate'} >
                <p className='component dropdown__title'>{title}</p>
                <img id="img" src={ArrowDown} alt="Flèche déroulante" className={hidden ? 'component dropdown__image hidden' : 'component dropdown__image'} />
                <img src={ArrowUpown} alt="Flèche déroulante" className={hidden ? 'component dropdown__image' : 'component dropdown__image hidden'} />
            </div>
            <div className={hidden ? 'component dropdown__details-box hidden' : 'component dropdown__details-box'} >
                <p className='component dropdown__details-text'>{text}</p>
            </div>
        </li>
    );
};

export default Dropdown;