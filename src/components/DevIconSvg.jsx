import React from 'react';

const DevIconSvg = ({ children, name }) => {
    return (
        <div>
            { children }
            <p><small>{ name }</small></p>
        </div>
    );
};

export default DevIconSvg;