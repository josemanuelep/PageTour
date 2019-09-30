import React, { Component } from 'react';

class AmpliacionLugar extends Component {

    constructor() {
        super();
        this.state = {
            departamentos: [],
            municipios: []
        };

    }

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Presentación</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Legada</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Imagenes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Nombre</h5>
                        <p className="card-text">Breve descripcion</p>
                        <div className="card mb-3">
                            <img src="img/Logo.png" className="rounded mx-auto d-block" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Tipo de lugar</h5>
                                <div className="card mx-auto">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Correo</li>
                                        <li className="list-group-item">Telefono</li>
                                        <li className="list-group-item">Ciudad</li>
                                        <li className="list-group-item">Departamento</li>
                                        <li className="list-group-item">Valor</li>
                                        <div className="card-header"> Tiene restaurante</div>
                                    </ul>
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary">Comentar</a>
                        <a href="#" className="btn btn-warning">Calificar</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default AmpliacionLugar;
