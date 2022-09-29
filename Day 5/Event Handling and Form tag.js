document.addEventListener("DOMContentLoaded" , function(){
    // function handleClick(){
//     // console.log("You have Clicked")
//     alert("Thanks For The Click ")
// }

// new way
// document.getElementById("clickMe").onclick = handleClick;

// recomended way

// document.getElementById("clickMe").addEventListener("click" , handleClick);

// // same thing but two ways (used when function is not used multiple times )

// document.getElementById("clickMe").addEventListener("click" ,function handleClick(){
//     // console.log("You have Clicked")
//     alert("Thanks For The Click ")
// });

//Adding and Removing Events
// function handleMouseOver(event) {
//     console.log(event)
// }

// document.getElementById("start").addEventListener("click", function handleClick(){

//     document.addEventListener("mouseover" , handleMouseOver)
// })

// document.getElementById("stop").addEventListener("click", function handleClick(){

//     document.removeEventListener("mouseover" , handleMouseOver)
// })



//  differemt events like keydown , keyup , keypress

// document.addEventListener("keydown", function(e){
//     console.log("keydown");
//     console.log(e.key);
//     if(e.key == 2){
//         e.preventDefault();
//     }
// })

// document.addEventListener("keypress", function(e){
//     console.log("keypress");
//     console.log(e.key);
//     if(e.key == 2){
//         e.preventDefault();
//     }
// })

// document.addEventListener("keyup", function(e){
//     console.log("keyup");
//     console.log(e.key);
//     if(e.key == 2){
//         e.preventDefault();
//     }
// })


//focus event
document.getElementById("username").addEventListener("focus",function name(params) {
    console.log("focus event happened !! ")
})


//blur event 
document.getElementById("username").addEventListener("blur",function name(params) {
    console.log("blur event happened !! ")
})

// Event bubbling

document.querySelector(".parent").addEventListener("click" , function(){
    console.log("parent clicked !!");
},false)

document.getElementById(".child").addEventListener("click", function(){
    console.log("child clicked !!")
},false)
//if it was true then it goes from parent => child => subchild 
document.getElementById(".subchild").addEventListener("click", function(){
    console.log("subchild clicked !!")
},false)

// //event bubbling can be stopped using 
// document.getElementById(".subchild").addEventListener("click", function(event){
//     console.log("subchild clicked !!")
//     event.stopPropagation();

// })

})

