import React from 'react';

const Project = ({credit = 'false', name, curso, link, image, description, date}) => {
    return (
        <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="card mb-3 bg-transparent shadow-lg text-white">
                <div className="row my-auto g-0">
                    <div className="col-lg-5 justify-content-center align-items-center d-flex">
                        {credit === "false" ?

                            < a href={ link } target="_blank" rel="noopener noreferrer">
                                <img src={ image } className="img-fluid project-image"
                                    alt={`Miniatura ${ name }`} />
                            </a>
                         :
                            <figure>
                                <a href={ link } target="_blank"
                                    rel="noopener noreferrer">
                                    <img src={ image }
                                        className="img-fluid project-image" alt={`Miniatura ${ name }`} />
                                </a>
                                <figcaption>
                                    <small>
                                        Imagen by <a href={ curso } target="_blank"
                                            rel="noopener noreferrer" className="see-more">Platzi</a>
                                    </small>
                                </figcaption>
                            </figure>
                         }

                    </div>
                    <div className="col-lg-7">
                        <div className="card-body">
                            <h5 className="card-title"><strong>{ name }</strong></h5>
                            <p className="card-text">
                                { description }
                            </p>
                            <p>
                                <a href={ link } target="_blank" className="see-more">
                                    Vista previa
                                </a>
                            </p>
                            <p className="card-text"><small className="text-muted">
                                { date }
                            </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;