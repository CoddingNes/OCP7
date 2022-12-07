import React from 'react';
import redStar from '../assets/ratingStar-red.svg';
import greyStar from '../assets/ratingStar-grey.svg';

const Rating = (stars) => {
    const starCount = [1, 2, 3, 4, 5];
    console.log(stars.stars)

    return (
        <ul className="details__rating">
            {starCount.map((starNumber, index) => starNumber <= stars.stars ?
                <li className='details__ratingStar' >
                    <img
                        key={'star-' + index}
                        src={redStar}
                        alt={'étoile de notation'}
                        className='details__ratingStar-img' />
                </li> :
                <li className='details__ratingStar'>
                    <img
                        key={'star-' + index}
                        src={greyStar}
                        alt={'étoile de notation'}
                        className='details__ratingStar-img' />
                </li>
            )}
        </ul>
    );
};

export default Rating;