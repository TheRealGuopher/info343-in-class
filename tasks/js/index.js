// @ts-check
"use strict";

<<<<<<< HEAD
//TODO: let's implement a dynamic task list!

=======
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
let state = {
    tasks: [
        {title: "Learn Event Handling"},
        {title: "Buy Dr Stearns a Tesla"},
        {title: "Buy the iSchool a building"}
    ]
};

function renderTask(task) {
    let li = document.createElement("li");
    li.textContent = task.title;
    if (task.done) {
        li.classList.add("done");
    }
<<<<<<< HEAD
=======

>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
    li.addEventListener("click", function() {
        task.done = !task.done;
        li.classList.toggle("done");
    });
<<<<<<< HEAD
=======

>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
    return li;
}

function render(state) {
    let ul = document.querySelector(".tasks");
    ul.textContent = "";
    for (let i = 0; i < state.tasks.length; i++) {
        ul.appendChild(renderTask(state.tasks[i]));
    }
}

render(state);

document.querySelector("#purge")
    .addEventListener("click", function() {
<<<<<<< HEAD
        // console.log("purge button clicked");
=======
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
        state.tasks = state.tasks.filter(function(task) {
            return !task.done;
        });
        render(state);
    });

document.querySelector("#new-task-form")
    .addEventListener("submit", function(evt) {
        evt.preventDefault();
        let input = /** @type {HTMLInputElement} */ (document.querySelector("#new-task-title"));
        let task = {title: input.value};
        state.tasks.push(task);
        input.value = "";
        render(state);
    });