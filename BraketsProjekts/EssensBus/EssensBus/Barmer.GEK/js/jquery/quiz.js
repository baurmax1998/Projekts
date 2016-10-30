/**
 * Created by BA22036 on 02.10.2015.
 */



$(document).ready(function() {
    $(".content").slideUp(0);
    $("#regeln").next(".content").toggle(0);
    $("h4.bar").click(function () {
        $(".content").slideUp("slow");
        $(this).next(".content").toggle("slow");
    })
});
