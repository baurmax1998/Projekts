/**
 * Created by BA22036 on 01.10.2015.
 */

var starwarstext = Array(
    '<p class="starwars">STAR WARS</p>',

    '<p class="starwars">EPISODE III</p>',

    '<p class="starwars">DIE RACHE DER SITH</p>',

    '<p class="starwars">Krieg! Die Republik zerfällt unter den </p>',
    '<p class="starwars">Angriffen des umbarmherzigen</p>',
    '<p class="starwars">Sith-Lords,CountDooku. Es gibt Helden </p>',
    '<p class="starwars">auf beiden Seiten, das Böse ist </p>',
    '<p class="starwars">allgegenwärtig.</p>',

    '<p class="starwars">Mit einem überraschenden Schachzug</p>',
    '<p class="starwars">gelang es dem teuflischen</p>',
    '<p class="starwars"> Droidenführer, General Grievous, in die </p>',
    '<p class="starwars">Hauptstadt der Republik einzudringen </p>',
    '<p class="starwars">und den Vorsitzenden des Galaktischen</p>',
    '<p class="starwars">Senats,Kanzler Palpatine, zu </p>',
    '<p class="starwars">entführen.</p>',

    '<p class="starwars">Als die Droidenarmee der Separatisten</p>',
    '<p class="starwars">versucht,mit ihrer wertvollen Geisel aus</p>',
    '<p class="starwars">derbelagerten Stadt zu fliehen, führen </p>',
    '<p class="starwars">zwei Jedi-Ritter die verzweifelte Mission </p>',
    '<p class="starwars">zur Rettung des gefangenenKanzlers </p>',
    '<p class="starwars">an....</p>');

var zaehler = 0;

$(document).ready(function () {
    $("#startText").on("click", function () {
        $("#starwarstext").empty();
        zaehler = 0;
        texteinfuegen();
    });
});

function texteinfuegen(){
    $(starwarstext[zaehler]).appendTo("#starwarstext");
    if(zaehler < starwarstext.length) {
        zaehler++;
        window.setTimeout("texteinfuegen()",1000);
    }
    else{
    }
}
