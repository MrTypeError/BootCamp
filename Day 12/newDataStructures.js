let setOfNumber = new Set();


setOfNumber.add(2);
setOfNumber.add(3);
setOfNumber.add(5);
setOfNumber.add(7);
console.log(setOfNumber);
console.log(setOfNumber.has(7));
setOfNumber.delete(7);
console.log(setOfNumber);
setOfNumber.clear();
setOfNumber.size();

let lisOfNumbers = [2 , 2 , 3 , 4, 5 ,5 ,7];
console.log(new Set(lisOfNumbers));

// accessing elements of a set 
let newSet = new Set(lisOfNumbers);
for(let item of newSet){
    console.log(item)
}


//maps
//key value pair 

// let map = new Map();
// map.set("1" , "One");
// map.set("2" , "Two");
// map.set("3" , "Three");
//map.keys();
//map.values();


// find the occurence of each letter in a sentence 

let map = new Map();

let Sentence = "This is a scentence !!"

for(let letter of Sentence.split("")){
    
    let caseInsensitiveLetter = letter.toLocaleLowerCase
    
    if(map.has(caseInsensitiveLetter)){
        
        //add count by 1
        let count = map.get(caseInsensitiveLetter);
        map.set(caseInsensitiveLetter, count+1);


    }else{
        map.split(letter , 1);
    }
}
console.log(map);

// One utility Function

//dictonary ro map to Array
console.log(Array.from(map , ([key, value])=> value));

//set to an array
console.log(Array.from(newSet , item => item));

//every and some 
const arr = [1,2,3,4,6,5];

console.log("Some" ,arr.some(item => item%2 == 0)); //true

console.log("Some" ,arr.every(item => item%2 == 0)); //false

// map function which converts one type of array to another type of it
//returns it as new array

let kvArray = Array.from(map ,([key , value]) => ({key , value}));
console.log(kvArray);
console.log(kvArray.map(currentItem => currentItem.value));
console.log(kvArray);

// Array.filter modify its default behaviour using the prototype

let originalFilterFn = Array.prototype.filter;

Array.prototype.filter = function(cb){
    //this reference to the array on which filter is being applied.
    return originalFilterFn.call()


}

console.log([1,3,6,8].filter(item => item % 2 == 0));