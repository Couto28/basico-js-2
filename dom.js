/* DOM .
 O Modelo de Objeto de Documento  (DOM)
 é uma interface de programação para documentos HTML, XML e SVG .
 Ele fornece uma representação estruturada do documento
*/

//Propriedade  document.ElementById('');
//Retorna a referência do elemento através do seu ID.

document.getElementById('exemplo').innerHTML = "Programador React Native";

//A propriedade Element.innerHTML define ou obtém a sintaxe HTML ou XML
// descrevendo os elementos descendentes.


//Document.getElementsByClassName();


/*Retorna um vetor de objetos com todos os elementos
 filhos que possuem o nome da classe dada.*/


document.getElementsByClassName('lista')[''].innerHTML = "bike";

 /*Sintaxe
var elementos = document.getElementsByClassName(nomes); // ou:
var elementos = rootElement.getElementsByClassName(nomes);
*/

//getElementsByTagName();
/* retorna uma tag html para fazer alteração */

document.getElementsByTagName().innerHTML= 'h3';



// Document.querySelector()

/* O Documentmétodo querySelector() retorna o primeiro 
Elementdentro do documento que corresponde ao seletor 
ou grupo de seletores especificado.*/

document.querySelector('#')// seleciona por ID
document.querySelector('.')// seleciona por class
document.querySelector('h1')// seleciona atravé de tags.
document.querySelectorAll();// consegue invocar qualquer metodo e propriedade.