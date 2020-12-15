//Função é o pai do javascript o Objeto e até a Classe em javascript são funções
console.log(typeof Object);
class Produto {}
console.log(typeof Produto);

//Função sem retorno
function imprimirSoma (a, b){ //função + nome da função + parametro + bloco
    console.log(a + b);
}
imprimirSoma(2, 3); //Imprime a soma
imprimirSoma(2); // NaN, porque ele retorna o segundo valor como undefined 
imprimirSoma(); //NaN, os dois valores entram como undefined
imprimirSoma(2,15,6,7,2,1,4,4,7,9); //Funciona! O javascript executa os dois primeiros valores e ignora o resto, loucura!


//Função com retorno
function imprimirNovaSoma(a, b = 0){ //função + nome da função + parametro + bloco + return
    return a + b; 
}
console.log(imprimirNovaSoma(2,3));//Imprime a soma
console.log(imprimirNovaSoma(2));//Funciona, pois na função eu atribui um valor a B
console.log(imprimirNovaSoma()); // NaN
console.log(imprimirNovaSoma(2,23,5,6,7,8,9,10));//Funciona da mesma forma


//Função dentro de uma Variável
const multiplicar =  function imprimirMultiplicacao (a, b) { //declarar a variável e passar a função dentro
    console.log(a * b);
}
multiplicar(12,3);

//Função utilizando Arrow Function
const subtrair = (a, b) => {//é removida a palavra "function" e só passado os parametros direto e depois o bloco com o return
    return a - b;
}
console.log(subtrair(105,10))

//Função utilizando Arrow Function ainda mais reduzida 
const dividr = (a, b) => a/ b ; //Somente os parametros e depois o critério
console.log(dividr(100,10));

