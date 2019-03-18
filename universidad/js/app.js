// Eliminar de Local Storage
localStorage.clear();


// const menu = document.querySelectorAll('.menu a');

// console.log(menu);

// menu.forEach(list => {
//     console.log(list);
// });


// menu.forEach( function(list){
//     console.log('list', list);
// });


// agregar nuevo title

// const title = document.createElement('h2');
// title.id = 'encabezado';
// title.appendChild(document.createTextNode('Bienvenidos al curso!'));

// const oldTitle = document.getElementById('encabezado');

// const parentElement = oldTitle.parentNode;

// parentElement.replaceChild(title, oldTitle);

// console.log(parentElement);

const targetElement = document.querySelector('.agregar-carrito');

// targetElement.forEach(element => {
//     console.log('el', element);
// });

targetElement.addEventListener('click', function(e){
    e.preventDefault;
    console.log('targetElement', targetElement);
}) 

document.body.addEventListener('click', removeElement);

function removeElement(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')) {
        
        const elContainner = e.target.parentElement.parentElement;
        console.log(elContainner);
        elContainner.remove();
    } else {
        console.log('no');
    }
};

