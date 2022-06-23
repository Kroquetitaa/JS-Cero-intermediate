

function saludar( nombre ){
    console.log( arguments );
    console.log('Hola ', nombre);
}

const saludar2 = function( nombre ) {
    console.log('Hola mundo', nombre)
}

saludar('Fernando');
saludar2();