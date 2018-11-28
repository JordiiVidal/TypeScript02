window.onload = function () {
    //01
    var btnRandom = document.getElementById('btnRandom');
    btnRandom.addEventListener('click', randomNumeros, false);
    //02
    var btnVentana = document.getElementById('abrirVentana');
    btnVentana.addEventListener('click', openWindow, false);
    //02
    var btnSize = document.getElementById('guardarSize');
    btnSize.addEventListener('click', getWindosSize, false);
};
function randomNumeros() {
    var inputUno = document.getElementById("numeroUno");
    var numeroUno = parseFloat(inputUno.value);
    var inputDos = document.getElementById("numeroDos");
    var numeroDos = parseFloat(inputDos.value);
    var numero = Math.floor(Math.random() * (numeroDos - numeroUno) + numeroUno);
    document.getElementById("divrandom").innerHTML = "" + numero;
}
function openWindow() {
    document.getElementById('size').textContent = '';
    var width = window.screen.width / 2;
    var height = window.screen.height / 2;
    var Top = height - 300;
    var Left = width - 300;
    ventanaComprar = window.open("secundaria.html", "", "width=450,height=400,menubar=no,left=" + Left + ",top=" + Top);
}
function getWindosSize() {
    var size = document.getElementById('size');
    size.innerHTML = "Las dimensiones de la pantalla principa son : " + window.innerHeight + " - " + window.innerWidth;
    ventanaComprar = window.open("secundaria.html", "", "width=450,height=400");
}
var ventanaComprar;
