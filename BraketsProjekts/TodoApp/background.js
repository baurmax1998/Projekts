/**
 *   create form Max Baur
 */
chrome.app.runtime.onLaunched.addListener(function () {
    'use strict';
    chrome.app.window.create("index.html", {
        id: "main"
        , bounds: {
            width: 620
            , height: 500
        }
    });
});