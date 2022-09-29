function add(firstNumber){
    return function(secondNumber){
        return firstNumber+secondNumber;
    }
}

let addWith = add(5);

// console.log(addWith(2));
// console.log(addWith(7));


//callback functions

document.addEventListener("DOMContentLoaded" , function(){
    console.log("This function gest calld  back when the event occurs ")
})

// Creating Own callbak 

function callMeOnce(fn){
    console.log("I am Done !!")
    fn();
}
function printText(){
    console.log("hello");
}

callMeOnce(printText);

// ###############################

function printTextWithDelay(text) {
    setTimeout(function(){
        console.log(text);
    } , 3000);
}
printTextWithDelay("I am Printed With delay !!! ")