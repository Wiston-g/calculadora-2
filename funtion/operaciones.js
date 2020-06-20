var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var punto = document.getElementById("punto");
var resultado = document.getElementById("resultado"); 
var clear= document.getElementById("C");


//operaciones
var sumas = document.getElementById("sumar");
var restas = document.getElementById("restar");
var multiplicaciones = document.getElementById("multiplicar");
var divisiones = document.getElementById("dividir");
var igual = document.getElementById("igual");
 




//clicks
clear.addEventListener("click", function(){
    resultado.textContent = "";
});


cero.addEventListener("click",  function (){       
    resultado.textContent = resultado.textContent + "0";
});

uno.addEventListener("click", function (){
    resultado.textContent = resultado.textContent + "1";;
});

dos.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "2";
});

tres.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "3";
});

cuatro.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "4";
});

cinco.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "5";
});

seis.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "6";
});

siete.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "7";
});

ocho.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "8";
});
nueve.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + "9";
});
punto.addEventListener("click", function(){
    resultado.textContent = resultado.textContent + ".";
});




sumas.addEventListener("click", function(){
    alert("+")
});
restas.addEventListener("click", function(){
    alert("-")
});
multiplicaciones.addEventListener("click", function(){
    alert("*")
});
divisiones.addEventListener("click", function(){
    alert("/")
});
igual.addEventListener("click", function(){
    alert("=")
});
