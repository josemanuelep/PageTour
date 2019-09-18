import React, { Component } from 'react';

class PerfilUsuario extends Component {



    render() {
        return (
            <div>
                <div className="jumbotron bg-primary text-light font-weight-bolder">
                    <h1 className="display-4">¡Bienvenido de nuevo!</h1>
                    <p className="lead">Pagetour quiere conectarte con los mejores
                        lugares.</p>
                    <hr className="my-4"></hr>
                    <p>Recuerda ir en busca de los bonos redimibles, es una manera
                        de
                        hacer turismo responsable</p>
                </div>
            <div className="container">
                <form className="text-primary">
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label for="validationDefault03">Nombre</label>
                            <input type="text" className="form-control"
                                id="validationDefault02" placeholder="Nombre"
                                required></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="validationDefault02">Apellidos</label>
                            <input type="text" className="form-control"
                                id="validationDefault02" placeholder="Apellidos"
                                required></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="validationDefaultUsername">Correo
                                electrónico</label>
                            <input type="email" className="form-control"
                                id="validationDefault02" placeholder="Correo"
                                required></input>
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
                            <input type="number" className="form-control"
                                id="validationDefault02" placeholder="Número de
                                documento"
                                required></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="validationDefault05">Teléfono</label>
                            <input type="number" className="form-control"
                                id="validationDefault05" placeholder="Teléfono"
                                required></input>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="validationDefault05">Confirmar
                                contraseña</label>
                            <input type="password" className="form-control"
                                id="validationDefault05" placeholder="******"
                                required></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                id="invalidCheck2" required></input>
                            <label className="form-check-label" for="invalidCheck2">
                                Acepto los términos y condiciones
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Actualizar
                        Perfil</button>
            </form>
            </div>
            </div>
        );
    }
}

export default PerfilUsuario;
