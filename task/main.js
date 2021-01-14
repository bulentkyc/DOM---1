let i=localStorage.getItem('counter');
let items = localStorage.getItem('data-set');

if (items == null) {
    items = '';
}

//sessionStorage

function compGen(title,exp) {
let card = `
<div id="card${i}" class="card">
<h3>${title}</h3>
<img src="https://picsum.photos/200/200?random=${i}">
<p>
    ${exp}
</p>
</div>
`;

return card;

}
//Test
function compiler() {

    i++;
    localStorage.setItem('counter', i);

    let title = document.getElementById('title').value;
    document.getElementById('title').value = '';
    
    let exp = document.getElementById('exp').value;
    document.getElementById('exp').value = '';

    items += compGen(title, exp);
    
    localStorage.setItem('data-set', items);
}


