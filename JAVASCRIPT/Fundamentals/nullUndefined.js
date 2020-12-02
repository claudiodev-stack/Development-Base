//Variável por tipo de REFERÊNCIA
const a = {nome: 'Notebook'}
console.log(a);

const b = a 
b.nome = "Computador"
/*Após atribuir o valor computador, a passa a obter o mesmo nome de b, porque B aponta para a mesma referência de memória que A
sendo assim A recebe o valor de B por ser da mesma referencia de memória*/
console.log(a);
console.log(b);

// Variável por tipo de VALOR
const c = 3;
console.log(c);
var d = c;
d++;
/*Mesmo após atribuir o valor a D, C continuou com o mesmo valor inicial, porque nesse caso a mudança foi feita no VALOR  
e não na referência de memória*/
console.log(c)
console.log(d)

//Undefined = valor primitivo utilizado quando uma variável não teve valor atribuído
let valor // não inicializada
console.log(valor); // Quando a variável não é inicializada ela retorna undefined
//console.log(valor.toString()); //Cannot read property 'toString' of undefined nenhum método funciona em uma variável undefined

//Null = valor primitivo que representa a ausência intencional de um valor de objeto
let valor2 = {name:'Joao', preco:null }; 
console.log(valor2);


