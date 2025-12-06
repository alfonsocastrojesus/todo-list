const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

addTaskBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (!taskText) return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  todoInput.value = "";
  console.log(tasks);
});
// the above code , gets the needed elements, creates a variable with an empty array, creates a function to check for user input, if text, then creates an object and save it to the tasks array (push) then clears the input field and console log the object in console , if the input field is empty , then just return nothing , the function stops. trim method clears the spaces after text in user input, date now creates a datestamp an unique number.
