const turista = {
    "nombres": "Jose Manuel",
    "apellidos": "Echeverri",
    "correo": "palacio.90@hotmail.com",
    "contrasenna": "12152315",
    "tipo_doc": "Cedula de ciudadania",
    "numero_doc": 1022036395,
    "telefono": 32254437771,
    "foto_perfil": "server/img_user123.jpg",
    "ubicacion": {
        "departamento": "Antioquia",
        "municipio": "Medellin"
    },
    "lugares_visitados": [11212, 12455],
    "lugares_interes": [132441, 54515],
};

const entidadOficial = {
    "nombre": "Policia Municipal",
    "telefono": 55555,
    "correo": "policia@hotmail.com",
    "ubicacion": {
        "departamento": "Antioquia",
        "municipio": "Medellin",
        "vereda": "",
        "corregimiento": ""
    },
    "encargado": {
        "cargo": 'Cabo',
        "nombres": "Jesus Maria",
        "apellidos": "Munera",
        "telefono": 55555
    }
};

const lugarTuristico = {
    "nombre": "Los chorritos",
    "tipo_lugar": "Paisaje natural",
    "descipcion": "Agua y cascada",
    "correo": "loschorritos.com",
    "telefono": 555,
    "costo": 20000,
    "actividades": ['Nadar', 'Correr', 'Salto base', 'Bicicleta'],
    "bonos_disponibles": {
        "Recoger_basuras": 5000,
        "Compras_artesanales": 5000,
        "Siembra_arbol": 8000,
        "ir_bicicleta": 5000
    },
    "ubicacion": {
        "departamento": "Antioquia",
        "municipio": "Abejorral",
        "vereda": "La loma",
        "corregimiento": "",
    }, "horario": {
        "lunes": ['apertura', 'cierre'],
        "martes": ['apertura', 'cierre'],
        "miercoles": ['apertura', 'cierre'],
        "jueves": ['apertura', 'cierre'],
        "viernes": ['apertura', 'cierre'],
        "sabado": ['apertura', 'cierre'],
        "domingo": ['apertura', 'cierre'],
        "festivo": ['apertura', 'cierre']
    },
    "comodidades": {
        "hoteles": ['Chupamestepenco', 'Nutibara', 'Las Abejas'],
        "restaurantes": ['El buen sabor', 'Chiguiro Master'],
        "parqueadero": {
            "hayParqueaderos": true,
            "costo": 5000
        }
    },
    "calificacion": {
        numero_calificaciones: 2,
        promedio: 4
    },
    "imagenes": ['server/img1.png', 'server/img1.png'],
    "comentarios": [
        { "id_usuario": 1233, "mensaje": "Test1", "fecha": "" },
        { "id_usuario": 5523, "mensaje": "test2", "fecha": "" }
    ]

};

const expriencia_extrema = {
    "nombre": "Salto base",
    "ubicacion": {
        "departamento": "Antioquia",
        "municipio": "Medellin",
        "vereda": "La esperanza",
        "corregimiento": "No aplica"
    },

    "nivel_dificultad": "Baja",
    "costo": 10000,
    "encargado": {
        "nombres": "Santiago",
        "apellidos": "Quintero ",
        "telefono": 5555
    },
    "imagenes": ['server/img1.png', 'server/img1.png']
};

const queja_reclamo = {

    "id_usuario": 123,
    "mensaje": "Mal servicio",
    "fecha": new dDate()

};