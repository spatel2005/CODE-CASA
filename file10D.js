//BEFORE
//const newtodoItem = document.createElement("li");
//newtodoItem.textContent = "Teach student"
//const todoList = document.querySelector(".todo-list");
//todoList.before(newtodoItem);


//AFTER  
//const newtodoItem = document.createElement("li");
//newtodoItem.textContent = "Teach student"
//const todoList = document.querySelector(".todo-list");
//todoList.after  (newtodoItem);

//CLONE NODES

//const ul = document.querySelector(".todo-list");//select ul
//const newli = document.createElement("li");//ek  li bana le hai aur isko store newli mein kiya hai
//newli.textContent = "new todo";//newli mein kya likhn h vh kiya h
//ul.append(newli);//ul ke aandr append krna h newli 
//ul.prepend(newli);//agr prepend krde too append kaam nh krega...


//CLONE NODES[eg1]
//hum chte h ki append bhi rhye aur prepend bhi rhye ek hi li (newli)mtlb new-todo  
// to hum node ko clone kr skte hai.....
const ul = document.querySelector(".todo-list");//select ul
const newli = document.createElement("li");//ek  li bana le hai aur isko store newli mein kiya hai
newli.textContent = "new todo";//newli mein kya likhn h vh kiya h
const li2 = newli.cloneNode(true);
ul.append(newli);//ul ke aandr append krna h newli 
ul.prepend(li2 );