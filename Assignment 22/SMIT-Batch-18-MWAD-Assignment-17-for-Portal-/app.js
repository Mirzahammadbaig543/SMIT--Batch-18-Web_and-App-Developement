var todoInput = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");

function addTodo() {
  if (todoInput.value === "") {
    alert("Please enter a todo");
    return;
  }

  todoList.innerHTML =
    todoList.innerHTML +
    "<li>" +
    todoInput.value +
    " <button onclick='editTodo(this)'>Edit</button>" +
    " <button onclick='deleteTodo(this)'>Delete</button>" +
    "</li>";

  todoInput.value = "";
}

function deleteTodo(btn) {
  btn.parentNode.innerHTML = "";
}

function editTodo(btn) {
  var oldText = btn.parentNode.firstChild.nodeValue;
  var newText = prompt("Edit your todo", oldText);

  if (newText !== "" && newText !== null) {
    btn.parentNode.firstChild.nodeValue = newText;
  }
}

function deleteAll() {
  todoList.innerHTML = "";
}
