const arr = [1,2,3,4,5,6,7,8,9];

const find = arr.find(function(item){
    return item == 2;
});

const notfind = arr.find(function(item){
    return item == 15;
});


console.log(find);
console.log(notfind);