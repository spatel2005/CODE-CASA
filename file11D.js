// static list-------->querySelectorAll

//const listItems = document.querySelectorAll(".todo-list li");
//const sixthLi = document.createElement("li");
//sixthLi.textContent = "item 6";
//const ul = document.querySelector(".todo-list");
//ul.append(sixthLi);
//console.log(listItems);


// live list ------->getElementsByClassName
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");//ul krne se ul ke aandr jtne li hone sb mil jyege

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);