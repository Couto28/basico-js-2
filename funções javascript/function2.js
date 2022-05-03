// um parametro se torna uma variavel dentro de uma function .

// funnction é um bloco de código onde podemos reaproveitar em determinados problemas .

// sem argumento
function primeiraFuncao (){
       console.log("Hello word das funções ! ")
};

// invocando uma function 

primeiraFuncao();

// com argumento / parametros :

function dizerNome(nome){
    console.log("O nome é :"+ nome);
}
/* dessa forma passamos um argumento "nome " porém nome n foi declarado
dessa forma seria impresso Undefinid, por isso utilizamos o nome concatenando
no escopo da função , e invocamos o nome desejado */
dizerNome("Javascript");



