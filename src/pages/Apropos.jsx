import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import DropdownClosed from '../components/DropdownClosed';


const Apropos = () => {
    const dropdownTitles = ["Fiabilité", "Respect", "Service", "Responsabilité"]
    return (
        <div>
            <Header />
            <main>
                {dropdownTitles.map((title, index) =>
                    <ul>
                        <DropdownClosed key={index} title={title} />
                    </ul>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Apropos;