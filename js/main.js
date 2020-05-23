// JavaScript source code

//var nome = "Boom";

//var frase = "dog e meu pau";

//alert("primeiro porra " + nome);

//console.log(frase.replace("pau", "bom"));

//lista.toString()

//lista.reverse()


//var lista = ["maca", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista.join(" "));

//var fruta = { nome: "maça", cor: "vermelha" }
//alert(fruta.cor);

//var fruta = [{ nome: "maca", cor: "vermelha" },
    //{ nome: "uva", cor: "roxa" },
    //{ nome: "mamao", cor: "laranja" }];
//console.log(fruta);

/*var idade = prompt("qual sua idade?");

if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}*/

/*var count = 0;

while (count <= 5) {
    console.log(count);
    count++;
}*/

/*var count;

for (count = 0; count <= 5; count++) {
    alert(count);
}*/

/*var d = new Date();
alert(d.getMonth());*/


/*function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {

    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }

    return validar;
    
}


var idade = prompt("qual sua idade");
console.log(validaIdade(idade));*/

//alert(soma(5, 5));

function botao() {
    document.getElementById("agd").innerHTML = "Voce clicou!";
  
}

function redirecionar() {
    window.open("https://diassmiqueias.github.io./");
   // window.location.href = "https://diassmiqueias.github.io./";
}

function trocar(elemento) {
    //document.getElementById("mouse").innerHTML = ;
    elemento.innerHTML = "trocuou ooo";
}

function voltar(elemento) {
    //document.getElementById("mouse").innerHTML = "mause";
    elemento.innerHTML = "mouse";

}

function load() {
    alert("pagina Carregada");
    document.body.style.backgroundColor = "red";
    document.getElementById("novinho").innerHTML = " ";


}

function changefu(elemento) {
    console.log(elemento.value);
    document.getElementById("novinho").innerHTML = "O valor escolhido foi = " + elemento.value;
}
