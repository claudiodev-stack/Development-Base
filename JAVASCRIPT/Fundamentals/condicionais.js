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
//Se a idade for maior ou igual a 18 e tiver estaAcompanhada, faça a operação dentro do escopo. 
if (idadeComprador >= 18 && estaAcompanhada) {
    console.log("Boa viagem!");
    listaDestinos.splice(2, 1); //método splice remove o elemento da lista na posição do array e a quantidade de elementos a partir da posição inicial definida.
}  else {
    console.log("Não é maior de idade não foi realizada a venda.");
}

console.log("Destinos possíveis: ", listaDestinos);

//Swith Case
/*Vai veririficar se algumas das passagens são de valor 15, caso alguma seja ele vai imprimir o valor dela*/

var passagem = 15
switch(passagem){

    case 10:
        console.log("Bahia");
        break;
    case 5:
        console.log("Rio de Janeiro");    
        break;
    case 15:    
        console.log("São Paulo");
        break;
    default:
        console.log("Valor de passagem do destino não localizada.")    
}
