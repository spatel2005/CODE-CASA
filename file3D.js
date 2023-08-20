//CHANGE THE STYLES OF ELEMENT


//const mainHeading = document.querySelector("#main-heading");
//console.log(mainHeading);



//other way to select :  ek <div> uski class hai headline aur <div>ke andr jo element h un mein se <h2>select krna hai...
const mainheading = document.querySelector("div.headline h2");//div.classname gap jo element krnaa h vh {only div likhne seupre page mein jtne bhi div hote unsbko ignore krke sbse phale bala div deta }
//console.log(mainheading.style);//style ek property h
mainheading.style.color = "yellow";
mainheading.style.backgroundColor = "pink";
mainheading.style.border = "3px solid blue"