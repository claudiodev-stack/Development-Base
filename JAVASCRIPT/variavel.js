/*
    Regras de declarações de variáveis 
    Não podem ser iniciadas com números, apenas com letras ou "_"
    Não podem ser utilizadas caracteres especiais como "ç", "^","~"
    Não podem ser iguais as palavras reservadas da linguagem
    O javascript é uma linguagem case sensitive (maíuscula e minuscula) exemplo: var texto e var TEXTO são diferentes 
*/
console.log("1 - Variáveis")
//Variável String
const texto = 'Valores do tipo textos'
console.log(texto)
//Variável Number (Int/Float)
const numero = 7;
console.log(numero)
//Variável boolean 
const resultado = true;
console.log(resultado)

console.log("2 - Atribuição de variável")
let nome = "Claudio";
const sobrenome = "Henrique";
console.log(nome + " " + sobrenome); //Concatenando o espaço pelo operador 
console.log(nome, sobrenome); //Atribuindo o espaço utilizando a vírgula 
console.log(`${nome} ${sobrenome}`);//Interpolação de variáveis utilizando aspas `` e chamando a variável dentro de ${}

nome = nome + sobrenome; // Reescrevendo a variável reservada por let
console.log(nome);