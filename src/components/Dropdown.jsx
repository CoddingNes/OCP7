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
        <li className={hidden ? 'dropdown' : 'dropdown translate'} onClick={open} >
            <div className={hidden ? 'dropdown__box' : 'dropdown__box translate'} >
                <p className='dropdown__title'>{title}</p>
                <img id="img" src={ArrowDown} alt="Flèche déroulante" className={hidden ? 'dropdown__image hidden' : 'dropdown__image'} />
                <img src={ArrowUpown} alt="Flèche déroulante" className={hidden ? 'dropdown__image' : 'dropdown__image hidden'} />
            </div>
            <div className={hidden ? 'dropdown__details-box hidden' : 'dropdown__details-box'} >
                <p className='dropdown__details-text'>{text}</p>
            </div>
        </li>
    );
};

export default Dropdown;