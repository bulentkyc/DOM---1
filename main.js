/* alert('Hello World :)');
window.alert('Test');
console.log(window);
console.log(document);
 */

let userName = prompt('What is your name?');

/*
pContent = document.getElementById('welcoming').innerHTML += 
`<h2> ${userName}</h2>`; 
 */

 //Update - Create
document.getElementById('welcoming').innerHTML += 
`<h2> ${userName}</h2>`;

//Read
let pContent = document.getElementById('welcoming').innerHTML;
alert(pContent);

const welcoming = document.getElementById('welcoming');
console.log(welcoming);

//welcoming.innerHTML = 'Yeyyyy!';

console.log(document.getElementById('welcoming'));


const cardBoard = document.getElementById('card-board');

let count = parseInt(prompt('How many cards do you need?'));

for (let i = 0; i < count; i++) {
    let card = `
    <div id="card${i}" class="card">
    <h3>${title}</h3>
    <img src="https://picsum.photos/200/200?random=${i}">
    <p>
        ${exp}
    </p>
    </div>
    `;
    cardBoard.innerHTML += card;
}


function reader() {
    let title = document.getElementById('title').value;
    alert(title);
    let exp = document.getElementById('exp').value;
    alert(exp);
}

//reader();