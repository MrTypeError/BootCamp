function printText() {
    console.log(" Hello !!! ");
}
printText.areYouAnObject = true;
//in the global execution context (this = 2)
var a= 2; 

let person ={
    firstName:"Sanu",
    lastName: "Dutta",
    getName: function(){
        // console.log(this) // The person object 
        return this.firstName+" "+this.lastName;    
    }
}
// console.log(this) //2
// console.log(person)
// console.log(person.getName());


function greetPerson(greeeting , another){
    console.log(greeeting, this.getName());
}

// greetPerson();
// This will give erroe becouse it can't access the getName() functon globally

// For that we have  the following :
 // using the special methods 


// bind
// This creates a new copy of the function that we are calling bind

// let greetSanu = greetPerson.bind(person)
// console.log(greetSanu());


//call
//This doesn't creats a copy 
greetPerson.call(person,"Namaste" , "another");


//apply 
greetPerson.apply(person, ["Hello" , "HEHEHE"]); 


//arguments 
function sum(x,y){
    let total = 0;
    // console.log(arguments);
    for(let index= 0; index<arguments.length; index++){
        total+=arguments[index];
    }
    // return x+y;
    return total;
}
// sum(2,3)
// console.log(sum(1,2,3,4,5,67,7));



// Function Borrowing 

let doctor = {
    firstName: "Jhon",
    lastName :"Doe", 
}

console.log(person.getName.call(doctor))


// Function Currying

function logData(date , data) {
    console.log(date , data)
}

logData(new Date() , "This is data to be Logged")

let logNow = logData.bind(null,new Date());
logNow("This is another info to be logged");
logNow("Some another data ")


// Function Currying (another pattern) 

function add(firstNum){
    return function(secondNum){
        return firstNum+secondNum;
    }
}
add(3)(2);
add(4)(7);
add(55)(3);

// default values for paramiters  

function printSomeText(text = "Devsnest"){
    console.log(text);
}
printSomeText();
printSomeText("MENTOR");