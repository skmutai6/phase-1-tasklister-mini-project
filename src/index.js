document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default behavior
    const taskName = document.getElementById('new-task-description');
    const taskDescription = taskName.value;

    // new task 
    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;

    // list your tasks
    taskList.appendChild(newTask);

  });
});



