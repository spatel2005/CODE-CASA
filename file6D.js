 //LOOP
 //array like object ----> indexing,length property

 //const navItems = document.getElementsByTagName("a");//HTMLCollection gives
 
 //console.log(navItems);


//we cant use forEach method to iterate through HTMLCollection
//simple for loop
//for of loop
//forEach


//for(let i=0; i< navItems.length;i++){
 //   console.log(navItems[i]);

  // const navItem = navItems[i];
  //navItem.style.backgroundColor = "#fff";
   //navItem.style.Color = "green";

//}


//node list
//node ke aandr 3no loop use kr skte h 
//simple for loop
//for of loop
//forEach


let navItems = document.querySelectorAll("a")
//console.log(navItems);
//for(let i=0; i< navItems.length;i++){
      // console.log(navItems[i]);
   
      //const navItem = navItems[i];
      //navItem.style.backgroundColor = "#fff";
      //navItem.style.Color = "blue";
   
   //}

   //for of
   for(let navItem of navItems){
    navItem.style.backgroundColor = "#fff";
    navItem.style.Color = "green";
   }