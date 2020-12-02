console.log("Trabalhando com arrays");

//Array é um conjunto ou um globo que recebe diversos elementos e cada elemento vai tendo sua posição ou índice.
// Pode ser utilizado chamando a função Array
const listaDestinos = new Array(
    `Bahia`,
    `Rio de Janeiro`,
    `São Paulo`
);

console.log("Destinos possíveis: " , listaDestinos); //Imprimindo todos o array
console.log(listaDestinos[1]); //Imprimir somente a posição '1' do array

listaDestinos.push(`Curitiba`, `Minas Gerais`); //método push adiciona um elemento ao array.
console.log("Utilizando o Push: " , listaDestinos);

listaDestinos.splice(2,1); //método splice remove o elemento do array no índice indicado [2] e a quantidade de elementos que quer remover a partir da posição inicial definida.
console.log("Utilizando o Slice: " , listaDestinos);

listaDestinos.pop()//método pop remove o ultimo valor do array
console.log('Utilizando o Pop:', listaDestinos);

//Pode ser utilizado abrindo somente colchetes.
const arrayNumeros = [10,20,30,40,50,60,70,80,90,100,110];
console.log("Números disponíveis: " , arrayNumeros);
