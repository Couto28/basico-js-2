// uma lista de Array com 4 objetos  .
let Users = [
    {FistNAme:"Diogo", LastName: "Couto"},
    {FistNAme:"Joao", LastName: "Couto"},
    {FistNAme:"Camila", LastName: "Mercandelli Couto"},
    {FistNAme:"Luci Hellena", LastName: " M. Couto"}   // os objetos são separados por {}, ... o ultimo não precisad de uma virgula .
]

// unir os valores Fist e LastName dos objetos .

let nomeCompleto = Users.map(function(element){  // element representa os elementos do Array ... no qual já foi setado no metodo .map()

    return `${element.FistNAme} ${element.LastName}`;  // `${}` template literal , serve para concatenar .
});

console.log(nomeCompleto);