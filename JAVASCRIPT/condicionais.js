console.log("Trabalhando com Condicionais e Operadores Lógicos");

const listaDestinos = new Array(
    `Bahia`,
    `Rio de Janeiro`,
    `São Paulo`
);
console.log("Destinos possíveis: ", listaDestinos);
const idadeComprador = 21;
const estaAcompanhada = true;

//Condicional simples e operador lógico && 
if (idadeComprador >= 18 && estaAcompanhada) {
    console.log("Boa viagem!");
    listaDestinos.splice(2, 1); // comando splice remove o elemento da lista na posição do array e a quantidade de elementos a partir da posição inicial definida.
}  else {
    console.log("Não é maior de idade não foi realizada a venda.");
}

console.log("Destinos possíveis: ", listaDestinos);
