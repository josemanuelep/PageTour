import React, { Component } from 'react';

class Precios extends Component {


    render() {
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Precios</h1>
                    <p className="lead">Accede a Pagetour y comienza a generar ganacias para tu lugar turistico</p>
                    <p className="lead">Los precios son bajos y el retronoo de tu inversion se vera rapidamene con el aumento de visitantes</p>
                </div>
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Free</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mes</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>2 fotos maximo</li>
                                    <li>Datos muy basicos de tu lugar</li>
                                    <li>Solo podran calificarlo, pero no comentarlo</li>
                                    <li>Ayuda de PageTour</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Irme de tour gratis</button>
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Pro</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$12.000 <small className="text-muted">/ mes</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Hasta 10 fotos</li>
                                    <li>Publicar hasta 5 sitios turisticos</li>
                                    <li>Comentarios y calificaciones</li>
                                    <li>Bonos redimibles</li>
                                    <li>Ayuda de PageTour</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-primary">Empezar mas comodo</button>
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Enterprise</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$18.000 <small className="text-muted">/ mes</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Hasta 15 fotos</li>
                                    <li>Publicar los sitios turisticos que desees</li>
                                    <li>Comentarios y calificaciones</li>
                                    <li>Bonos redimibles</li>
                                    <li>Recomendado como especial a los turistas</li>
                                    <li>Hace parte de toures</li>
                                    <li>Ayuda de PageTour</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-primary">Ir con todos los lujos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Precios;
