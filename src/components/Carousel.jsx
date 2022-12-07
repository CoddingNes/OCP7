import React from 'react';
import { useState } from 'react';
import leftArrow from '../assets/CarouselLeftArrow.svg';
import rightArrow from '../assets/CarouselRightArrow.svg';


const Carousel = (pictures) => {
    const [i, setI] = useState(0);

    const moveLeft = () => {
        setI(() => {
            if (i === 0) {
                return (pictures.pictures.length - 1);
            } else {
                return (i - 1);
            }
        });
    }
    const moveRight = () => {
        setI(() => {
            if (i === (pictures.pictures.length - 1)) {
                return 0;
            } else {
                return (i + 1);
            }
        });
    }


    return (
        <div className='carousel'>
            <img
                src={pictures.pictures[i]}
                alt="Aperçu du logement"
                className="carousel__image" />
            <div className="carousel__arrows">
                <img
                    src={leftArrow}
                    alt="Précédent"
                    className="carousel__leftArrow"
                    onClick={moveLeft} />
                <img
                    src={rightArrow}
                    alt="Suivant"
                    className="carousel__rightArrow"
                    onClick={moveRight} />
            </div>
            <p className="carousel__counter">{i + "/" + (pictures.pictures.length - 1)}</p>
        </div>
    );
};

export default Carousel;