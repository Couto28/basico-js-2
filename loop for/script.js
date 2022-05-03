// A instrução for cria um loop que consiste em três expressões opcionais

/*Sintaxe

for ([inicialização]; [condição]; [expressão final])

   declaração*/

// inicialização : usa-se uma let / var atribuimos para ela um valor/ container  let i = 0;
// condição :  Uma expressão que será validada no final de cada iteração de loop
// declaração : Uma declaração que é executada enquanto a condição for verdadeira. 

for(var i = 0; i < 9; i++){ // essa condição imprimirar os valores de 0 a 9.
    console.log(i);
}


// tambem da certo sem una condição , porém vc deve atribuir um comando para o loop para 
// dessa forma podemos adicionar um if para analizar , e break para parar .
// repare que após o break o loop ainda conta mais uma ultima numero que seria o 4 .
for(let i = 0;; i++){
    console.log(i)
    if(i>3)break;
}



// também podemos delcarar dessa maneira .
var i = 0;

for(;;){
    if(i>3)break;
    console.log(i);
    i++;
}