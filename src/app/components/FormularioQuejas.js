import React, { Component } from 'react';

class FormularioQuejas extends Component {



    render() {
        return (
            <div>
                <div className="container">

                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Nombre</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder="Nombre" required></input>
                            </div>
                            <div classNameName="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo electronico</label>
                                <input type="email" className="form-control" id="validationDefault02" placeholder="Correo" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Mensaje</label>
                                <textarea className="form-control" id="mensaje" placeholder="Deje aqui su mensaje" required></textarea>
                            </div>
                            <div className="col-md-4 mb-3">
                                <input type="submit" className="btn btn-primary" value="Enviar queja"></input>
                            </div>

                        </div>
                        </form>
                    </div>
                </div >
                );
            }
        }
        
        export default FormularioQuejas;
