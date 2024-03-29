import React from 'react';
import './tag.scss';

const Tag = ({ tags }) => {
    return (
        <div className='tag'>
            <p className='tag__name'> {tags} </p>
        </div>
    );
};

export default Tag;