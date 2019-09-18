import React, { Component } from 'react';
import { render } from 'react-dom';
import CardTopLugares from './components/CardTopLugares';
import RegistroTurista from './components/RegistroTurista'
import RegistroEntidad from './components/RegistroEntidad'
import Precios from './components/Precios';
import RutasExtremas from './components/RutasExtremas';
import AmpliacionLugar from './components/AmpliacionLugar';
import FormularioQuejas from './components/FormularioQuejas';
import Principal from './components/Principal';
import PerfilUsuario from './components/PerfilUsuario';



render(<PerfilUsuario />, document.getElementById('app'));