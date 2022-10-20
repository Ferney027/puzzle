let piezas = [0,1,2,3,4,5,6,7,8];
let num_click = 0;
let primerClic = 0;

function selecionar(casilla) {
    num_click++
    
    if (num_click ==1) {
        
        primerClic = casilla

    }

    if(num_click==2){

        let segundoClic = casilla
        let intercambio = piezas[primerClic];
        piezas[primerClic] = piezas[segundoClic];
        piezas[segundoClic] = intercambio;

        num_click= 0 
        movimientoPiezas()

    }
    quitarBorde()
    document.getElementById("img"+casilla).style.border = "4px solid"
}

function desordenar() {
    piezas = piezas.sort(function(){
        return Math.random() - 0.5
    });
}
function quitarBorde() {
    for (let i = 0; i < 9; i++) {
        document.getElementById("img" +i).style.border= null       
    }
}


function movimientoPiezas(){
    for (let i = 0; i<9; i++ ){
        let imagenPieza = piezas[i];
        document.getElementById("img" +i).src = "img/" +(imagenPieza+1)+".jpg"

    }
}

function comprobarPuz(){
    let comprobar = true;
    for (let i = 0; i < 9; i++) {
       if (piezas[i]== i) {
            comprobar = true
       }
       else{
        comprobar = false
       }
    }
    if (comprobar == true) {
        alert ("COMPLETADO")
       
    }else{
        alert ("ERROR! SIGUE INCOMPLETO")
      
    }
}

let btn = document.querySelector('#btnValidar');

btn.addEventListener('click',(event) => {
    comprobarPuz();
});

window.onload = function(){
    desordenar()

    movimientoPiezas()
}