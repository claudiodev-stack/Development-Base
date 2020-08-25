console.log("Trabalhando com Loops");

const listaDestinos = new Array(
    `Bahia`,
    `Rio de Janeiro`,
    `São Paulo`
);
console.log("\nDestinos possíveis: ", listaDestinos);
const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;  
while (contador < 3) {
    if (listaDestinos[contador] == destino) {
        console.log("Destino existe usando loop WHILE.");
        destinoExiste = true;
        break;
    }
    contador++;
}

for(let cont = 0; cont < 3; cont++){
    if (listaDestinos[contador] == destino) {
        console.log("Destino existe usando loop FOR.");
        destinoExiste = true;
        break;
    }
}

console.log("Destine existe: ", destinoExiste);
if(podeComprar &&  destinoExiste){
    console.log("Boa viagem.");
} else {
    console.log("Desculpe tivemos um erro.");
}