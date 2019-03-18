// ui elements
const cart = document.getElementById('carrito');
const coursesList = document.getElementById('lista-cursos');
const cartList = document.querySelector('#lista-carrito tbody');
const cartButtonDelete = document.getElementById('vaciar-carrito');

// events listeners
addEventListeners();

function addEventListeners() {

    // agregar al carrito
    coursesList.addEventListener('click', addToCart);

    // borrar del carrito
    cart.addEventListener('click', deleteItemCart);    

    // vaciar carrito
    cartButtonDelete.addEventListener('click', deleteAllCart);

    // leer cursos del localstorage al cargar la página
    document.addEventListener('DOMContentLoaded', printLocalStorage);    
}

// Funciones
// Función que añade el curso al carrito
function addToCart(e) {
    e.preventDefault();
    if( e.target.classList.contains('agregar-carrito')) {        
        const course = e.target.parentElement.parentElement;
        readCourse(course);
    }
}


function readCourse(course) {    
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        autor: course.querySelector('p').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    insertCourse(courseInfo);
}

// Muestra los coursos que voy agregando al carrito
function insertCourse(course) {
    const row = document.createElement('tr');
    row.innerHTML = `
         <td>  
              <img src="${course.image}" width=100>
         </td>
         <td>${course.title}</td>
         <td>${course.price}</td>
         <td>
              <a href="#" class="delete-course" data-id="${course.id}">X</a>
         </td>
    `;
    cartList.appendChild(row);
    courseLocalStorage(course);
}

// elimina el curso que esta en el carrito
function deleteItemCart(e) {
    e.preventDefault();
    
    let course,
        courseId;
            
    if (e.target.classList.contains('delete-course')) {
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('.delete-course').getAttribute('data-id');
    }

    removeLocalStorageItem(courseId);
}

// función que vacía el carrito

function deleteAllCart() {
    //cartList.innerHTML = '';

    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    removeLocalStorage();

    return false;
}

// guarda el curso en el local storage
function courseLocalStorage(course) {

    let courses;

    // Toma el valor de un arreglo con datos de LS o vacio
    courses = getCourseLocalStorage();

    // el curso seleccionado se agrega al arreglo
    courses.push(course);

    localStorage.setItem('courses', JSON.stringify(courses));

}

// Obtiene los datos del curso
function getCourseLocalStorage() {

    let coursesLs;
    
    if( localStorage.getItem('courses') === null) {
        coursesLs = [];
    } else {
        coursesLs = JSON.parse(localStorage.getItem('courses'));
    }

    return coursesLs;
}

// imprimir lo guardado en el local storage cuando se refresca la página
function printLocalStorage() {

    let coursesLs;

    coursesLs = getCourseLocalStorage();

    coursesLs.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>  
                <img src="${course.image}" width=100>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="delete-course" data-id="${course.id}">X</a>
            </td>
        `;
        cartList.appendChild(row);
    });

}

// vaciar el local storage
function removeLocalStorage() {
    localStorage.removeItem('courses');
}

// vaciar el local storage por item

function removeLocalStorageItem(courseId) {

    let coursesLs;
    // Obtenemos el arreglo de cursos
    coursesLs = getCourseLocalStorage();
    
    coursesLs.forEach(function(course, index) {

        if(course.id === courseId) {
            coursesLs.splice(index, 1);
        }
    });

    // Añadimos el arreglo actual a storage
    localStorage.setItem('courses', JSON.stringify(coursesLs));
}