//GET AND SET ATTRUBUTES

//get
//eg1 
const link = document.querySelector("a");//jitne bhi anchr tag honge to sbko ignore krke first bala ki browser consider krega
console.log(link.getAttribute("href"));
//set attributes value
//link.setAttribute("href" , "https://codprog.com");
//console.log(link.getAttribute("href"))

//eg2
const input = document.querySelector(".form-todo input" );
console.log(input.getAttribute("type"));