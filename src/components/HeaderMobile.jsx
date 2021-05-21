import React from 'react';

const HeaderMobile = () => {
    return (
        <header className="sticky-top mb-5 d-none d-lg-block ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand mx-3 text-white" href="#">EV</a>
                    <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                        <ul className="navbar-nav text-center" id="nav-items">
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#portfolio">Portafolio</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Sobre mí</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderMobile;