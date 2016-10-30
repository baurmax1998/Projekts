/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function () {
    "use strict";
    $("#editor").jqte();
    $(".jqte").hide();
    $("#clickMe").click(function (e) {
        if ($("#content").attr("aktiv") === "true") {
            console.log("Content wurde angezeigt");
            $(".jqte_editor").html($("#content").attr("aktiv", "false").hide().html());
            $(".jqte").show();
        }
        else {
            console.log("Editor war aktiv");
            $("#content").attr("aktiv", "true").show().html($(".jqte_editor").html());
            $(".jqte").hide();
        }
    });
});