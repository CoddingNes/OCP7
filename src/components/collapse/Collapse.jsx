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
        <li
            className={(hidden ? 'component collapse' : 'component collapse translate') + className}
            onClick={open} >
            <div className={hidden ? 'component collapse__box' : 'component collapse__box translate'} >
                <p className='component collapse__title'>{title}</p>
                <img
                    id="img"
                    src={arrowDown}
                    alt="Flèche déroulante"
                    className={hidden ? 'component collapse__image hidden' : 'component collapse__image'} />
                <img
                    src={arrowUp}
                    alt="Flèche déroulante"
                    className={hidden ? 'component collapse__image' : 'component collapse__image hidden'} />
            </div>
            <div className={hidden ? 'component collapse__details-box hidden' : 'component collapse__details-box'} >
                {text}
            </div>
        </li >
    );
};

export default Collapse;