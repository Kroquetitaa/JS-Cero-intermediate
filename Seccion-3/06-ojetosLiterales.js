     personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark II', 'Mark III','Mark IV'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    ultimaPelicula: 'Infinity War',
};


// Mas detalles
personaje.edad = null;
delete personaje.edad;

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const values = Object.values( personaje );
console.log( propiedades, values);