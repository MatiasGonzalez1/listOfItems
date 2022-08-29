// console.dir(document);
// document.title = 'Para cambiar el titulo';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[0].textContent = 'Prueba';

// var header = document.querySelector('#main-header');
// header.style.border = 'solid 5px #000000';

// let impar = document.querySelectorAll('li:nth-child(odd)');
// let par = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0;  i < impar.length; i++){
//     impar[i].style.backgroundColor = '#ccc';
//     par[i].style.backgroundColor = '#f5f4';

// }

// let itemList = document.querySelector('#items');

// console.log(itemList.firstElementChild);

// itemList.firstElementChild.style.fontSize = ('30px');

// itemList.lastElementChild.style.color = ('blue');

//Agregar elementos a la lista

let form = document.getElementById('formAgregar');
let lista = document.getElementById('items');

form.addEventListener('submit', agregarItem);

function agregarItem(e){
    e.preventDefault();
    let nuevoItem = document.getElementById('item').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(nuevoItem));

    let boton = document.createElement('button');
    boton.className = 'btn btn-danger btn-sm float-right';
    boton.appendChild(document.createTextNode('x'));

    li.appendChild(boton);

    lista.appendChild(li);
}