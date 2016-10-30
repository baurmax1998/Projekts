$("#goButton").on("click", function () {
    'use strict';
    var zielseite = "http://" + $("#suchenInhalt").val();
    $("#content").append($.load(zielseite));
});