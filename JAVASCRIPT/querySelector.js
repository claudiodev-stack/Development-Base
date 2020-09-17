
/*Chamada ao DOM querySelector vai pegar o elemento de <h1>, a primeira opção funciona, mas não é uma boa prática pegar direto pelo elemento HTML,
pois outro dev pode mudar a tag <h1> por <h2> com isso o javascript retornará null, o ideal é sempre direcionar pela classe, id ou seletor definido para o elemento.
*/
//const titulo =  document.querySelector("h1"); X
const titulo =  document.querySelector(".titulo");
console.log(titulo)

//textContent vai exibir somente a nomenclatura de h1 não vai exibir as tags, etc.
console.log(titulo.textContent);

//Atribuindo um novo valor a variável h1 e renomeando
const novotitulo = titulo.textContent = "Novo Curso JavaScript";
console.log(novotitulo)

