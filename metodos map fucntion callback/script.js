
// usando function callback 

let arr = [1, 2, 3];

let meuArray = arr.map(function(element, indice, array){

  console.log(this)

}, 80 );

