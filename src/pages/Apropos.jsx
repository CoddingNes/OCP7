import React from 'react';
import Dropdown from '../components/Dropdown';
import AProposDetails from '../assets/aProposOpen.json'

const Apropos = () => {
    return (
        <main>
            <ul>
                {AProposDetails.map((theme) =>
                    <Dropdown key={theme.index} title={theme.title} text={<p className='component dropdown__details-text'>{theme.text}</p>} />
                )}
            </ul>
        </main>
    );
};

export default Apropos;