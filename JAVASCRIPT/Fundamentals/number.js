//Não vai funcionar, pois ele não entende vírgula como not a number
console.log("10,5" / 2);

//Essa operação em javascript funciona, porque ele entende que o que parece ser uma String é um número.
console.log("10"/ 2);

//Número também pode ser apresentado pela função Number
var peso2 = Number("6");
var peso = 3.5;
console.log(peso, peso2);
/* outros exemplos do w3school
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
*/

const raio = 5.6;
//O objeto Math é utilizando para ajudar com operações matemáticas, como por exemplo o cálculo de uma área.
const area = Math.PI * Math.pow(raio, 2);
console.log(area);
