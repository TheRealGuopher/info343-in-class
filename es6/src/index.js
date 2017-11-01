// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

// render method turns/renders JavaScript into HTML elements

class Task {
    constructor(title, done) {
        this.title = title;
        this.done = done;
    }

    render() {
        let li = document.createElement("li");
        li.textContent = this.title;
        if (this.done) {
            li.classList.add("done");
        }
        li.addEventListener("click", () => { // lambda functions. this is lexically scoped. "this" inside the lambda functions the same way as you would call this outside of the function
            console.log(this);
            this.done = !this.done;
            li.classList.toggle("done"); 
        });
        return li;
    }
}

class TaskList {
    constructor(tasks) {
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    purgeCompleted() {
        this.tasks = this.tasks.filter(task => !task.done); // task is the parameter, second expression will be evaluated and returned
        // this.tasks = this.tasks.filter(function(task) {
        //     return !task.done;
        // })
    }

    render() {
        let ul = document.createElement("ul");
        this.tasks.forEach(task => {
            ul.appendChild(task.render());
        });
        return ul;
    }
}

class Button {
    constructor(caption, styleClass = "btn-primary") { // btn-primary is the default value for styleClass
        this.caption = caption;
        this.styleClass = styleClass;
    }

    render() {
        let button = document.createElement("button");
        button.textContent = this.caption;
        button.classList.add("btn", this.styleClass); // add style classes
        return button;
    }
}

class App {
    constructor(parentElem, taskList) {
        this.parentElem = parentElem;
        this.taskList = taskList;
        this.purgeButton = new Button("Purge Completed");
        this.cancelButton = new Button("Cancel", "btn-secondary");
    }

    render() {
        this.parentElem.textContent = "";
        this.parentElem.appendChild(this.taskList.render());
        let btn = this.parentElem.appendChild(this.purgeButton.render());
        btn.addEventListener("click", () => {
            this.taskList.purgeCompleted();
            this.render();
        });
        this.parentElem.appendChild(this.cancelButton.render());
    }
}

let taskList = new TaskList([
    new Task("Learn ES6 Features"),
    new Task("Buy Dr Stearns a Tesla"),
    new Task("Buy the iSchool a building")
]);
let app = new App(document.querySelector("#app"), taskList);
app.render();