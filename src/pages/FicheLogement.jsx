import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Tag from '../components/TAG';

const Fiche_logement = () => {
    const tagNames = ["Cozy", "Canal", "Paris 10"];
    return (
        <div>
            <Header />
            <main>
                {/* <Carrousel /> */}
                {tagNames.map((tagName, index) =>
                    <Tag key={index} tagName={tagName} />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Fiche_logement;