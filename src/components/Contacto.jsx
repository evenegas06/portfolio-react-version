import React from 'react';

const Contacto = () => {
    return (
        <section id="contacto">
            <div className="text-center text-white">
                <h2>¿Te ha gustado?</h2>
                <p>Si lo deseas juntos podemos crear proyectos similares e incluso mejores.</p>
                <a href="mailto:dev@eduardovr.com" target="_blank" rel="noopener noreferrer"
                    className="btn btn-contacto">Contáctame</a>
            </div>
        </section>
    );
};

export default Contacto;