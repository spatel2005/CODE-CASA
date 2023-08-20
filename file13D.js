//2)
//const btn = document.querySelector(".btn-headline");
//console.dir(btn); 
//btn.onclick = function(){
  //  console.log("you click me !!!!")
//}

//3
//const btn = document.querySelector(".btn-headline");
//function clickMe(){
   // console.log("you clicked me !");
//}
//btn.addEventListener("click" , clickMe);

//isko aise bhi kr skte h
//const btn = document.querySelector(".btn-headline");
//btn.addEventListener("click" , function clickMe(){
   // console.log("you clicked me !");
//});


//isko aise bhi kr skte h using arrow function
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click" , ()=>{
    console.log("  arrow function you clicked me !");
});