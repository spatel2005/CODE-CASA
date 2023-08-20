//select element using  (get element by Id ) method1 

//console.log(document.getElementById("main-heading"))
//const mainHeading = document.getElementById("main-heading")
//console.log(mainHeading);


//console.log(typeof document.getElementById("main-heading"));
//document.getElementById("main-heading") to yh return mein ek object dekhga aur vh object kya hoga (MANAGE YOUR TASK)JO elemnt h uski ki representation hogi aur ise related jo bhi browrse ne aapne aandr store kiya h vh sb hoga 

//console.dir(document.getElementById("main-heading"));

//select element using  (query selector) method2 
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

//class select
const header = document.querySelector(".header");
console.log(header);

//class select
const navItem = document.querySelector(".nav-item");
console.log(navItem);

//class select
const navItem1 = document.querySelectorAll(".nav-item");
console.log(navItem1);

