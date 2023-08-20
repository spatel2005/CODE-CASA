//project2:----->html file complet bane ke bd adddtodo ke aandr kuch bhi likhne pr DONE REMOVE kr ske
//yh krne ke liye hum addtodo (h2 ke just neeche bale pr) pr submit event lga skte h dekho kse.
//select h2 ke neeche bala
//iske bd event add krdo todoForm pr,CALLBACK FUNCTION
//[ console.log("form submitted"); ] ittna krne pr addtodo pr click kro yha enterkrke submit krogi to page refer hoga too yha na ho iske kiye liye use this :------>
//e.preventDefault();  :-------->most important
//isko bd jo m likhu vh console mein print ho
//then select addtodo type"text""
// jse hi user addtodo pr click ho jo uske aandr likha ho vh print ho jye console mein aur addto pr se remove hojye... 
//jse hi user addtodo pr click kre to do this do that list ke aandr ek nayyi [li]item add ho jye....
//to m ek nayyi [li]item banuga
//iske bd span mein do this do thst ke place pr placeholderkrdo
//then newLi uska innerhtml set krna h
//select------>todoList -----> humko ul ke aandr jo li h usmein add krna h isliye
//todolist pr eventlistner add krdo done aur remove krne keliye jo likhn ke bd do this that do ke neeche aagya h usko
//remove krne pr list hi remove hojjye 



const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
//console.log(todoIput)
const todoList = document.querySelector(".todo-list");//humko ul ke aandr jo li h usmein add krna h isliye

//console.log(todoForm);
todoForm.addEventListener("submit" , (e)=>{
    //console.log("form submitted");
    e.preventDefault();
    //console.log(" submit event");//taki pata chle kaam ho rha h page refer nh ho rha h
    const newTodoText = todoInput.value;//yh nayyi[li] add krne keliye kiya h commentout ....console.log(todoIput.value);//jo likha h vh console mein print hoga
    const newLi = document.createElement("li");//nayyi [li]
    const newLiInnerHtml = `
            <span class="text">${newTodoText}</span>
            <div class="todo-button"> 
                     <button class="todo-btn done">DONE</button> 
                    <button class="todo-btn remove">REMOVE</button>
            </div>`;
                             
     newLi.innerHTML = newLiInnerHtml;//set innerhtml 
     //console.log(newLi);
     todoList.append(newLi);//li mein add krne keliye  eg shivam likha too shivam do thi that do ke neeche add ho jye                      
    todoInput.value = "";//clear krne keliye
});

//todolist pr eventlistner add kiya h
todoList.addEventListener("click", (e)=>{
    //check if user click on done button
    if(e.target.classList.contains("remove")){
        //console.log("you want to remove something ?");
    const targetedLi = e.target.parentNode.parentNode;//this1
    //console.log(targetedLi);
    targetedLi.remove();//this1 for remove krne keliye
    }
    if(e.target.classList.contains("done")){
        //console.log("great!!!!!")
        const lispan = e.target.parentNode.previousElementSibling;//this
        lispan.style.textDecoration = "line-through";//this krne pr likha huya add krne pr shivam pr center se line bn jaa rhi h
    }
});


