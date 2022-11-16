// --------------------
function palindromo(parola){
    
}

function generaSommaRandom(min, max, numero){
    let intervallo = max-min;
    let caso = Math.random();
    // Toglie decimali e prende l'input più vicino
    caso = Math.floor(caso * intervallo);
    caso = caso + min;
    return parseInt(numero) + parseInt(caso);
}

function pali(){
    let parola = document.getElementById("inputPali").toLowerCase();
    console.log(parola);
}

function dispari(){
    let numero = document.getElementById("inputDispari").value;
    let selDispari = document.getElementById("btnDispari");
    let selPari = document.getElementById("btnPari");
    let min = 1;
    let max = 5;
    if (numero >= min && numero <= max) {
        let risultatoCasuale = generaSommaRandom(min, max, numero);
        if ((risultatoCasuale) % 2 == 1 && selDispari.checked) {
            alert("Hai vinto! È dispari! (" + risultatoCasuale + ")");
        } else if ((risultatoCasuale) % 2 == 0 && selPari.checked) {
            alert("Hai vinto! È pari! (" + risultatoCasuale + ")");
        } else {
            alert("Hai perso... (" + risultatoCasuale + ")");
        }
    } else {
        alert("Non hai inserito un numero valido.");
    }
}