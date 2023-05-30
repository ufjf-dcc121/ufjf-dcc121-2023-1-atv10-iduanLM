import {estado} from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);

atualiza();

function envia(evento){
    evento.preventDefault();
    console.log('Formulário Enviado!');
    sotore.estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = <li>${store.estado}</li>;
}