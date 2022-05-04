// usando map para filtrar objetos necessários .

let product = [
    {Name:"Camisa", Category:"Roupa"},
    {Name:"Chaleiras Elétricas", Category:"Eletro"},
    {Name:"fogão", Category:"eletro"},
    {Name:"calça jeans", Category:"Roupa"}
];

// vamos fazer que todos os itens que seja de roupas fiquem em promoção 

product.map((products)=>{
    if(product.Category === "Roupa"){
        products.onSale = true
    }
}) ;

console.log(product);