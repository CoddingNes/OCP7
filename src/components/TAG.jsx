import React from 'react';

const TAG = ({ tags }) => {
    return (
        <div className='tag'>
            <p className='tag__name' htmlFor={tags}> {tags} </p>
        </div>
    );
};

export default TAG;