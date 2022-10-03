// //
// //
// // const firstName = "Mr.Bean"
// // const name = "jhon";
// // const age = 20;

// // console.log("Hi my name is " + name + "my age is "+ age );
// // console.log(`Hi my name is ${name}my age is ${age}`);
// // console.log(`Hi my name is "${firstName}"my age is ${age > 18 ? "Adult":"Minor"}`);


// //shorthand property

// // you dont need to explictly define key:value pair
// // let person = {
// //     firstName,age
// // };

// // // console.log(person)

// // let person2 = {
// //     firstName,
// //     age,
// //     printMe(){
// //         console.log(this.firstName, this.age)
// //     }
// // };
// // console.log(person2);

// //
// let anotherPerson = {
//     firstName:"foo", lastName:"bar",
//     address:{
//         city:"Pune",
//         state:"MH"
//     }
// };

// // let {firstName , lastName} = anotherPerson;
// // console.log(firstName,lastName);

// // let {firstName , address:{city}} = anotherPerson;
// // console.log(firstName,city);

// let {firstName , address:{city}, address} = anotherPerson;
// console.log(firstName,city, address);


// // destructuring Arrays
// const fruits = ["Apple" , "Mango" , "Orange"]
// console.log(fruits[0]);

// // const[apple] = fruits;
// // console.log(`coming from destructured arry ${apple}`);

// // const[apple , k] = fruits;
// // console.log(`coming from destructured arry ${apple} , ${k}`);

// const[Orange] = fruits;
// console.log(`coming from destructured arry ${Orange}`);

// //alias

// let {firstName:givenName} = anotherPerson;
// console.log("aliased as name", givenName);

// // rest Operator - ... => ellipsis notation
// //it returns the remaining part after it is destructured
// const { firstName:name , ...rest} = anotherPerson;
// console.log(name , rest);

// const[apple , ...rem] = fruits;
// console.log(apple , rem);

// const anotherListOfFruits = ["Strawberry" , "Pineapple"]
// //This is also known as concatination (Using Spread Operator)
// const moreFruits =[...fruits,...anotherListOfFruits];
// console.log(moreFruits);

// console.log({...anotherPerson.address , country:"India"});

// // Arrow Function 
// let sum = function(firstNum , secondNum) {
//     return firstNum+secondNum
// }

// // A shorter way to write the same thing 
// let SumArrow = (firstNum , secondNum) => firstNum + secondNum;


// // if there is a multiple line or computation then we can explictly return the result
// let SumArrow2 = (firstNum , secondNum) => {
//     let result;
//     if(firstNum > secondNum){
//         result = firstNum + secondNum;
//     }
//     else{
//         result = 0;
//     }
//     return result
// }

// //optional Chaining 
// let person = {
//     firstName:"J",
//     lastName:"D",
//     age:28
// };

// if(person?.address?.city){
//     console.log(anotherPerson.address.city) // we will not get the output and Error will also not shown
// }

// if (anotherPerson?.address?.city) {
//     console.log(anotherPerson.address.city) // we will get the output as Pune
// }

// // nullish coalescing Operator

// // let age  = person.age || 20 ;
// // console.log(age);

// let age  = person.age ?? 20 ; //if the left value is null or false or 0 then it will give output as the fasle
// console.log(age); //20


// const devsnest = () => 'hello world';

const devsnest = () => 'test'

console.log(devsnest()) //'test'