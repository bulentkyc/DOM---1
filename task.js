

function compGen(title,exp) {
let card = `
<div id="card1" class="card">
<h3>${title}</h3>
<img src="https://picsum.photos/200">
<p>
    ${exp}
</p>
</div>
`;

return card;

}
//Test

function reader() {
    let title = document.getElementById('title').value;
    
    let exp = document.getElementById('exp').value;

    

    document.getElementById('card-board').innerHTML += compGen(title, exp);
    
}


