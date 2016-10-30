//"use strict";
//
//var 
//    a = undefined,
//    b = undefined,
//    obj = {},
//    arr = [],
//    log = function(){}
//;
//
//var log = function(msg){
//    var c = true;
//    console.log(msg);
//};
//
//document = undefined;
//
// console.log(c);
//
//b = "ein neuer Text";
//
//console.log(b);



//so etwas macht eine bibliotek

var app = window.app || {};

//iife inmediate invoked Function Expression
app.log = (function(){
    "use strict"
    //declaration 
    var a = 1,
        fn = {}
    ;
    // Methods
    fn.log = function(msg) {
        console.log(msg);
    }
    
    //control
    
    //publication
    return fn;
    
})();