//Operadores Relacionais

//Nestes casos o Javascript se encarrega de converter os valores mesmos com os tipos diferentes e ele reconhece a igualdade e desigualdade
//Igualdade (==)
console.log(('01'),'1' == 1);
//Desigualdade (!=)
console.log(('02'),'3' != 3);

/*Neste caso somente é verdade se os operandos são estritamente iguais do mesmo tipo e de conteúdo correspondente.*/
//Identidade / igualdade estrita (===)
console.log(('03'),'1' === 1);
//Desigualdade estrita (!==)
console.log(('04'),'3' !== 3);

console.log(('05'), undefined == null);
console.log(('06'), undefined === null);

//Operadores Lógicos AND e OR

const produto = [5000, 6000, 7000, 8000];

/*Para saber um pouco mais sobre operadores lógicos é melhor entender um pouco sobre tabela verdade*/

//Operador lógico AND é utilizando por && 
if(produto[0] !== produto[1] && produto[1] !== produto[2]){
    console.log("Ok AND");
} 
//Operador lógico OR é utilizando por ||
else if (produto[0] == produto[1] || produto[2] == produto[3]){
    console.log("Ok OR");
}

//Operadores Ternários

/* Funciona da mesma forma de um if, porém um pouco diferente 
A primeira parte ele recebe a expressão, a segunda parte a partir da ? ele recebe o valor de true e após o : ele recebe o falso.*/
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";
console.log(resultado(7.1)); 
console.log(resultado(6.7)); 