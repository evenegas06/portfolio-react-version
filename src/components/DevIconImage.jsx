import React from 'react';

const DevIconImage = ({ name, image }) => {
    return (
        <div>
            <img src={image} className="dev-icons" alt={`${name} logo`} />
            <p><small>{ name }</small></p>
        </div>
    );
};

export default DevIconImage;