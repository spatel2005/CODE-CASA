//innerHTML to add html elements//------>aandr bale element ke sth kaam krna 

//const todoList = document.querySelector(".todo-list");//select ul list 
//console.log(todoList.innerHTML);//print ul list ke aandr ki html


//const todoList = document.querySelector(".todo-list");
//todoList.innerHTML = "<li>NEW TODO</li>";// innerhtml ko chng krdiya  [todo1 se new todo krdiya]



//innerHTML too pure innerhtml ko chnge krta h todo1 se new todo ....pr m chta hu todo1 bhi ho aur new todo bhi
//const todoList = document.querySelector(".todo-list");
//todoList.innerHTML = todoList.innerHTML + "<li>NEW TODO</li>";//phle bali todo1 + new todo add krdo 


//any one use for dono todo keliye todo1 and new todo
//todoList.innerHTML += "<li>NEW TODO</li>";
//todoList.innerHTML += "<li>TEACH STUDENT</li>";

 //MOST GOOD METHOD FOR ADD NEW ELEMENT 
 //const newtodoItem = document.createElement("li");
 //const newtodoItemText = document.createTextNode("Teach Students");
 //newtodoItem.appendChild(newtodoItemText);
 //console.log(newtodoItem);


//1method
 //const newtodoItem = document.createElement("li");
 //const newtodoItemText = document.createTextNode("Teach Students");
 //const todoList = document.querySelector(".todo-list");
 //newtodoItem.appendChild(newtodoItemText);
 //todoList.appendChild(newtodoItem);
 //console.log(newtodoItem);


 //2method
 //const newtodoItem = document.createElement("li");
 // newtodoItem.textContent = "Teach Student"
 //const todoList = document.querySelector(".todo-list");
 //todoList.append(newtodoItem);
 //console.log(newtodoItem);

 //append use kiya kro appendChild nhi
 //append ----->last mein add krta h
 //prepend----->starting mein add krega


 //REMOVE TODO1
 const todo1 = document.querySelector(".todo-list li");
 console.log(todo1);
 todo1.remove();