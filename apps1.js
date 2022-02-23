var $res = document.getElementById("resultado");

function mostrar(numero) {
    if($res.value === "0")
        $res.value = numero.value;
    else
        $res.value = $res.value + numero.value;
}

function potencia(){  
    var num = parseInt($res.value);
    var potencia = Math.pow(10,num);
    $res.value = potencia;
}
function raiz(){
    var num = parseInt($res.value);
    var raices = Math.sqrt(num);
    $res.value = raices;
}
function cuadrado(){
    var num = parseInt($res.value);
    var cuadrados = Math.pow(num,2);
    $res.value = cuadrados;
}
function cambiar(){
    var num = parseInt($res.value);
    var signo = num * (-1);
    $res.value = signo;
}
