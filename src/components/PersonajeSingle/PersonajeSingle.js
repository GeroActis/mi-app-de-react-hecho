// src/components/PersonajeSingle.js

import React from 'react';

const PersonajeSingle = ({ personaje }) => {
    if (!personaje) {
        return <p>Personaje no encontrado</p>;
    }

    return (
        <div>
            <h1>{personaje.nombre}</h1>
            <p>{personaje.descripcion}</p>
            <img src={personaje.imagen} alt={personaje.nombre} />
        </div>
    );
};

export default PersonajeSingle;
