import React from 'react';

const Avatar = () => {
    return (
        <section className="text-center text-white" id="home">
            <p>¡Hola! Es un placer saludarte👋, mi nombre es <strong>Eduardo Venegas Rivera</strong>
                pasante de Ingeniería en Computación y un apasionado</p>

            <h1>Desarrollador Web</h1>

            <p>Además me gusta salir en bicicleta y aprender cosas nuevas.</p>

            <img src="https://eduardovr.com/assets/img/evr.png" alt="Eduardo Venegas"
                className="img-fluid rounded-circle" />
        </section>
    );
};

export default Avatar;