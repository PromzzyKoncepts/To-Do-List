import _ from 'lodash';
import './index.css';

const listObject = {
  description : '',
  completed : true,
  index : 0
}
const inputVal = document.getElementById('add')

const taskDisplay = () => {
  const addList = document.querySelector('.list-container');
  const listDiv = document.createElement('div')
  const listInput = document.createElement('label')
  const Input = document.createElement('INPUT')
  listInput.innerText = `${inputVal.value}`
  
  listDiv.appendChild(Input)
  listDiv.appendChild(listInput)
  addList.appendChild(listDiv)
  
  Input.setAttribute('type', 'checkbox')
}

document.querySelector('#add').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e = taskDisplay()
      inputVal.value = ''
    }
});


