import React from 'react';
import { useState } from 'react';
import arrowDown from './downArrow.svg'
import arrowUp from './upArrow.svg'

const Collapse = ({ title, text, className }) => {
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
        <div
            className={(hidden ? 'collapse' : 'collapse translate') + className}
            onClick={open} >
            <div className={hidden ? 'collapse__box' : 'collapse__box translate'} >
                <p className='collapse__title'>{title}</p>
                <img
                    id="img"
                    src={arrowDown}
                    alt="Flèche déroulante"
                    className={hidden ? 'collapse__image hidden' : 'collapse__image'} />
                <img
                    src={arrowUp}
                    alt="Flèche déroulante"
                    className={hidden ? 'collapse__image' : 'collapse__image hidden'} />
            </div>
            <div className={hidden ? 'collapse__details-box hidden' : 'collapse__details-box'} >
                {text}
            </div>
        </div >
    );
};

export default Collapse;