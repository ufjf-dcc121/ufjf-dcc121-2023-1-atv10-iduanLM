const store = {estado: [0,1,2,3] };


export function adicionar(valor {
    store.estado.push(valor);
}

export function remover() {
    store.estado.pop();
    
}

export function getitems() {
    return [...store.estado];
}