import React, { Component } from 'react';

class RegistroEntidad extends Component {
    constructor() {
        super();
        this.state = {
            departamentos: [],
            municipios: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.fetchDepartments();
    }

    fetchDepartments() {
        fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json?$query=select distinct departamento')
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                this.setState({ departamentos: jsonData });
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }

    handleChange(e) {

        const dep = e.target.value;
        fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=' + dep)
            .then(response => response.json())
            .then((jsonData) => {

                this.setState({ municipios: jsonData });
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }
    render() {
        return (
            <div>
                <div className="jumbotron bg-warning text-dark">
                    <h1 className="display-3">Registro de entidades oficiales</h1>
                    <p className="lead">Para PageTour es indispensable tener aquí las entidades oficiales</p>
                    <hr className="my-4"></hr>
                    <p>Registrala y comienza a ayudar a los turistas</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Aprender más</a>
                </div>
                <div className="container">
                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Entidad</label>
                                <select id="list-dependencias" className="custom-select">
                                    <option selected>Seleccione una entidad oficial</option>
                                </select>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Nombre del encargado</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder="Nombre" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo electrónico</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="validationDefaultUsername" placeholder="Correo" aria-describedby="inputGroupPrepend2" required></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationDefault03">Departamento</label>
                                <select onChange={this.handleChange} id="list-departamento" className="custom-select">
                                    {
                                        this.state.departamentos.map(dep => {
                                            return (

                                                <option>{dep.departamento}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="validationDefault04">Ciudad</label>
                                <select id="list-ciudad" className="custom-select">
                                    {
                                        this.state.municipios.map(mun => {
                                            return (

                                                <option>{mun.municipio}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="validationDefault05">Teléfono</label>
                                <input type="text" className="form-control" id="validationDefault05" placeholder="Teléfono" required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                                <label className="form-check-label" for="invalidCheck2">
                                    Acepto los terminos y condiciones
                        </label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Registrar entidad</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistroEntidad;
