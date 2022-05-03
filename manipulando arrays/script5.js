// manipulando array com filter / utilizando condicional if else .
let arr = [11, 10 ,15, 16, 25, 77, 35, 55];

let arr2 = [];

arr2 = arr.filter(function(x){

     if( x < 20){

         return true;

     }else {

         return false;
     };
         
});

let res = arr2;

console.log(res);

// forma de substituir o if else .

//  retur (item > 3)? true : false;