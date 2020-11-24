const arr = [
    {
        nome:"notebook",
        preco:2100,
        quantidade:1
    },
    {
        nome:"carro",
        preco:65000,
        quantidade:2
    }];

const map = arr.map(function(item, indice, array){
    return [item, indice, array];
})

const mapCallback = arr.map(item => item);

const mapModificando = arr.map(item => item.preco * 15);

const mapSoma = arr.map(function(a, b){
    return a.preco + b.preco;
})

console.log(map);
console.log(mapCallback);
console.log(mapModificando);
console.log(mapSoma);

