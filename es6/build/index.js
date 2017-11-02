// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

<<<<<<< HEAD
// render method turns/renders JavaScript into HTML elements

=======
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(title, done) {
        _classCallCheck(this, Task);

        this.title = title;
        this.done = done;
    }

    _createClass(Task, [{
        key: "render",
        value: function render() {
            var _this = this;

            var li = document.createElement("li");
            li.textContent = this.title;
            if (this.done) {
                li.classList.add("done");
            }
            li.addEventListener("click", function () {
<<<<<<< HEAD
                // lambda functions. this is lexically scoped. "this" inside the lambda functions the same way as you would call this outside of the function
=======
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
                console.log(_this);
                _this.done = !_this.done;
                li.classList.toggle("done");
            });
            return li;
        }
    }]);

    return Task;
}();

var TaskList = function () {
    function TaskList(tasks) {
        _classCallCheck(this, TaskList);

        this.tasks = tasks;
    }

    _createClass(TaskList, [{
        key: "addTask",
        value: function addTask(task) {
            this.tasks.push(task);
        }
    }, {
        key: "purgeCompleted",
        value: function purgeCompleted() {
            this.tasks = this.tasks.filter(function (task) {
                return !task.done;
<<<<<<< HEAD
            }); // task is the parameter, second expression will be evaluated and returned
            // this.tasks = this.tasks.filter(function(task) {
            //     return !task.done;
            // })
=======
            });
            //equivallent to this:
            // this.tasks = this.tasks.filter(function(task) {
            //     return !task.done;
            // });
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
        }
    }, {
        key: "render",
        value: function render() {
            var ul = document.createElement("ul");
            this.tasks.forEach(function (task) {
                ul.appendChild(task.render());
            });
            return ul;
        }
    }]);

    return TaskList;
}();

var Button = function () {
    function Button(caption) {
        var styleClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "btn-primary";

        _classCallCheck(this, Button);

<<<<<<< HEAD
        // btn-primary is the default value for styleClass
=======
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
        this.caption = caption;
        this.styleClass = styleClass;
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var button = document.createElement("button");
            button.textContent = this.caption;
<<<<<<< HEAD
            button.classList.add("btn", this.styleClass); // add style classes
=======
            button.classList.add("btn", this.styleClass);
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
            return button;
        }
    }]);

    return Button;
}();

var App = function () {
    function App(parentElem, taskList) {
        _classCallCheck(this, App);

        this.parentElem = parentElem;
        this.taskList = taskList;
        this.purgeButton = new Button("Purge Completed");
        this.cancelButton = new Button("Cancel", "btn-secondary");
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            this.parentElem.textContent = "";
<<<<<<< HEAD
            this.parentElem.appendChild(this.taskList.render());
=======

            this.parentElem.appendChild(this.taskList.render());

>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
            var btn = this.parentElem.appendChild(this.purgeButton.render());
            btn.addEventListener("click", function () {
                _this2.taskList.purgeCompleted();
                _this2.render();
            });
            this.parentElem.appendChild(this.cancelButton.render());
        }
    }]);

    return App;
}();

var taskList = new TaskList([new Task("Learn ES6 Features"), new Task("Buy Dr Stearns a Tesla"), new Task("Buy the iSchool a building")]);
var app = new App(document.querySelector("#app"), taskList);
app.render();
//# sourceMappingURL=index.js.map