import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Dropdown from '../components/Dropdown';
import AProposDetails from '../assets/aProposOpen.json'

const Apropos = () => {
    return (
        <div>
            <Header />
            <main>
                <ul>
                    {AProposDetails.map((theme) =>
                        <Dropdown key={theme.index} title={theme.title} text={theme.text} />
                    )}
                </ul>
            </main>
            <Footer />
        </div>
    );
};

export default Apropos;