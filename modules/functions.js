/* eslint-disable max-len */
let toDoList = [];

// function to add the set tasks to local storage
const addToLocalStorage = (task) => {
  toDoList = JSON.parse(localStorage.getItem('tasks: '));
  if (toDoList == null) { toDoList = []; }
  toDoList.push(task);
  localStorage.setItem('tasks: ', JSON.stringify(toDoList));
};

// const inputVal = document.getElementById('add');

// function for the add button
function taskDisplay(todos) {
  const addList = document.querySelector('.list-container');
  const listDiv = document.createElement('div');
  const listInput = document.createElement('input');
  listDiv.className = 'task';

  const taskValue = document.createElement('input');
  taskValue.setAttribute('type', 'checkbox');
  const ellipsis = document.createElement('span');
  const deleteBtn = document.createElement('span');

  ellipsis.innerHTML = '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>';
  deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  deleteBtn.className = 'remove-btn';
  listInput.value = todos.description;
  listInput.className = 'task-value';
  taskValue.checked = todos.completed;

  listDiv.appendChild(taskValue);
  listDiv.appendChild(listInput);
  listDiv.appendChild(ellipsis);
  listDiv.appendChild(deleteBtn);
  addList.appendChild(listDiv);

  taskValue.className = 'checkTask';
}
// function to get tasks from local Storage and display from Storage
const getTaskFromLocStg = () => {
  toDoList = JSON.parse(localStorage.getItem('tasks: '));
  if (toDoList !== null) {
    toDoList.forEach((todos) => {
      taskDisplay(todos);
    });
  } else {
    toDoList = [];
  }
};

const taskArrayofObjects = (todos) => {
  const task = {
    description: String,
    completed: false,
    index: Number,
  };
  task.description = todos;
  task.index = toDoList.length;
  addToLocalStorage(task);
  taskDisplay(task);
};

// function to delete a task from the list
const removeTask = (index) => {
  const tasksElement = document.querySelectorAll('.task');
  toDoList.splice(index, 1);
  tasksElement[index].remove();
  for (let i = index + 1; i < toDoList.length; i += 1) {
    toDoList[i].index -= 1;
  }
  localStorage.setItem('tasks: ', JSON.stringify(toDoList));
};

// Function to modify each task
const editTask = (todos, index) => {
  toDoList[index].description = todos;
  localStorage.setItem('tasks: ', JSON.stringify(toDoList));
};

const highlightTask = (index) => {
  const moveBtns = document.querySelectorAll('.fa.fa-ellipsis-h');
  const deleteBtns = document.querySelectorAll('.fa.fa-trash');
  const activeTasks = document.querySelectorAll('.task.active');
  const tasksElt = document.querySelectorAll('.task');
  activeTasks.forEach((activeTask) => {
    activeTask.classList.remove('active');
  });
  moveBtns.forEach((btn, index) => {
    btn.classList.remove('active');
    deleteBtns[index].classList.remove('active');
  });

  tasksElt[index].classList.toggle('active');
  moveBtns[index].classList.toggle('active');
  deleteBtns[index].classList.toggle('active');
};

// function for the clear completed button, hint: its not functional yet
const clearCompleted = (index) => {
  const checkedTask = document.querySelectorAll('.checkedTask');
  checkedTask.forEach((task) => {
    if (task.completed === true) {
      removeTask(index);
    }
  });
};

export {
  highlightTask, clearCompleted, editTask, removeTask, addToLocalStorage, taskDisplay, getTaskFromLocStg, taskArrayofObjects,
};
