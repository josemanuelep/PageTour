import React, { Component } from 'react';

class Principal extends Component {



    render() {
        return (
            <div>
                <div className="jumbotron bg-warning text-danger">
                    <img src="img/Logo.png" className="rounded float-right pl-5" alt="..."></img>
                    <h1 className="display-3">Registrate como turista y comienza a conocer los
                        lugares mas bonitos de Colombia</h1>
                    <p className="lead">Si eres dueño de un lugar, atraccion o pasaje turistico
                        registratra el lugar para que empeicen a visitarlos. Te
                            invitamos a ver nuestros planes.</p>
                    <p>Registrala y comienza a ayudar a los turistas</p>
                    <hr className="my-4"></hr>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="correo o usuario"></input>
                            </div>
                            <div className="col">
                                <input type="password" className="form-control" placeholder="contraseña"></input>
                            </div>
                            <div className="col"><button type="submit" className="btn btn-primary">Irmede tour</button></div>
                        </div>
                    </form>
                    <p className="text-right mt-5">Page Tour recolecta tu comportamieto y tus utlimos </p>
                    <p className="text-right">lugares visitados para entregartes posibles destinos que vas a
        disfrutar al máximo.</p>
                </div>
                <div className="container bg-danger p-5">
                    <h2 className="text-center text-white mb-5 font-weight-bold">Top lugares</h2>
                    <div className="card-deck">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"></hr>
                    <nav aria-label="Page navigation example mt-5">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="container bg-danger p-5">
                    <h2 className="text-center text-white mb-5 font-weight-bold">Top toures</h2>
                    <div className="card-deck">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"></hr>
                    <nav aria-label="Page navigation example mt-5">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div >
        );
    }
}

export default Principal;
