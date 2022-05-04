// vamos criar um array e adicionar uma lista de numeros .

let arr = [1, 2, 3, 4, 5];

// vamos criar uma nova variavel para atribuir o .map e chamar uma function 

let mapArray = arr.map(function(element){  // o elemento dessa function são os elementos do array 
    
    // multiplicamos o elemento pelo o numeros desejado ... lembrando que o elemento representa os numeros do array .
    return element * 3;
});
console.log(mapArray);

