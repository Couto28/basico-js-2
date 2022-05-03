// manipulando o DOM com function .

/*
As funções são um dos blocos de construção fundamentais em
 JavaScript. Uma função em JavaScript é semelhante a um 
 procedimento - um conjunto de instruções que executa uma 
 tarefa ou calcula um valor, mas para um procedimento se 
 qualificar como uma função, ele deve receber alguma entrada 
 e retornar uma saída onde haja alguma relação óbvia entre o
  entrada e a saída. Para usar uma função, você deve defini-la
   em algum lugar no escopo do qual deseja chamá-la.
 */


   // sintaxe de uma function .

   function nomesFunction(/*passa o parrametro*/){
              // passa a instrução que deve ser retornada .
   };

   
   // acessando um objeto em uma function .

   function myFunc(theObject){
     theObject.make = 'toyota';
   }

   var mycar = {
     make: 'Honda',
     model: 'Accrod',
     year: 1998
   };
   var x, y;

   x = mycar.make;  // obtem o valor Honda.
   myFunc(mycar);
   y = mycar.make;  // obtem o valor Toyota, a propriedade make foi alterada pela propriedade da function
