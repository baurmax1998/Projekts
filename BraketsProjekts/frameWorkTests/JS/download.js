function downloadJS() {
    var txt = document.getElementById('txt');   
    txt.value = downloadJS + '';
    document.getElementById('link').onclick = function(code) {
        this.href = 'data:text/plain;charset=utf-8,'
            + encodeURIComponent(txt.value);
    };  
};

downloadJS();