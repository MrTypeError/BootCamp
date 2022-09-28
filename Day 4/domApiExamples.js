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
span.textContent = " this is span created using dom.createElement";
span.style.backgroundColor = "yellow";

para.appendChild(span)

document.body.appendChild(para);