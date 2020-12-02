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
