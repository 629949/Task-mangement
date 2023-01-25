// Function to add a task to the list
function addTask() {
  // Get the task entered by the user
  var task = document.getElementById("new-task").value;
  // Check if the task is not empty
  if(task) {
    // Create a new list item
    var newTask = document.createElement("li");
    // Add the task to the list item
    newTask.textContent = task;
    // Append the list item to the incomplete-tasks list
    document.getElementById("incomplete-tasks").appendChild(newTask);
    // Clear the task input
    document.getElementById("new-task").value = "";
    // Add event listeners to the new task
    newTask.addEventListener("click", markAsCompleted);
    // Add the task to local storage
    addTaskToLocalStorage(task);

  //console.log("new-task");
  }
}

// Function to mark a task as completed
function markAsCompleted() {
  this.classList.add("completed-task");
  document.getElementById("completed-tasks").appendChild(this);

  //console.log("completed-tasks");
}

// Function to add a task to local storage
function addTaskToLocalStorage(task) {
  // Get the existing tasks from local storage
  var tasks = localStorage.getItem("tasks");
  // If tasks is null, create an empty array
  if (!tasks) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasks);
  }
  // Add the new task to the array
  tasks.push(task);
  // Store the updated tasks array in local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  //console.log("task");
}

// Attach the addTask function to the add task button
document.getElementById("push").addEventListener("click",addTask);

// Function to load existing tasks from local storage
function loadTasks() {
  // Get the existing tasks from local storage
  var tasks = localStorage.getItem("tasks");
  // If tasks is not null
  if (tasks) {
    tasks = JSON.parse(tasks);
    // Loop through the tasks array
    for (var i = 0; i < tasks.length; i++) {
      // Create a new list item
      var newTask = document.createElement("li");
      // Add the task to the list item
      newTask.innerHTML = tasks[i];

      //console.log("Task");

      // Append the list item to the incomplete-tasks list
      document.getElementById("incomplete-tasks").appendChild(newTask);
      // Add event listeners to the new task
      newTask.addEventListener("click", markAsCompleted);
      /*window.onload = function(){
        document.getElementById("push").addEventListener("click",addTask);
     }*/
     
    }

}

  }

