/**
 * @jest-environment jsdom
 */

import {
  allToDos,
  taskArrayofObjects,
  setTasksList,
  clearCompleted,
} from '../functions.js';

import updateTaskStatus from '../clearCompleted.js';

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

jest
  .spyOn(document, 'querySelector')
  .mockImplementation(() => document.createElement('div'));

describe('test for update checked and clear completed functions', () => {
  test('update the item\'s completed status', () => {
    taskArrayofObjects('task-1');
    taskArrayofObjects('task-2');
    taskArrayofObjects('task-3');
    const indexOfFinishedTask = 1;

    updateTaskStatus(indexOfFinishedTask);
    let tasksList = allToDos();
    expect(tasksList[indexOfFinishedTask].completed).toBe(true);

    updateTaskStatus(indexOfFinishedTask);
    tasksList = allToDos();
    expect(tasksList[indexOfFinishedTask].completed).toBe(false);
  });
  test('clear all checked boxes', () => {
    document.body.innerHTML = '<div class="tasks-container"></div>';
    taskArrayofObjects('task-a');
    taskArrayofObjects('task-b');
    taskArrayofObjects('task-c');
    const tasksList = allToDos();
    tasksList[0].completed = true;
    tasksList[1].completed = true;
    setTasksList(tasksList);
    clearCompleted();
    const tasksElt = document.querySelectorAll('.task');
    expect(tasksElt).toHaveLength(0);
  });
});
