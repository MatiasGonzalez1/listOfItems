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

let itemList = document.querySelector('#items');

console.log(itemList.firstElementChild);

itemList.firstElementChild.style.fontSize = ('30px');

itemList.lastElementChild.style.color = ('blue');