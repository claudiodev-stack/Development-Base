//VAR

/* O Var só trabalha com 1 escopo que é o de "Função", fora do escopo de função ele considera todo os outros escopos como "Global".*/
{ { { { var global = 10; } } } }

function blocoFuncao() { //Variável de função só vai ser impressa dentro da função, caso contrário se tentar imprimir fora vai dizer que não foi definida 
    var bloco = 20;
    console.log(bloco);
}

blocoFuncao();
console.log(global); //Mesmo que defina diversos escopos {{{}}} ela vai entender como var sendo global.
//console.log(bloco); Error

var numero = 30
{
    var numero = 40
    console.log('Dentro =', numero);
}
console.log('Fora =', numero);


//LET 

/* O Let já entende os escopos definidos {{{}}}, ele respeita o seu bloco*/
var numero = 30
{
    let numero = 40
    console.log('Dentro =', numero);
}
console.log('Fora =', numero);

//CONST funciona quase da mesma forma que o LET porem não pode ser reasignada ou modificada e o LET pode.
//É obrigatório inicializar o const com algum valor, diferente do let que retornia undefined.
const valor = 15;
//valor = 25 ERROR
console.log(valor)


//HOISTING - Importante

/* Em JavaScript diferente de outras linguagens, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. 
Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.*/

void function(){ 
    console.log(mensagem); 
}();
var mensagem;

let b;
console.log(b);
b = 20;
console.log(b);

