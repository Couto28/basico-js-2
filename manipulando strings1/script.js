let nome = 'Diogo';

let nomeReal = nome.indexOf("");

console.log(nomeReal);

// length > imprimi quantidade de letras da palavra
// indexOf serve para procurar determinada palavra, letra ou texto é existente .


let resultado ='';

if(nome.indexOf('s') >-1 ) {
    resultado = "Achou!";
}else {
    resultado = "Não Achou !";
}

console.log(resultado);