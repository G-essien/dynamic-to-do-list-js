document.addEventListener('DOMContentLoaded', function (){
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new task list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // Using classList.add to add the class name

        // Add click event listener to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append remove button to the task list item
        listItem.appendChild(removeButton);

        // Append the task list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    };

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
