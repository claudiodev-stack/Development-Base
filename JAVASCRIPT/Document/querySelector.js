
/*Chamada ao DOM querySelector vai pegar o elemento da página ex:<h1>, a primeira opção funciona, mas não é uma BOA PRÁTICA pegar direto pelo elemento HTML,
pois outro desenvolvedor pode mudar a tag <h1> por <h2> com isso o javascript retornará null, o ideal é sempre direcionar pela classe, id ou seletor definido para o elemento.
Ps: é necessário passar a referência se é id(#), classe(.), etc.
*/
//const titulo =  document.querySelector("h1"); X
const titulo =  document.querySelector(".titulo");
console.log(titulo)

//textContent vai exibir no console do navegador somente a nomenclatura de h1 não vai exibir as tags, etc.
console.log(titulo.textContent);

//Atribuindo um novo valor a variável h1 e renomeando
const novotitulo = titulo.textContent = "Novo Curso JavaScript";
console.log(novotitulo)

