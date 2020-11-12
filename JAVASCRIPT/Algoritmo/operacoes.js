console.log("1 - Operações Aritméticas");

const soma = 2 + 2;
const subtracao = 5 - 2;
const multiplicacao = 10 * 2;
const divisao = 20 / 2;
const resultado = (10 * 2) * 25;
console.log("Soma: " + soma + " Subtracao: " + subtracao + " Multiplicação: " + multiplicacao + " Divisao: " + divisao + " Resultado: " + resultado);

console.log("2 - Concatenando textos e números");
console.log("Ano: " + "2020");
console.log("Ano: " + 2020);

console.log("3 - Conversão de Tipos");
console.log(parseInt("2") + parseInt("2"));
console.log(parseFloat("10.5")/ parseFloat("2"));

console.log("4 - Operações possíveis e impossíveis");
console.log("10" / "2");// Por se tratar de uma operação aritmética o JavaScript converte o texto para número, por isso o cálculo funciona nesse caso
console.log("15" * "20");
console.log("30" - "20");
console.log("Texto"/ "Texto"); //Not a Numbera
console.log(6.5)
console.log(6,5)//A vírgula em Javascript funciona como um espaço no exemplo.
