let taskHTML = document.createElement('div');
taskHTML.classList.add("task");
taskHTML.insertAdjacentHTML("afterBegin","<div class='task__title'></div><a href='#' class='task__remove'>&times;</a>");
// console.log(taskHTML);

let tasksList = document.getElementById("tasks__list");
let tasksInput = document.getElementById("task__input");

function addTask() {
    tasksList.appendChild(taskHTML);

    let taskTitle = document.getElementsByClassName('task__title');
    taskTitle[0].textContent = tasksInput.value;

    tasksInput.value = '';
}

tasksInput.addEventListener('change', addTask);