/// Array to store todo items
/// Each item will be an object with 'task' and 'dueDate' properties
let todoList = [];

function validateForm() {
    const todoInput = document.getElementById('todo-input').value.trim();
    const dateInput = document.getElementById('date-input').value;

    // Check if inputs are empty
    if (todoInput === '' || dateInput === '') {
        alert('Please enter a todo item and a due date.');
    } else {
        // Add the todo item to the list
        addTodo(todoInput, dateInput);
        // Clear the input fields
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
    }
}

function addTodo(todo, date) {
    // Create a todo item object
    const todoItem = {
        task: todo,
        date: date,
        completed: false // Initially set completed to false
    };

    // Add the todo item to the todoList array
    todoList.push(todoItem);
    // Display the updated todo list
    displayTodos();
}

function displayTodos() {
    // Get the todo list element from the DOM
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the list before displaying

    // Loop through the todoList array and create list items
    todoList.forEach((item, index) => {
        todoListElement.innerHTML += `<div class="text-gray-700 text-xl ${item.completed ? 'line-through' : ''}">${item.task} (${item.date})</div>`;
    });
}

function clearTodos() {
    // Clear the todoList array
    todoList = [];
    // Clear the displayed todo list
    displayTodos();
}