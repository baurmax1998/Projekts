            var console = {
                log: function (nachricht) {
                    this.speicher.push(nachricht + "\n");
                    document.getElementById("console").value = console.speicher;

                }
                , speicher: []

            }
            console.log("hallo2");

            function doCode() {
                var script = document.getElementById("code").value;
                console.log(eval(script));
            }
     
            (function () {
                var textFile = null
                    , makeTextFile = function (text) {
                        var data = new Blob([text], {
                            type: 'text/plain'
                        });

                        if (textFile !== null) {
                            window.URL.revokeObjectURL(textFile);
                        }

                        textFile = window.URL.createObjectURL(data);

                        return textFile;
                    };


                var create = document.getElementById('create')
                    , textbox = document.getElementById('textbox');

                create.addEventListener('click', function () {
                    var link = document.getElementById('downloadlink');
                    link.href = makeTextFile(textbox.value);
                    link.style.display = 'block';
                }, false);
            })();
       