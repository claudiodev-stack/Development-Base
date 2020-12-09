//novo recurdo ES2015

//DESTRUCTURING DE UM OBJETO
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

/*Destructuring é o novo recurso do ES2015, ele facilita o acesso a dados dentro de um array ou objeto e a criação de variáveis que contenham esses dados.
Ao invés de imprimir os dados do objeto utilizando por exemplo pessoa.nome, pessoa.idade agora é possível utilizando o modelo abaixo de exemplos, ajuda a encurtar os códigos*/
const { nome, idade } = pessoa;
console.log(nome, idade);

//É possível atribuir novas variáveis aos atributos dos objetos
const { nome: no, idade: id } = pessoa;
console.log(no, id);

//Caso tente imprimir um atributo que não exista no objeto vai retornar undefined
const { cpf, sobrenome } = pessoa;
console.log(cpf, sobrenome);

//No exemplo abaixo é atribuido o valores aos dois atribudos criados para pessoa
const { bemHumorado = "Sim", malHumorado = "Não" } = pessoa;
console.log(bemHumorado, malHumorado);

//Imprimindo um exemplo com um objeto dentro de outro objeto utilizando o destructuring 
const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);

//const {nome, idade, endereco :{logradouro, numero}} = pessoa;
//console.log(nome, idade, logradouro, numero);


//DESTRUCTURING DE UM ARRAY

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [a, b, c, d, e, f, g, h, i, j, l = 200] = arr;
console.log(a, b, c, d, e, f, g, h, i, j, l);


//DESTRUCTURING DE UMA FUNÇÃO

//Usando destructuring utilizando um objeto
function randObj({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
const obj = { max: 500, min: 400 };
console.log(randObj(obj));
console.log(randObj(randObj({ min: 900 })));
console.log(randObj({}));

//Usando destructuring utilizando um array
function randArr([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
console.log(randArr([100, 50]));
console.log(randArr([992]));
console.log(randArr([]));
