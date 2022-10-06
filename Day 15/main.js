// console.log("First");
// console.log("Second");
// console.log("Third");
// console.log("Forth");


// Read the website latentflip
const longRunningFn = () =>{
    const duration  = Date.now() + 3000;
    while (Date.now() <= duration)  {
        
    }
    console.log("longRunningFn ended");
}

const anotherFn = () =>{
    console.log("another Function loaded");
}

const someFunction = () =>{
    anotherFn();
}


const handleClick = () =>{
    console.log("Button Clicked");
}

const fnWithTimeout =() =>{
    setTimeout(function timer(){
        console.log("I am called after a delay");
    },2000);

}


document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("clickable").addEventListener("click",handleClick)
    fnWithTimeout();
    someFunction();
})