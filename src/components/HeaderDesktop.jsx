import React from 'react'

const HearderDesktop = () => {
    return (
        <header className="sticky-top py-4 d-lg-none d-xl-none d-xxl-none">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <div className="contenedor-menu" id="contenedor-menu">
                        <p className="btn-abrir-menu" id="btn-abrir-menu">
                            <i className="bi bi-house-fill"></i>
                        </p>
                        <div className="elementos-navegacion ">
                            <ul>
                                <li name="link-menu"><a href="#">Inicio</a></li>
                                <li name="link-menu"><a href="#portfolio">Portafolio</a></li>
                                <li name="link-menu"><a href="#">Sobre mí</a></li>
                                <li name="link-menu"><a href="#contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HearderDesktop;