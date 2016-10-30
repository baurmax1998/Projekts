// Javascript Basic

var b = "hallo";

function log(msg){
    msg = "bleble"
    console.log(msg);
}

log(b);
console.log(b);

var obj = {name: "max"}; //json -javaScript Object Notation 

console.log(typeof obj);

var tesobj = {
    name: "max",
    sageHallo: function(mes){
        console.log(mes);
    }
}
tesobj.sageHallo("hallo");
console.dir(tesobj);

delete(this.tesobj);
console.log(tesobj);