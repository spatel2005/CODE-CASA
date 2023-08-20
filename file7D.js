const headline = document.querySelector(".headline");
//console.log(headline.innerHTML);
headline.innerHTML = "<h1>Inner html changed</h1>";
headline.innerHTML += "<button class = \"btn\"> Learn More </button>";//=+used for jo phle ha uske sth button add krna yh krne ke bd (Inner html changed) bhi show hoga aur (button) bhi aagr {+} nh use krte to bsss button show hota (Inner html changed)nh show hota
console.log(headline.innerHTML);