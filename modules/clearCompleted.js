import { allToDos } from './functions.js';
// import { toDoList as } from './functions.js';

const updateChecked = (index) => {
  const toDoList = allToDos();
  if (toDoList[index].completed === true) {
    toDoList[index].completed = false;
  } else {
    toDoList[index].completed = true;
  }
  localStorage.setItem('tasks: ', JSON.stringify(toDoList));
};

export default updateChecked;