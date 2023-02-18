import React from 'react';
import './owner.scss';

const Owner = (props) => {
    return (
        <div className='details__owner-data'>
            <p className="details__owner-name">{props.name}</p>
            <img
                src={props.picture}
                alt='hôte'
                className='details__owner-pic' />
        </div>
    );
};

export default Owner;