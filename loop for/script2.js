// trabalhando com  for no DOM .

let texto = '';

for(let i =0;i < 9;i++){ // inicialzação - condição - incrementação  .
   texto = texto  + i + '-';
};

document.getElementById("demo").innerHTML = texto; // propriedadepara manipulação de ID.


// trabalhando o for com arrays .

let cores = ["PRETO","BRACO","AZUL","AMARELO","VERMMELHO"];

let html = "<ul>"; // criando um variavel html para adicionar uma ul no js .

for(let i in cores){ // criamos um for para adicionar as tg html via js .
    html +="<li>"+ cores[i] +"</li>"; // += junto o valor anterior ao novo valor .
}

html += "</ul>";

document.getElementById("demo").innerHTML = html; // usamos o ID demo para adicionar a "<ul></ul>"


