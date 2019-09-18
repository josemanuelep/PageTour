import React, { Component } from 'react';

class RegistroTuristas extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            tipo_lugar: '',
            _id: '',
            descipcion: '',
            bonos_disponibles: []
        };

    }

    render() {
        return (
            <div>
                <div className="jumbotron bg-danger text-light">
                    <h1 className="display-3">Registro de turistas</h1>
                    <p className="lead">Para PageTour es indispensable tener aquí los turistas</p>
                    <hr className="my-4"></hr>
                    <p>Registrala y comienza a ayudar al turismo</p>
                    <a className="btn btn-warning btn-lg" href="#" role="button">Aprender maás</a>
                </div>
                <div className="container">
                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Nombre</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder="Nombre" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Apellidos</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder="Apellidos" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo electronico</label>
                                <input type="email" className="form-control" id="validationDefault02" placeholder="Correo" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Tipo de documento</label>
                                <select className="custom-select">
                                    <option selected></option>
                                </select>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Número de documento</label>
                                <input type="number" className="form-control" id="validationDefault02" placeholder="Número de documento" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault05">Teléfono</label>
                                <input type="number" className="form-control" id="validationDefault05" placeholder="Teléfono" required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="invalidCheck2" required></input>
                                <label className="form-check-label" for="invalidCheck2">
                                    Acepto los términos y condiciones
                        </label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Registrarse</button>
                    </form>
                </div>
            </div >
        );
    }
}

export default RegistroTuristas;
