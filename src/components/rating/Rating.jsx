import React from 'react';
import redStar from './ratingStar-red.svg';
import greyStar from './ratingStar-grey.svg';

const Rating = (stars) => {
    const starCount = [1, 2, 3, 4, 5];

    return (
        <ul className="details__rating">
            {starCount.map((starNumber, index) => starNumber <= stars.stars ?
                <li
                    key={index}
                    className='details__ratingStar' >
                    <img
                        src={redStar}
                        alt={'étoile de notation'}
                        className='details__ratingStar-img' />
                </li> :
                <li
                    key={index}
                    className='details__ratingStar'>
                    <img
                        src={greyStar}
                        alt={'étoile de notation'}
                        className='details__ratingStar-img' />
                </li>
            )}
        </ul >
    );
};

export default Rating;