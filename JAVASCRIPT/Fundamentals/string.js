const escola = "Coders5"
const apelido = "Brasil"

//Retorna o índice ou seja a posição daquela string
console.log(escola.indexOf("C"));

//Retorna somente o índice [0] dentro da palavra Coders5
console.log(escola.charAt(0));

//Unicode relacionado ao índice 3 na tabela ASCII
console.log(escola.charCodeAt(3));

//Parte do índice inicial até o índice final, ou pode somente ir do índice inicial e pegar o restante a direita
console.log(escola.substring(1));
console.log(escola.substring(2, 5));

//Concatenar as strings
console.log("Escola ".concat(escola).concat('!'));

//Substituir o índice 5 por um novo valor
console.log(escola.replace(5, '!'));

//Remove as "vírgulas" e no outro remove o "a"
console.log('Ana,Maria,Joao'.split(','));
console.log('Ana,Maria,Joao'.split('a'));

//Converte em maíusculo e minusculo 
console.log(escola.toUpperCase());
console.log(escola.toLowerCase());

//Interpolação de strings utilizando templates strings com aspas `` e chamando a variável dentro de ${}
console.log(`${escola} ${apelido}`);
