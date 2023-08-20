//1)
//find kittni class h seection tag ke pss
//const section = document.querySelector(".todo-section");
//console.log(section.classList);

//2)
//class dene h JS se ,sbse phle style.css mein ek class bana leta hu [.bg-dark]
//const section = document.querySelector(".todo-section");//select kiya h section kyu kiclass add krni h
//section.classList.add('bg-dark');//class add ki hai

//3)
//secttion mein 3 class h container class remove krni h
//const section = document.querySelector(".todo-section");//select kiya h section kyu ki container class remove  krni h
//section.classList.remove("container");

//4)
//koi class exist kr rhi h ki nhi
//const section = document.querySelector(".todo-section");//select kiya h section kyu ki container class remove  krni h
//const ans= section.classList.contains("container");//yh ture false dega isliye store krna hoga{container class present ki nh check kr rhye h}
//console.log(ans);

//5)
// toggle property ------> agr { bg - dark} give class phle se add h to remove krdega ,,,,agr nh h to add krdega
const section = document.querySelector(".todo-section");
section.classList.toggle("bg-dark");