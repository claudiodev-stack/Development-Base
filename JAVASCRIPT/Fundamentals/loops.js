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
/*LOOP While - Enquanto o contador for menor que 3 faça a operação dentro do escopo e 
por fim se não atingir o contador, esse contador vai receber um valor a mais até atingir o contador*/
while (contador < 3) {
    if (listaDestinos[contador] == destino) {
        console.log("Destino existe usando loop WHILE.");
        destinoExiste = true;
        break;
    }
    contador++;
}

/*LOOP FOR - Contador se inicia em 0 ou n valor, recebe recebe primeiro valor de verificação 
e enquanto esse valor for menor que o contador ele vai fazer novamente a operação recebendo um valor a mais
até atingir a operação*/
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