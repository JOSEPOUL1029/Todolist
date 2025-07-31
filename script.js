const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value==="") {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //the function that is called bellow for saving the entered
}
// for checking the marked one using js programming languages is very useful important
 listContainer.addEventListener("click",function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);
// for saving the data to the local storage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
listContainer.innerHTML =localStorage.getItem("data");
}
//showTask(); //call function for the task
  showTask(); 