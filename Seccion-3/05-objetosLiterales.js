let personaje = {
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

console.log('Nombre', personaje.nombre );
console.log('codeName', personaje.codeName );
console.log('vivo', personaje.vivo );
console.log('edad', personaje.edad );
console.log('Coordenadas', personaje.coords);

console.log('Numero de trajes', personaje.trajes.length - 1);

const x = 'vivo';
console.log('vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultimaPelicula'])