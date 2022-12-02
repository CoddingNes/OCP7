import React from 'react';
import Arrow from '../assets/dropdownDownArrow.svg'

const DropdownClosed = ({ title }) => {
    return (
        <li className='dropdownClosed'>
            <div className='dropdownClosed__box'>
                <p className='dropdownClosed__title'>{title}</p>
                <img src={Arrow} alt="Flèche déroulante" className='dropdownClosed__image' />
            </div>
        </li>
    );
};

export default DropdownClosed;