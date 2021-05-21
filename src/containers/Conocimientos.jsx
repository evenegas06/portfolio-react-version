import React from 'react';

const Conociminetos = ({ children }) => {
    return (
        <section className="mt-3 shadow-lg" id="skills">
            <h2 className="text-center text-white pt-5 pb-4">
                &lt;&nbsp; Conocimientos &nbsp;/&gt;
            </h2>
        <div className="pb-5 row text-center skills-container">
            <div className="col-12 col-lg-8 offset-lg-2">
                <p className="text-white">
                    Estas son algunas de las tecnologías en las que poseo cononocimientos solidos
                    y con las cuales he tenido la oportunidad de trabajar, practicar y desarrollar uno que otro
                    proyecto a lo largo de mi formación profesional.
                </p>

                <div className="d-flex flex-wrap justify-content-center">
                    {children}
                </div>

                <hr className="text-white" />
                <p className="text-white">
                    Además del desarrollo web me gustaría adentrarme en el
                    mundo del desarrollo de aplicaciones moviles, pero eso es algo en lo que iré trabajando
                    paulatinamente.
                </p>
                <hr className="text-white" />
            </div>
        </div>
    </section>
    );
};

export default Conociminetos;