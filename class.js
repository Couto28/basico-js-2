//sintaxe  :   para criar uma class usa-se a palavra-chave " class ", seguida de um nome para essa class .

class Retangulo{
      // o nome das class são criadas com letras " A " maíusculas .
    constructor( altura , largura ){  // toda class tem um construtor , aonde armanezaremos os metodos ... a sintaxe de um construtor é uma função .
  this.altura = altura ; this.largura = largura ;
 }



 get area(){
   return this.calcularArea()
 }
 
 calcularArea(){
    return this.altura * this.largura;
 }

};

 const quadrado = new Retangulo(10, 10);

 console.log(quadrado.area);