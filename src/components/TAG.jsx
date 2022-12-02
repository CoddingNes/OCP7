import React from 'react';

const TAG = ({ tagName }) => {
    return (
        <div className='tag'>
            <p className='tag__name' htmlFor={tagName}> {tagName} </p>
        </div>
    );
};

export default TAG;