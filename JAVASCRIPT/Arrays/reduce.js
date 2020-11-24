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
    },
    {
        nome:"carro",
        preco:1000,
        quantidade:2
    }
];

const newarr = [1,2,3,4,5,6,7,8,9];

const reduce = arr.reduce(function(total,next){
    return total.preco + next.preco;
});

const reduceb = newarr.reduce(function(total,next){
    return total + next;
});

const reduceCallback = arr.reduce((a,b) => a + b.preco, 0);

console.log(reduce);
console.log(reduceb);
console.log(reduceCallback);
