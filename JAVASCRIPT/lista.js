console.log("Trabalhando com listas");

// new Array recebe "n" números de elementos para compor uma lista.
const listaDestinos = new Array(
    `Bahia`,
    `Rio de Janeiro`,
    `São Paulo`
);
console.log("Destinos possíveis: " , listaDestinos);
console.log(listaDestinos[1]); //Imprimir somente a posição 'n' da lista

listaDestinos.push(`Curitiba`, `Minas Gerais`); //comando push adicionando um elemento a lista.
console.log("Destinos possíveis: " , listaDestinos);

listaDestinos.splice(2,1); // comando splice remove o elemento da lista na posição do array e a quantidade de elementos a partir da posição inicial definida.
console.log("Destinos possíveis: " , listaDestinos);
