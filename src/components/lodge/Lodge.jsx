import React from 'react';

const Lodge = (props) => {
    return (
        <>
            <h1 className='details__lodge-title'>{props.title}</h1>
            <p className='details__lodge-location'>{props.location}</p>
        </>
    );
};

export default Lodge;