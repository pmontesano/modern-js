//let nombre = prompt('cual es tu nombre?');

// document.getElementById('app').innerHTML = `Hola ${nombre} bienvenido al curso!`;

// const ciudades = ['Londres', 'Barcelona', 'Madrid', 'Amsterdam']

// console.log(ciudades);

// const datos = new Map();

// datos.set('nombre', 'pablo');


// console.log(datos);


// for (let entradas of ciudades.entries()) {
//     console.log(entradas);
// }


const targetElement = document.querySelector('.agregar-carrito');

targetElement.addEventListener('click', function(e){
    e.preventDefault();
    console.log('targetElement', targetElement);

});
