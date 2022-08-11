/* eslint-disable max-len */

import './index.css';
import {
  removeTask, editTask, highlightTask, getTaskFromLocStg, taskArrayofObjects, clearCompleted,
} from '../modules/functions.js';

window.onload = getTaskFromLocStg();

// Event Handlers

// This is for adding the value from input to display
const displayTaskVal = document.querySelector('#add');
displayTaskVal.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (displayTaskVal.value !== '') {
      e = taskArrayofObjects(displayTaskVal.value);
      displayTaskVal.value = '';
    } else {
      e.preventDefault();
    }
  }
});

// Event Handlers for the remove and highlight functions
document.addEventListener('click', (e) => {
  if (!(e.target.matches('.checkTask') || e.target.matches('.fa-trash'))) {
    return;
  }
  if (e.target.matches('.checkTask')) {
    const tasks = document.querySelectorAll('.checkTask');
    tasks.forEach((task, index) => {
      if (e.target === task) {
        highlightTask(index);
      }
    });
  } else {
    const deleteBtn = document.querySelectorAll('.fa-trash');
    deleteBtn.forEach((btn, index) => {
      if (e.target === btn) {
        removeTask(index);
      }
    });
  }
});

// Event handler for the edit task function
document.addEventListener('change', (e) => {
  if (!e.target.matches('.task-value')) {
    return;
  }
  const allTasks = document.querySelectorAll('.task-value');
  allTasks.forEach((task, index) => {
    if (e.target === task) {
      editTask(task.value, index);
    }
  });
});

// Event Handler for the clearCompleted function
const clearAll = document.querySelector('.clear-btn');
clearAll.addEventListener('click', () => {
  const taskValue = document.querySelector('.checkTask');
  if (taskValue.checked === true) {
    clearCompleted();
  }
});
