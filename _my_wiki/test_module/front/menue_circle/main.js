/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function () {
    "use strict";
    (function () {

        var ul = $("#navs")
            , li = $("#navs li")
            , i = li.length
            , n = i - 1
            , r = 110;

        ul.click(function () {

            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {

                for (var a = 0; a < i; a++) {
                    li.eq(a).css({

                        'transition-delay': "" + (50 * a) + "ms",

                        '-webkit-transition-delay': "" + (50 * a) + "ms",

                        'left': (r * Math.cos(60 - 90 / n * a * (Math.PI / 180))),

                        'top': (-r * Math.sin(60 - 90 / n * a * (Math.PI / 180)))

                    });

                }

            } else {

                li.removeAttr('style');

            }

        });

    })($);

});