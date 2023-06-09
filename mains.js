import { adicionar,getitems } from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);
form.remover.addEventListener('click',remove);

atualiza();

function remove(){
    console.log('Remove clickado!');
    remove();
    atualiza();
}

function envia(evento){
    evento.preventDefault();
    console.log('Formulário Enviado!');
    const n = form.valor.value;
    adicionar(n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const intems = getitems();
    for(let i = 0; i < items.length; i++){
        const li = document.createElement('li');
        li.textContent = items()[i];
        ol.appendChild(li);
    }
items().push("boom!");
}