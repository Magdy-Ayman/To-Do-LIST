//CRUD 



// start with get we all need
let InputTask = document.getElementById('task-text')
let SubmitBtn = document.getElementById('task-submit')
let Tasks = document.querySelector('#tasks')


// we can take each task but to easy to us we will
// use function inside it object have value which user add it
// Create
let AllTasks = [];
let rendertask = () => {
    let Newtask = {
        task: InputTask.value
    };

    AllTasks.push(Newtask);
    InputTask.value = ''
    // console.log(AllTasks);
    ShowAllTasks()

}
//Delete
let DeleteTask = (index) => {
    AllTasks.splice(index, 1)
    ShowAllTasks()
}



let EditTask = (index) => {
    EditedInput = document.querySelector('#tasks input');
    EditedBtn = document.querySelector('.btn-edit');
    EditedBtn = document.querySelector('.btn-edit');
    EditedInput[index].removeAttribute("readonly");
    EditedBtn[index].innerText = 'update';
    EditedBtn[index].setAttribute('onclick', `Update(${index})`);
    EditedBtn[index].classList.replace('Edit ', 'Update');
}

//Read
let ShowAllTasks = () => {
    Tasks.innerHTML = " "

    AllTasks.forEach((current, index) => {

        Tasks.innerHTML +=
            `
        <div id="tasks">
            <div class="row">
                <input type="text" value="${current.task}" readonly class="white">
                <div class="text-center">
                    <button onclick ="EditTask(${index})" class="btn-edit ">Edit</button>
                    <button  onclick ="DeleteTask(${index})" class="btn-delete">delete</button>
                </div>
            </div>
        </div>
        
        `
        /*
        current here point to The current element being processed in the array.
        index (optional): The index of the current element being processed.
        task key have value of input 

        */





    })








}

















SubmitBtn.addEventListener('click', rendertask)