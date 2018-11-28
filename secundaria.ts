var intervalo;
window.onload = function (){

    //2
    var date = new Date();
    var divhora = document.getElementById('hora-minutos');
    divhora.innerHTML = " Hora Actual - "+date.getHours()+" : "+ date.getMinutes();
    
    //3
    var size = document.getElementById('size');
    size.innerHTML = " "+window.opener.document.getElementById("size").textContent;

    //4
    var btnCuneta = document.getElementById('btnCuneta');
    btnCuneta.addEventListener('click',IniciarCuenta,false);

}
function IniciarCuenta(){

    let inputNumero: HTMLInputElement = <HTMLInputElement>document.getElementById("inputCuenta");
    var contador = parseFloat(inputNumero.value);
    window.opener.document.getElementById("cuenta").innerHTML="Empezamos contador apartir del numero "+contador;
    intervalo= window.setInterval(function(){
        if(contador == 0){
            window.close();
            window.opener.document.getElementById("cuenta").innerHTML="Se ha finalizado el contador";
        }else{
            contador--;
            window.opener.document.getElementById("cuenta").innerHTML=""+contador;
        }
    },1000);


}