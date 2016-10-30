/**
 * Created by BA22036 on 30.09.2015.
 */
// $(document).ready(function() {
//    $("#box p:contains('Dritter')")
//        .addClass("green");
//});


$(document).ready(function () {
    var neuesDiv = document.createElement("div");
    neuesDiv.setAttribute("align", "center");
    var textinhalt = document.createTextNode("Textinhalt");
    neuesDiv.appendChild(textinhalt);

    $(neuesDiv).insertAfter("#ziel");
    //$(neuesDiv).appendTo("#ziel");




    $("#hallo").on("click", function () {
        $("#meinFormular option:contains('Rose')").replaceWith($("<option>Max</option>"));
    });
    //var obj = $("#box p");
    //obj.click(function () {
    //    var position = obj.index(this);
    //    obj.removeClass()
    //        .parent()
    //        .removeClass();
    //    $(this)
    //        .addClass("green")
    //        .parent()
    //        .addClass("box-Color-" + position);
    //});

    //var ziel = document.getElementById("ziel");
    //ziel.parentNode.insertBefore(document.getElementById("ziel"), neuesDiv);

});

//$(document).ready(function(){
//    $('p').click(function(e){
//        alert("klick an " + e.clientX + " und "+ e.clientY);
//    });
//});




