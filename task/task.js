let empty = null;

document.getElementById('card-board').innerHTML = empty;
console.log(empty);
console.log(document.getElementById('card-board').innerHTML);
document.getElementById('card-board').innerHTML = localStorage.getItem('data-set');

console.log(null+1)
console.log(undefined+1)
