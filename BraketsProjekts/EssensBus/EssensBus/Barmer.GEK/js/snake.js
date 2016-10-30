/**
 * Created by BA22036 on 28.09.2015.
 */

var spalte = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
var zeile = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n");
var aktuelleSpalte = 0;
var aktuelleZeile = 0;
var bewegungX = 0;    //nach oben und unten
var bewegungY = 0;    //nach links und rechts
var snakeGroesse = 1;
var lebt = true;
var snakeKorper;
var groesseDesFeldes = 13;
var geschwindigkeit = 500;


function koerperErweiternUndAnzeigen() {
    snakeKorper.push(zeile[aktuelleZeile] + spalte[aktuelleSpalte]);
    window.document.getElementById(snakeKorper[0]).className = "feld";
    if (snakeGroesse != snakeKorper.length) {
        snakeKorper.shift();
    }

    for (var i = 0; i < snakeKorper.length; i++) {
        window.document.getElementById(snakeKorper[i]).className = "kopf"
    }
}

document.onkeydown = function (event) {
    if (bewegungX == 0) {
        if (event.keyCode == 87) {
            window.console.log("w");
            bewegungY = 0;
            bewegungX = -1;
        } else if (event.keyCode == 83) {
            window.console.log("s");
            bewegungY = 0;
            bewegungX = 1;
        } else if (event.keyCode == 38) {
            window.console.log("w");
            bewegungY = 0;
            bewegungX = -1;
        } else if (event.keyCode == 40) {
            window.console.log("s");
            bewegungY = 0;
            bewegungX = 1;
        }

    } else if (bewegungY == 0) {
        if (event.keyCode == 65) {
            window.console.log("a");
            bewegungX = 0;
            bewegungY = -1;
        } else if (event.keyCode == 68) {
            window.console.log("d");
            bewegungX = 0;
            bewegungY = 1;
        } else if (event.keyCode == 37) {
            window.console.log("a");
            bewegungX = 0;
            bewegungY = -1;
        }else if (event.keyCode == 39) {
            window.console.log("d");
            bewegungX = 0;
            bewegungY = 1;
        }
    }
    else {
        window.console.log("falsche bewegung der Schlange");
    }
}

function start() {
    bewegungX = 0;
    bewegungY = 0;
    snakeGroesse = 2;
    aktuelleSpalte = 0;
    aktuelleZeile = 0;
    lebt = true;
    snakeKorper = new Array("aa", "ab");
    felderInit();
    essenSetzen();
    bewegung();
}
function reset() {
    bewegungX = 0;
    bewegungY = 0;
    snakeGroesse = 2;
    aktuelleSpalte = 0;
    aktuelleZeile = 0;
    geschwindigkeit = 500;
    lebt = false;
    snakeKorper = new Array("aa", "ab");
    document.getElementById("start").disabled = false;
    for (var i = 0; i < spalte.length; i++) {
        for (var e = 0; e < zeile.length; e++) {
            window.document.getElementById(zeile[e] + spalte[i]).className = "";
        }
    }
}

function felderInit() {
    for (var i = 0; i < spalte.length; i++) {
        for (var e = 0; e < zeile.length; e++) {
            window.document.getElementById(zeile[e] + spalte[i]).className = "feld";
        }
    }
}

function bewegung() {
    aktuelleZeile += bewegungX;
    aktuelleSpalte += bewegungY;
    collisionAbfrageUndKoerperErweitern(zeile[aktuelleZeile] + spalte[aktuelleSpalte]);
    if (lebt) {
        window.setTimeout("bewegung()", geschwindigkeit);
    } else{
        verloren();
    }
}

function verloren() {
    alert("Du hast Verlorne!!! Du hattest einen Score von " + (snakeGroesse-2) + " Apfel:D");
    document.getElementById("start").disabled = true;
}

function collisionAbfrageUndKoerperErweitern() {
    if (aktuelleSpalte < 0) {
        aktuelleSpalte = groesseDesFeldes;
    } else if (aktuelleSpalte > groesseDesFeldes) {
        aktuelleSpalte = 0;
    }
    if (aktuelleZeile < 0) {
        aktuelleZeile = groesseDesFeldes;
    } else if (aktuelleZeile > groesseDesFeldes) {
        aktuelleZeile = 0;
    }
    if (window.document.getElementById(zeile[aktuelleZeile] + spalte[aktuelleSpalte]).className == "essen") {
        snakeGroesse++;
        essenSetzen();
    }

    if (snakeGroesse > 4) {
        for (var i = 0; i < snakeKorper.length; i++) {
            if (snakeKorper[i] == zeile[aktuelleZeile] + spalte[aktuelleSpalte]) {
                lebt = false;
                return;
            }
        }
    }
    koerperErweiternUndAnzeigen();
}

function essenSetzen() {
    var essensfeld = zeile[parseInt(Math.random() * ( (13 + 1) - 1 ))] + spalte[parseInt(Math.random() * ( (13 + 1) - 1 ))];
    for (var i = 0; i < snakeKorper.length; i++) {
        if (snakeKorper[i] == essensfeld) {
            essenSetzen();
        }
    }
    geschwindigkeit -= 10;
    window.document.getElementById(essensfeld).className = "essen";
}