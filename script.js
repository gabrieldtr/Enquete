let inc = 0;
let cont = 0;
let tamanho0 = 0;
let tamanho1 = 0;
let mov = 500;
let diminuir0 = 3;
let diminuir1 = 3;

function sim(){
    inc++;
    tamanho0 = tamanho0 + 20;
    document.getElementById("is").innerHTML = inc;
    document.querySelector("#is").style.width = tamanho0+"px";
    if(inc > diminuir1){
        diminuir0 = inc;
        mov = mov - 10;
        if(mov < 0){
            mov = 0;
        }
        document.querySelector(".resp").style.left = mov+"px";
        document.querySelector("#is").style.left = mov+"px";
        document.querySelector("#in").style.left = mov+"px";
        document.querySelector("#nao").style.left = mov+"px";
        document.querySelector("#sim").style.left = mov+"px";
    }
}

function nao(){
    cont++;
    document.getElementById("in").innerHTML = cont;
    tamanho1 = tamanho1 + 20;
    document.querySelector("#in").style.width = tamanho1+"px";
    if (cont > diminuir0){
        diminuir1 = cont;
        mov = mov - 10;
        document.querySelector(".resp").style.left = mov+"px";
        document.querySelector("#is").style.left = mov+"px";
        document.querySelector("#in").style.left = mov+"px";
        document.querySelector("#nao").style.left = mov+"px";
        document.querySelector("#sim").style.left = mov+"px";
    }
}   