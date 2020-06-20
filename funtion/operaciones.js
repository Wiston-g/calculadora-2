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
var operador1;
var operador2;
var operacion;

function limpiar(){
    resultado.textContent="";
};



function blanco(){
    resultado.textContent="";
    operandor1=0;
    operador2=0;
    operacion="";
}





function ejecutar(){
    var ejecu = 0;
    switch (operacion) {
        case "+":
            ejecu=parseFloat(operador1)+ parseFloat(operador2);
            break;
    
        case "-":
            ejecu=parseFloat(operandor1)- parseFloat(operador2);
            break;
        case "*":
            ejecu=parseFloat(operador1) * parseFloat(operador2);
            break;
        case "/":
            ejecu=parseFloat(operador1)/ parseFloat(operador2);
            break;   
    }
    blanco();
    resultado.textContent=ejecu;
};





//operaciones
var sumas = document.getElementById("sumar");
var restas = document.getElementById("restar");
var multiplicaciones = document.getElementById("multiplicar");
var divisiones = document.getElementById("dividir");
var igual = document.getElementById("igual");
 




//clicks
clear.addEventListener("click", limpiar);


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
    operador1 = resultado.textContent;
    operacion = "+";
    limpiar();
});
restas.addEventListener("click", function(){
    operandor1 = resultado.textContent;
    operacion = "-";
    limpiar();
});
multiplicaciones.addEventListener("click", function(){
    operador1 = resultado.textContent;
    operacion = "*";
    limpiar();
});
divisiones.addEventListener("click", function(){
   operador1 = resultado.textContent;
    operacion = "/";
    limpiar();
});
igual.addEventListener("click", function(){
    operador2 = resultado.textContent;
    ejecutar()});