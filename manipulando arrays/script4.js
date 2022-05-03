//metodo map

let arr = [11, 10 ,15, 16, 25,07];

let arr2 = [];

arr2 = arr.map(function(x){
    return x * 2;
})

let res = arr2;

console.log(res);

// para preencher um array vazio precisamos de dois arrays.

// um array com valores e uma variavel para declarar esse array .

// outro array vazio , esse novo arrya precisa tambem de uma variavel para declarar .

// pegamos o segundo array vazio e atribuimos ele ao primeiro array . arr2 = arr

// o primeiro arr deve vir com o metodo map que o mesmo ja vem com uma function

// a function deve ter seu proprio metodo, o qual será usado com o segundo array .

