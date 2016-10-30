chrome.app.runtime.onLaunched.addListener(function () {
    'use strict';
    chrome.app.window.create('window.html', {
        'outerBounds': {
            'width': 400
            , 'height': 500
        }
    });
});