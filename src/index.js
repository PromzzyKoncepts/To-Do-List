import './index.css';

const listObject = [
  {
    description: 'wash the plates',
    completed: false,
    index: 0,
  },
  {
    description: 'clear the bushes',
    completed: false,
    index: 0,
  },
];

// const inputVal = document.getElementById('add');

const taskDisplay = () => {
  const addList = document.querySelector('.list-container');
  listObject.forEach((task) => {
    const listDiv = document.createElement('div');
    const listInput = document.createElement('label');
    const Input = document.createElement('INPUT');
    listInput.innerText = `${task.description}`;
    // listInput.innerText = `${inputVal.value}`
    Input.checked = `${task.completed}`;

    listDiv.appendChild(Input);
    listDiv.appendChild(listInput);
    addList.appendChild(listDiv);

    Input.setAttribute('type', 'checkbox');
    Input.setAttribute('class', 'check');
    listDiv.className = 'todos';
  });
};

const onPageLoad = () => {
  taskDisplay();
};

window.onload = onPageLoad();

// document.querySelector('#add').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       e = taskDisplay()
//       inputVal.value = ''
//     }
// });
