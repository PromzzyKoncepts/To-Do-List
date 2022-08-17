/**
 * @jest-environment jsdom
 */

import {
  allToDos,
  editTask,
  removeTask,
  addToLocalStorage,
  taskDisplay,
  getTaskFromLocStg,
  taskArrayofObjects,
} from '../functions.js';

jest
  .spyOn(document, 'querySelector')
  .mockImplementation((selector) => document.createElement('div'));

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('check for add-delete operations', () => {
  test('properly remove task items', () => {
    document.body.innerHTML = `<div class="tasks-container">
    <div class="task">
      <div class="task-content">
        <input type="checkbox"><input class="checkTask" type="text" value="task-a">
      </div>
        <i class="fa fa-trash" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>
    <div class="task">
      <div class="task-content">
        <input type="checkbox"><input class="checkTask" type="text" value="task-b">
      </div>
      <i class="fa fa-trash" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>
    <div class="task">
      <div class="task-content">
        <input type="checkbox"><input class="checkTask" type="text" value="task-c">
      </div>
      <i class="fa fa-trash" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>
  </div>`;
    taskArrayofObjects('task-a');
    taskArrayofObjects('task-b');
    taskArrayofObjects('task-c');
    const indexOfRemovedTask = 1;
    removeTask(indexOfRemovedTask);
    let tasksList = allToDos();
    let tasksValueElt = document.querySelectorAll('.checkTask')[indexOfRemovedTask];
    expect(tasksList[indexOfRemovedTask].description).toBe('task-c');
    expect(tasksList[indexOfRemovedTask].index).toEqual(2);
    expect(tasksValueElt.value).toBe('task-c');

    removeTask(indexOfRemovedTask);
    tasksList = allToDos();
    tasksValueElt = document.querySelectorAll('.checkTask')[indexOfRemovedTask - 1];
    expect(tasksList[indexOfRemovedTask - 1].description).toBe('task-a');
    expect(tasksList[indexOfRemovedTask - 1].index).toEqual(
      indexOfRemovedTask,
    );
    expect(tasksValueElt.value).toBe('task-a');
  });

  test('should add task to local storage', () => {
    let tasksList = allToDos();
    const task = {
      description: 'task1',
      completed: false,
      index: 0,
    };
    addToLocalStorage(task);
    tasksList = allToDos();
    expect(tasksList.length).toBeGreaterThanOrEqual(0);
  });

  test('properly get list of tasks array of objects', () => {
    const tasksList = allToDos();
    expect(tasksList.length).toBeGreaterThanOrEqual(0);
  });

  test('properly adds the tasks to the page', () => {
    const task = {
      description: 'task1',
      completed: false,
      index: 0,
    };
    taskDisplay(task);
    const tasksContainerElt = document.querySelectorAll('.task');
    expect(tasksContainerElt).toHaveLength(1);
  });

  test('properly load tasks that are in the local storage', () => {
    getTaskFromLocStg();
    const tasksList = allToDos();
    expect(tasksList.length).toBeGreaterThanOrEqual(0);
  });

  test('properly change the task', () => {
    const modifiedTask = 'clean the dishes';
    taskArrayofObjects('finish the unit-testing project');
    editTask(modifiedTask, 0);
    const tasksList = allToDos();
    expect(tasksList[0].description).toBe(modifiedTask);
  });
});
