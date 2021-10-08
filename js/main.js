function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");
    //window.location.href = "https://web.digitalinnovation.one/home";  
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por pasar o mouse";
    //alert("Trocar Texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mause aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*function validaidade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar= false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));


alert(soma( 5, 10));

*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count = 0;
for(count=0; count <=5; count++){
alert(count);
}
*/

/*
var count = 0;
while(count < 5){
    console.log(count);
    count = count + 1;
};
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/



//var lista = ["maça", "pêra", "laranja"];
//console.log(lista);
//alert(lista[2]);
//lista.push("uva");
//lista.pop();

//var nome = "Alexandra Nascimento";
//var idade = 35;
//var frase = "gahlshd ahdkjhsdkjd"
//alert ( nome + " tem " + idade + " anos ");
//alert (idade + nome);
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("gahlshd", "Alexandra" ));