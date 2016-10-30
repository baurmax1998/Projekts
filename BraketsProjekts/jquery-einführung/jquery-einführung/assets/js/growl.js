 var app = window.app || {};
            app.growl = (function ($){
                var $ = $||jQuery,
                    fn = {},
                    
                    _containerWapper = "body",
                    _containerElement = "<div>",
                    _containerId = "growl-container",
                    _containerSelector = "#"+_containerId,
                    
                    _growlMessageElement = "<div>",
                    _growlMessageWapper = _containerSelector,
                    _growlMessageTime = "250",
                    _growlMessageDelayTime = "2000",
                    _growlClass = "growl",
                    
                    _cssElement = "<link>",
                    _cssId = "growl-css",
                    _cssSelector = "#"+ _cssId,
                    _cssFile = "assets/css/growl.css",
                    _cssWrapper = "head",
                    
                    _removeAll = function () {},
                    _setCss = function(){},
                    _setContainer = function(){},
                    _buildMessage = function(){};
                
                _removeAll = function(){
//                    $("." + _growlClass ).on("remove",function(){
//                        $(_cssSelector).remove();
//                        $(_containerSelector).remove(); 
//                    }) private Lösung
                    if($("." + _growlClass ).children().length){
                        $(_cssSelector).remove();
                        $(_containerSelector).remove();
                    }
                }
                
                _setCss = function(){
                   if($(_cssSelector).length === 0){
                       $(_cssElement)
                           .attr("id", _cssId)
                           .attr("rel", "stylesheet")
                           .attr("href", _cssFile)
                           .appendTo(_cssWrapper);
                   } 
                }
                
                _setContainer = function(){
                    if($("#"+_containerId).length === 0){
                    $(_containerElement)
                        .attr("id", _containerId)
                        .appendTo(_containerWapper);
                    }
                }
                
                _buildMessage = function(msg){
                    var msg = msg || "no message!";
                    $(_growlMessageElement)
                        .hide()
                        .text(msg)                        
                        .addClass(_growlClass)
                        .appendTo(_growlMessageWapper)
                        .fadeIn(_growlMessageTime)
                        .delay(_growlMessageDelayTime)
                        .fadeOut(_growlMessageTime ,function(){
                            $(this).remove();
                            _removeAll();
                        });
                };
                
                fn.growl = function (msg) {
                    _setContainer();
                    _setCss();
                    _buildMessage(msg);
                    
                };
                
                return fn.growl;
            }) (jQuery);
            $(document).ready(function(){
                setTimeout(function(){app.growl("Du lotz!")}, 1000);    
                setTimeout(function(){app.growl("Du lotz!asdf")}, 1000);   
                setTimeout(function(){app.growl("Du lotzasd!")}, 1000);    
                setTimeout(function(){app.growl("Du lotzasdfa!")}, 1000);    
                setTimeout(function(){app.growl("Du lotzasdfasd!")}, 1000);    
                setTimeout(function(){app.growl("Du lasdfotz!")}, 1000);    


            });