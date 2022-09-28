// let num1 = 10;
// let num2 = 20;

// if (num1 > num2) {
//   console.log(num1 + " is greater then " + num2);
// }
// if (num2 > num1) {
//   console.log(num2 + " is greater then " + num1);
// } else {
//   console.log(num1 + "and", num2, "both are equal");
// }




function compareNumbers(num1 , num2){
    if (num1 > num2) {
        console.log(num1 + " is greater then " + num2);
    }
    else if (num2 > num1) {
        console.log(num2 + " is greater then " + num1);
    } 
    else {
        console.log(num1+" and "+num2+"both are equal");
    }

}

// compareNumbers(5,10) //calling our function
// compareNumbers(30,20)
// compareNumbers(10,10)




function AddNum(firstNum , secNum){
    return firstNum+secNum
}

// const result = AddNum(10 , 200)
// console.log(result)


// Function Expression Syantax
const add = function AddNum(firstNum , secNum){
    return firstNum+secNum
}

// console.log(add(100 , 200));


// anonymous function

const subtract =  function(firstNum , secNum){
    return firstNum-secNum
}

//invoaking function
console.log(subtract(100 , 55))


// Function creation in a Object
person = {
    firstNum : "jhon", 
    secNum:"Doe",
    age : 30,
    print:function(){
        console.log("This is also a property of a function ");
    }
}

person.print();