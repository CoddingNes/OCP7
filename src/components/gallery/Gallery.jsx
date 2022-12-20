import React from 'react';
import { useState } from 'react';
import leftArrow from './leftArrow.svg';
import rightArrow from './rightArrow.svg';


const Gallery = (pictures) => {
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
        <div className='gallery'>
            <img
                src={pictures.pictures[i]}
                alt="Aperçu du logement"
                className="gallery__image" />
            <div className="gallery__arrows">
                <img
                    src={leftArrow}
                    alt="Précédent"
                    className="gallery__leftArrow"
                    onClick={moveLeft} />
                <img
                    src={rightArrow}
                    alt="Suivant"
                    className="gallery__rightArrow"
                    onClick={moveRight} />
            </div>
            <p className="gallery__counter">{(i + 1) + "/" + (pictures.pictures.length)}</p>
        </div>
    );
};

export default Gallery;