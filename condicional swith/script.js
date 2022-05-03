
let diaSemana = 3;

switch(diaSemana){
    case 1 : 
       console.log(" Segunda-feira");
       break;
    case 2 :
       console.log("Terça-feira");
       break;
    case 3 : 
       console.log("Quarta-feira");
       break;
    case 4 :
       console.log("Quinta-feira");
       break;
    case 5 :
        console.log("Sexta-feira");
        break;
    case 6 :
        console.log("Sábado !");
    case 7 : 
        console.log("Domingo ! ");
    break;
};

let semanaFeriado = '';

switch(semanaFeriado){  // semanas seriam representadas de 1 a 5 .
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    console.log("Dias da semana !"); 
    break;
    case 6:
    case 7:
    console.log("Final de Semana !"); // finais de semana seriam representados de 6 e 7.
    break;
    default :
    console.log("Feriado"); // feriado seriam representados no numero 0, e valores acima de 8 e "" vazia..
    break;
}
