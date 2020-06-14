var todos = ["keep study"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listToDo();
    } else if (input === "new") {
        newToDo();
    } else if (input === "delete") {
        deleteToDo();
    } else {
        console.log("Invalid input");
    }
    input = prompt("What would you like to do?");
}

console.log("You have quit the app.");

function listToDo() {
    // forEach 有三个参数，element，index，array本身
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    })
    console.log("---");
}

function newToDo() {
    input = prompt("Enter new a todo");
    todos.push(input)
    console.log("Added a new todo");
}

function deleteToDo() {
    // ask for the index of todo to be deleted
    input = prompt("Enter the index of todo needs to be deleted");
    // delete the specific todo by splice()
    // splice(index, numer) 有两个参数，index开始删除的位置，number要删除几个
    todos.splice(input, 1);
    console.log("Item " + input + " deleted");
}