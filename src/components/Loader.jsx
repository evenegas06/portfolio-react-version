import React from 'react';

const Loader = () => {
    return (
        <div className="container-fluid">
            <div className="row align-items-center" id="loading">
                <div className="col-12 text-center text-light">
                    <br />
                    <div className="spinner-border " role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;