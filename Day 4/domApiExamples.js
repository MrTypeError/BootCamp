const para = document.createElement("p");
para.textContent  = "This is created using DOM API";

// For adding a class programatically
para.classList.add("one");
para.classList.add("second-class");
// For removing the class Programatically
para.classList.remove("second-class");

//setting attribute by program
para.setAttribute("id" , "js-para");
console.log(para.getAttribute("id"));


const span = document.createElement("span") // DOM node
span.id = "span-id";
span.className = "blue";

// This will entirely show what is written , it can't recognize any tags.
span.textContent = " this is span created using <em>dom.createElement</em>";

// This can understand the tags and can work like a HTML code.
span.innerHTML = " this is span created using <em>dom.createElement</em>";

span.style.backgroundColor = "yellow";
 
para.appendChild(span)

document.body.appendChild(para);

const hobbies = ["coding", "jogging " , " hiking"];

const list = document.createElement("ul");

for(let hobby of hobbies){
    list.innerHTML += "<li class ='blue'>" + hobby + "</li>";
}

document.body.appendChild(list);

// get the element 

console.log(document.getElementById("first-para").textContent);

console.log(document.getElementsByClassName("blue"));

// This returns the first element follwing the rule.

console.log(document.querySelector("p"));

//  This returns a list.
console.log(document.querySelectorAll("p"));

console.log(document.querySelector(".one")); 

