import React from 'react';
import './banner.scss';

const Banner = (props) => {

    return (
        <section className={props.specificClass + 'banner'}>
            <div className={props.specificClass + 'banner__background'}>
                <img
                    src={props.src}
                    alt="paysage d'illustration"
                    className={props.specificClass + 'banner__img'} />
                {/* Conditionnal display of the title */}
                {props.specificClass === "" ?
                    <h1 className={props.specificClass + 'banner__title'}>Chez vous,<span></span>partout et ailleurs</h1> : ""}
            </div>
        </section>
    );
};

export default Banner;