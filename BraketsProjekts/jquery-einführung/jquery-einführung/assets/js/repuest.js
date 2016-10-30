var request = $.ajax("link2.html");
//request = $.ajax("https://www.google.de/");

request.done(function(response){
    $("body").append(response);
});

 
            
            var request = $.ajax();
            request.done(function (response) {console.log(response)})
                .fail(function (xhr){console.log(xhr.status)})
                .always(function () {console.log( "alles gelaufen");});
//            
//            var request = $.ajax({
//                url : "link2.html",
//                method: "POST",
//                timeout : 2000,
//                
//                dataType: "html", //json xml
//                
//            });
            
             var request = $.ajaxSetup({
                
                method: "POST",
                timeout : 2000,
                
                 
//                beforeSend
                 
                 success: function(response){console.log(response)},
                 error:function(xhr){console.log("error")},
                 complete:function(){console.log("fert8isch")},
            });
            
            var request = $.ajax({
                url : "data.json",
                dataType: "json", //json xml
            })
            
//            $.get();
//            $.post();
//            $.getJSON();
//            $.getScript();
            
            $("#main").load("link2.html");
            
            
//            var xhr = new XMLHttpRequest();
//            xhr.addEventListener("readystatechange", function(){
//                
//                switch (xhr.readyState){
//                    case 0:
//                        break;
//                    case 1:
//                        break;
//                    case 2:
//                        break;
//                    case 3:
//                        break;
//                    case 4:
//                        if(xhr.status === 301|| xhr.status === 200){
//                            console.log(xhr.responseText);
//                            console.log(xhr.responseXML)
//                        }
//                        break;
//                }
//            })
//            
//            xhr.open("GET", "link2.html");
//            xhr.send(); 
            
            
           var anFormSubmit = function (event){
               event.preventDefault();
               console.dir(event);
               var data = $(event.target).serializeArray();
               console.log(data);
               
               
           };
            $("#form-login").on("submit", anFormSubmit)
            var data = {
                "name": "Max"
            }
            
            document.querySelector("#form-login").addEventListener("submit", data, anFormSubmit);
            
            var onInputFocus = function(event){console.log("Focus");};
            var onInputBlur = function(event){console.log("blur")};
            var onInputChange = function(event){console.log("Change")};
            
            $("input, textarea, select").on("focus", onInputFocus);
            $("input, textarea, select").on("blur", onInputBlur);
            $("input, textarea, select").on("change", onInputChange);
            
            //bbjektbezogeneereignisse
            window.addEventListener("load", function(){console.log("fertisch")});      window.addEventListener("beforeunload", function(){confirm("möchten sie das fenter wirklich schließen");})
            
            var app = window.app || {}
    
            
            app.loader = (function ($){
                var
                    fn = {},
                    loadHtml = function(){},
                    loadJson = function(){},
                    loadXml = function(){},
                    loadScript = function(){},
                    repuest
                ;
                
                loadHtml = function(url, target){
                    repuest = $.ajax({url: url,dataType: "html"});
                    repuest
                        .done(function(response){
                            $("#"+target).html(response);
                            console.log("fertisch");
                        })
                        .fail(function(xhr){console.log("LadaFehler")})
                        
                }
                
                
                loadJson = function(url, target){
                    repuest = $.ajax({url: url,dataType: "json"});
                    repuest
                        .done(function(data){
                            $("<ul>").attr("id", "user")
                                .appendTo(target);
                            $("<li>").append(data.name).appendTo("ul#user");
                            $("<li>").append(data.email).appendTo("ul#user");
                        })
                        .fail(function(xhr){console.log("LadaFehler")})
                }
                
                
                loadXml = function(url, target){                    
                    repuest = $.ajax({url: url,dataType: "xml"});
                    repuest
                        .done(function(data){
                        console.log(data);
//                            $("<ul>").attr("id", "user").appendTo(target);
//                            $("<li>").append(data.name).appendTo("ul#user");
//                            $("<li>").append(data.email).appendTo("ul#user");
                        })
                        .fail(function(xhr){console.log("LadeFehler")})
                }
                
                
                loadScript = function(url, target){
                    repuest = $.ajax({url: url,dataType: "html"});

                }
                
                
                
                fn.onAnchorClick = function(event){
                    var
                        url =  $(event.target).attr("href"),
                        format = $(event.target).data("format"),
                        target = $(event.target).data("target")
                    ;
                    
                    event.preventDefault();
                    event.stopPropagation();
                    
                    console.log("onClick");
                    
                    switch (format){
                        case "HTML":
                            loadHtml(url, target);
                            break;
                        case "json":
                            loadJson(url, target);
                            break;
                        case "xml":
                            loadXml(url, target);
                            break;
                        case "script":
                            loadHtml(url, target);
                            break;
                        
                    }
                }
                //[onAnchorEnter descripion]
                //@param {[type] event [despription]}
                //@return {[type]      [description]}
                //
                //
                
                
                fn.onAnchorEnter = function(event){
                    var 
                        info = $(event.target).data("info")
                    ;
                    
                    event.preventDefault();
                    event.stopPropagation();
                    console.log("onEnter");
                    app.growl(info);
                    
                }
                
                return fn;
            })(jQuery)
            
            
            $(document).ready(function(){
                $("nav").on("click", "a[href]", app.loader.onAnchorClick);
                $("nav").on("mouseenter", "a[href]", app.loader.onAnchorEnter);
            });
           
