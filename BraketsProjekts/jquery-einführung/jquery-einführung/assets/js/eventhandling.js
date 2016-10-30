

$("button.continue").on("click", function(event){
    console.log("hallo");
});

$("button.continue").off("click");

$("button.continue").one("click", function(event){
    console.log("hallo sagste ein mal");
});


$("nav").on("click", function(event){
     console.log(event.target.tagName);
    event.preventDefault();
});

//callback Funktionen

function call (type, obj,callback){
    var type = type || undefined;
    var event = {};
    if(type ==="click"){
        event.type = "click"
    }
    callback(event);
}

//call (a, {"name":"value"},function(){console.log("hallo")})

//das ist mit JS
//document
//    .querySelector("button.continue")
//    .addEventListener("click",
//        function(event){
//            console.log(event);
//            console.log("click on Button");
//        });
////document.querySelector("button.continue").removeEventListener("click"); klappt ned
//
//var arr = document.querySelectorAll("nav");
//for(var i = 0; i< arr.length; i++){
//    arr[i].addEventListener("click", 
//                            function(event){
//                                console.log("click on "+event.target.tagName.toLocaleLowerCase());
//                                event.preventDefault();
//                            });
//}

