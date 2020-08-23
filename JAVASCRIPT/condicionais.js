console.log("Trabalhando com Condicionais");

const listaDestinos = new Array(
    `Bahia`,
    `Rio de Janeiro`,
    `São Paulo`
);
console.log("Destinos possíveis: ", listaDestinos);
const idadeComprador = 21;
const estaAcompanhada = true;

//Condicional simples 
if (idadeComprador >= 18) {
    console.log("Comprador maior de idade!");
    listaDestinos.splice(2, 1); // comando splice remove o elemento da lista na posição do array e a quantidade de elementos a partir da posição inicial definida.
//Condicional encadeada 
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado!");
    listaDestinos.splice(2, 1); // comando splice remove o elemento da lista na posição do array e a quantidade de elementos a partir da posição inicial definida.        
} else {
    console.log("Não é maior de idade não foi realizada a venda.");
}

console.log("Destinos possíveis: ", listaDestinos);
