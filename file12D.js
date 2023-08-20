//HOW TO GET THE DEMENSION OF ELEMENT
//todosection ki height aur width chahiye
 
const todosection = document.querySelector(".todo-section");
const info = todosection.getBoundingClientRect();
console.log(info);



//use this if only print height....similar width,top,right..etc
//const info = todosection.getBoundingClientRect().height;
//console.log(info);