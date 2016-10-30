/**
 * Created by BA22036 on 05.10.2015.
 */

var bilder = Array("bilder/galerie/Herbstbild_1.JPG", "bilder/galerie/Herbstbild_2.JPG",
    "bilder/galerie/Herbstbild_3.JPG", "bilder/galerie/Herbstbild_4.JPG");
var zaehler = 0;
var diashow = false;

function starteDieDiashow(){
    if(diashow){
        bildEinfuegen();
        zaehlerZaehlen(+1);
        window.setTimeout("starteDieDiashow()", 2000);
    }
}

function zaehlerZaehlen( veraenderung){
    zaehler = zaehler + veraenderung;
    if(zaehler >= bilder.length){
        zaehler = 0;
    }
    if(zaehler < 0){
        zaehler = bilder.length-1;
    }
}

function bildEinfuegen() {
    $("#bild").attr("src" , bilder[zaehler]);
}

$("document").ready(function () {
    $("#zurueck").on("click", function(){
        zaehlerZaehlen(-1);
        bildEinfuegen();
    });
    $("#diashow").on("click", function(){

        if(diashow){
            diashow = false;
            $("#diashow").val("Start");
        }else{
            diashow = true;
            $("#diashow").val("Stop");
        }
        starteDieDiashow();
    });
    $("#weiter").on("click", function(){
        zaehlerZaehlen(+1);
        bildEinfuegen();
    });
});




