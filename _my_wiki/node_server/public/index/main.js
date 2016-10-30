/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function () {
    "use strict";
    var start
        , modelleDiv = "#overview"
        , hideAll = function () {
            $("#body").children().each(function () {
                $(this).hide()
            });
            $("#navs").show();
        }
        , openSuche = function () {
            $(suchenDiv).show();

        }
        , openModelle = function () {
            $(modelleDiv).html("").show();
            for (var auto in Autos) {
                $(modelleDiv)
                    .append($("<div>")
                        .on("click", function () {
                            console.log("es öffnet sich das fenster mit dem Projekt!!!");
                            hideAll();
                            $("#editor_div").show();
                        })
                        .attr("class", "auto")
                        .append($("<div>").attr("class", "h2").html(auto))
                        .append($("<img>").attr("class", "titelBild").attr("src", Autos[auto].img))
                        .append($("<div>").attr("class", "coverInfos")
                            .add($("<div>").html("<div class='beschreibung'>Programmiersprache:</div><div class='wert'>" + Autos[auto].proLanguage + "</div>"))
                            .add($("<div>").html("<div class='beschreibung'>Entwickler:</div><div class='wert'>" + Autos[auto].entwickler + "</div>"))
                            .add($("<div>").html("<div class='beschreibung'>Plattform:</div><div class='wert'>" + Autos[auto].platform + "</div>"))
                            .add($("<div>").html("<div class='beschreibung'>Projekt:</div><div class='wert'>" + Autos[auto].projekt + "</div>"))
                            .add($("<div>").html("<div class='beschreibung'>Version:</div><div class='wert'>" + Autos[auto].version + "</div>"))));
            }
        }
        , end;
    $("#editor").jqte();
    $(".jqte").hide();
    $("#clickMe").click(function (e) {
        if ($("#content").attr("aktiv") === "true") {
            console.log("Content wurde angezeigt");
            $(".jqte_editor").html($("#content").attr("aktiv", "false").hide().html());
            $(".jqte").show();
        } else {
            console.log("Editor war aktiv");
            $("#content").attr("aktiv", "true").show().html($(".jqte_editor").html());
            $(".jqte").hide();
        }
    });
    hideAll();
    openModelle();

});