/**
 * Created by BA22036 on 23.09.2015.
 */


var ID;
var groesseDerBewegung = 1;

function starteBanner() {
    var inhalt = window.document.getElementById('Banner').innerHTML;
    var neuerInhalt =inhalt.substring(groesseDerBewegung,inhalt.length) + inhalt.substring(0,groesseDerBewegung);
    window.document.getElementById('Banner').innerHTML = neuerInhalt;
     ID = window.setTimeout("stopeBanner(); starteBanner()", 10)
}


function stopeBanner() {
    window.clearTimeout(ID);
}


function geheZuFahrPlan() {
    window.open('kontakte.html');
}

function geheZuruck() {
    window.history.back();
}

function anzahlAnzeigen() {
    window.document.cookie = "";
    window.document.cookie = 'meinKeks=Kruemel; meinSaft=Kirsche; meinKaffe=kalt';
    alert(window.document.cookie);
}

function neueSeiteLaden() {
    window.location.href = window.prompt("gebe eine Adersse ein", "Fahrplan.html")
}
function test() {
    window.open('kontakte.html', menubar = true);
    var button = window.document;

}
function neuesBild() {
    window.document.images['boss'].src = "Alien.png";
    window.document.getElementById('uberschrift').innerHTML = "Alien";
}

function altesBild() {
    window.document.images['busBild'].src = "bus.png";
    window.document.images['busBild'].width = 50;
    window.document.images['busBild'].height = 50;
    //window.document.getElementById('uberschrift').innerHTML = "Willkomen hier im Busdepo.";
}

function bildVergroessern() {
    window.document.images['busBild'].width = 500;
    window.document.images['busBild'].height = 500;
}
