/**
 * Created by BA22036 on 28.10.2015.
 */


$(document).ready(function () {

        $(function () {
            $("td").dblclick(function () {
                var orginalText = $(this).text();
                $(this).html("<input type='text' value='" + orginalText + "' />");
                $(this).children().first().focus();
                $(this).children().first().keypress(function (e) {
                    if (e.which == 13) {
                        var neuerText = $(this).val();
                        $(this).parent().text(neuerText);
                    }
                });
                $(this).children().first().blur(function () {
                    $(this).parent().text(orginalText);
                });
            });
        });
    }
);