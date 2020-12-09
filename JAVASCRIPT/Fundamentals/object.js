//Um objeto é uma coleção de chaves e valores sendo que os valores obtem atributos e a definição de valor desses atribuitos
console.log(typeof Object);
console.log(typeof new Object);
//Pode ser feito de forma somente abrindo e fechando o objeto e passando os valores na chamada do objeto 
const object1 = {}
object1.nome = 'Notebook'
object1.preco = 3500.00
object1.local = 'Rio de Janeiro'
console.log(object1);

//Essa é a forma mais comum de se criar um objeto já definindo os seus atributos e os valores.
const object2 = {
    nome: 'Notebook',
    preco: 3500.00,
    local: 'Rio de Janeiro'
}
console.log(object2);

