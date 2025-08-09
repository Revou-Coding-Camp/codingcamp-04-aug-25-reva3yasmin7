/// Array to store todo items
/// Each item will be an object with 'task' and 'dueDate' properties
let todoList = [];

function validateForm() {
    const todoInput = document.getElementById('todo-input').value.trim();
    const startDateInput = document.getElementById('start_date-input').value;
    const dueDateInput = document.getElementById('due_date-input').value;

    // Check if inputs are empty
    if (todoInput === '' || startDateInput === '' || dueDateInput === '') {
        alert('Please enter a todo item, start date, and due date.');
        if (startDateInput < new Date().toISOString().split('T')[0]) {
            alert('Please enter a valid start date.');
        }
    } else {
        // Add the todo item to the list
        addTodo(todoInput, startDateInput, dueDateInput);
        // Clear the input fields
        document.getElementById('todo-input').value = '';
        document.getElementById('start_date-input').value = '';
        document.getElementById('due_date-input').value = '';
        document.getElementById('is_complete-input').value = '';
    }
}

function addTodo(todo, date) {
    // Create a todo item object
    const todoItem = {
        task: todo,
        start_date: date,
        due_date: date,
        completed: false // Initially set completed to false
    };

    // Add the todo item to the todoList array
    todoList.push(todoItem);
    // Display the updated todo list
    updateTodos();
}

function displayTodos() {
    // Get the todo list element from the DOM
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the list before displaying

    // Loop through the todoList array and create list items
    todoList.forEach((item, index) => {
        todoListElement.innerHTML += `<div class="text-gray-700 text-xl ${item.completed ? 'line-through' : ''}">${item.task} Start: ${item.start_date} Due: ${item.due_date} </div>`;
    });
}

function updateTodos() {
    // Get the todo list element from the DOM
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the list before updating
    // Loop through the todoList array and create list items
    todoList.forEach((item, index) => {
        todoListElement.innerHTML += `<div class="text-gray-700 text-xl ${item.completed ? 'line-through' : ''}">${item.task} Start: ${item.start_date} Due: ${item.due_date} </div>`;
    });
}

function filterTodos(filter) {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the list before filtering

    // Filter the todoList array based on the selected filter
    const filteredTodos = todoList.filter(item => {
        if (filter === 'completed') {
            return item.completed;
        } else if (filter === 'incomplete') {
            return !item.completed;
        } else if (filter === 'today') {
            return item.date === new Date().toISOString().split('T')[0];
        } else if (filter === 'upcoming') {
            return item.date > new Date().toISOString().split('T')[0];
        }
        else if (filter === 'overdue') {
            return item.date < new Date().toISOString().split('T')[0];
        }
        else if (filter === 'reset') {
            return true; // Show all todos by default
        }

        return true; // Show all todos by default
    });

    // Display the filtered todo list
    filteredTodos.forEach(item => {
        todoListElement.innerHTML += `<div class="text-gray-700 text-xl ${item.task} Start: ${item.start_date} Due: ${item.due_date} </div>`;
    });
}

function clearTodos() {
    // Clear the todoList array
    todoList = [];
    // Clear the displayed todo list
    displayTodos();
}