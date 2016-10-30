function zeigeStartseite() {
    'use strict';
    $("#divDownloadjs").hide();
    $("#divDebugDrivenDelovomentjs").hide();
    $("#divBrowser").hide();
    $('#tag-cloud').hide();

}
$("#linkStartSeite").on("click", function () {
    zeigeStartseite();
});

$("#linkDownloadjs").on("click", function () {
    zeigeStartseite();
    $("#divDownloadjs").show();
});

$("#debugDrivenDelovomentjs").on("click", function () {
    zeigeStartseite();
    $("#divDebugDrivenDelovomentjs").show();

});
$("#browserjs").on("click", function () {
    zeigeStartseite();
    $("#divBrowser").show();

});
$("#sherejs").on("click", function () {
    zeigeStartseite();
    $('#tag-cloud').show();
});

zeigeStartseite();
//todo Test
function zeigeStartseite() {
    $("#divDownloadjs").hide();
    $("#divDebugDrivenDelovomentjs").hide();
    $("#divBrowser").hide();
    $('#tag-cloud').hide();

}
$("#linkStartSeite").on("click", function () {
    zeigeStartseite();
});

$("#linkDownloadjs").on("click", function () {
    zeigeStartseite();
    $("#divDownloadjs").show();
});

$("#debugDrivenDelovomentjs").on("click", function () {
    zeigeStartseite();
    $("#divDebugDrivenDelovomentjs").show();

})
$("#browserjs").on("click", function () {
    zeigeStartseite();
    $("#divBrowser").show();

})
$("#sherejs").on("click", function () {
    zeigeStartseite();
    $('#tag-cloud').show();
});

zeigeStartseite();