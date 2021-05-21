import React from 'react';

const Portfolio = ({ children }) => {
    return (
        <section className="text-center shadow-lg" id="portfolio">
            <h2 className="text-white pt-5 pb-4">
                &lt;&nbsp; Portafolio &nbsp;/&gt;
            </h2>
            <div className="row pb-5 portfolio-container">
                { children }
            </div>
        </section>
    );
};

export default Portfolio;