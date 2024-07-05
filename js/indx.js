const form = document.getElementById("form");
const button = document.getElementById("btn");
const cards = document.getElementById("cards");
const task = document.getElementById("task");
const btn1 = document.getElementById("btn1");
const btn2 =document.getElementById("btn2");
const container = document.getElementById("container");

function data(task) {
    return `
        <div class="card">
            <h1 class="task_name">${task.value}</h1>
            <button id="btn1" class="btn">Edit</button>
            <button id="btn2"  class="btn1">Delete</button>
        </div>
    `
}

btn1 && btn1.addEventListener('click', function() {
    cards.style.display = "none";
})

button && button.addEventListener('click', function(event) {
    event.preventDefault();

    let input = data(task);
    cards.innerHTML += input;
})


localStorage.setItem('cards', JSON.stringify("task"))