//CRUD Operation Task {add alert if input empty, validation , Add improvements to UI , Add button to First section 'soon'}
// start with get we all need
let InputTask = document.getElementById("task-text");
let SubmitBtn = document.getElementById("task-submit");
let Tasks = document.querySelector("#tasks");

// we can take each task but to easy to us we will
// use function inside it object have value which user add it
// Create
let AllTasks = [];
let rendertask = () => {
  if (InputTask.value == "") {
    alert("please fill the task");
  } else {
    let Newtask = {
      task: InputTask.value,
    };

    AllTasks.push(Newtask);
    InputTask.value = "";

    // console.log(AllTasks);
    ShowAllTasks();
  }
};
/*// set time out
// let ToDoClick = document.querySelectorAll("#timeToDo");
let span = document.querySelectorAll("span");
// console.log(ToDoClick);
span.forEach(span =>{
  span.addEventListener("mouseenter", () => {
  
    setInterval(() => {
      span.style.opacity = 1;
    }, 2000);
  });
})
*/
const spans = document.querySelectorAll("span");
let currentIndex = 0;

function showNextSpan() {
  if (currentIndex < spans.length) {
    spans[currentIndex].style.opacity = 1; // Show the current span
    currentIndex++; // Move to the next span
    setTimeout(showNextSpan, 2000); // Wait for 2 seconds and show the next span
  }
}


// Start the process by calling the function
spans.addEventListener('click',()=>{
  showNextSpan();
})


//Delete
let DeleteTask = (index) => {
  AllTasks.splice(index, 1);
  ShowAllTasks();
};
// add scroll button
let srrollBtn = document.getElementById("scroller");
window.onscroll = () => {
  if (scrollY >= 200) {
    srrollBtn.style.display = "block";
  } else {
    srrollBtn.style.display = "none";
  }
};
srrollBtn.onclick = () => {
  scroll({
    top: 0,
    behavior: "smooth",
  });
};

let EditTask = (index) => {
  let TaskInput = document.querySelectorAll(".InptHV");
  let TaskBtn = document.querySelectorAll(".btn-edit");
  TaskInput[index].removeAttribute("readonly");
  TaskBtn[index].innerText = "Update";
  TaskBtn[index].setAttribute("onclick", `Updatetask(${index})`);
};

let Updatetask = (index) => {
  let TaskInput = document.querySelectorAll(".InptHV");
  let EditBtn = document.querySelectorAll(".btn-edit");
  TaskInput[index].setAttribute("readonly", "readonly");
  AllTasks[index].task = TaskInput[index].value;
  EditBtn[index].innerText = "Edit";
  EditBtn[index].setAttribute("onclick", `EditTask(${index})`);
};
// // delete all tasks button
// let delallTasks = () => {
//     AllTasks = [];
//         ShowAllTasks()
// }
// let DAllTasks = document.getElementById('DAll-Tasks');
//         // console.log(DAllTasks)
//     DAllTasks.addEventListener('click', delallTasks)

//Read
let ShowAllTasks = () => {
  Tasks.innerHTML = " ";

  AllTasks.forEach((current, index) => {
    Tasks.innerHTML += `
        <div id="tasks">
            <div class="row">
                <input type="text" value="${current.task}" readonly class="InptHV" id="in-up-btn">
                <div class="text-center">
                    <button onclick ="EditTask(${index})" class="btn-edit">Edit</button>
                    <button  onclick ="DeleteTask(${index})" class="btn-delete">delete</button>
                </div>
            </div>
        </div>
        
        `;
    /*
        current here point to The current element being processed in the array.
        index (optional): The index of the current element being processed.
        task key have value of input 

        */
  });
};
SubmitBtn.addEventListener("click", rendertask);
