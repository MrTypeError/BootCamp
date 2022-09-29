// object literal syntax

// let person = {
//     firstName:"Sanu",
//     lastName : "Dutta",
// }
// let anotherPerson = new Object();
// anotherPerson.firstName = "Sanu";
// anotherPerson.lastName =  "Dutta";
// console.log(anotherPerson)


// Function constructor

// function Person(){
//     this.firstName = "Sanu";
//     this.lastName = "Dutta";
// }

// let jane = new Person();
// console.log(jane);




// Function constructor (parametarized)

function Person(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let jane = new Person("jane" , "Doe");
// console.log(jane);

let janny = new Person("Sudip" , "Dutta");
// console.log(janny);

let gaurav = new Person("Gaurav" , "sen");
// console.log(gaurav);


// prototypal Inheritance in JS 

Person.prototype.printName = function(){
    return this.firstName + " " + this.lastName;
}
console.log(gaurav.printName());
console.log(janny.printName());
console.log(jane.printName());

// It will search the toString() function in the prototype chain,
// but as it is not available so it will get null and will not do anything.

// toString will point to null 
console.log(jane.firstName.toString());





// ############################################
                // DAY 11
// ############################################





// prototypal Inheritance in JS 
let firstSet = [1,2,34,45,6,7,8,89]
let anotherSet = [1,4,5,7,8,9,0,254,6,7,867,867]

console.log(firstSet , anotherSet);

Array.prototype.evenNumbers = function(){
    return this.filter(function(item){
        return  item%2 == 0
    })
}

// call by value and call by referance 



// Object.create (pure protypical inheritance)

let org = {org:"Devsnest"};
let anotherNewPerson = Object.create(org, { name: { value : "Foo"}});
console.log(anotherNewPerson);

org.location = "Mumbi";
console.log(anotherNewPerson);



// it checks wheather the property is its own or inherited

Object.hasOwn(anotherNewPerson , "location"); // returns true or false


let someP = {name : "Sanu"};
let carP  = {car: "BMW"};

//It is only applicable on Objects who returns true for hasOwn()
// it marges and creates a new Object
console.log(Object.assign({} , someP ,carP))


// class way to create an object

class Shape{
    constructor(height , width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height*this.width
    }
}

let rectangle = new Shape(10 , 20 );
console.log(rectangle);

class Square extends Shape{
    constructor(dimension){
        super(dimension , dimension)
    }
}

console.log(new Square(10));
console.log(new Square(10).area());

