const inputElement = document.querySelector('.newTask__input');
const addTaskButton = document.querySelector('.newTask__btn');

const tasksContainer = document.querySelector('.tasks__container');

validateInput = () => inputElement.value.trim().length > 0;

handleAddTask = () => {
  const inputIsValid = validateInput();
  console.log(inputIsValid);

  if (!inputIsValid) {
    return inputElement.classList.add('error');
  }

  const taskItemContainer = document.createElement('div');
  taskItemContainer.classList.add('task__item');

  const taskContent = document.createElement('p');
  taskContent.innerText = inputElement.value;

  const deleteItem = document.createElement('button');
  deleteItem.classList.add('task__delete');
  deleteItem.innerText = 'Delete';

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.append(taskItemContainer);

  inputElement.value = '';
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove('error');
  }
};

addTaskButton.addEventListener('click', () => handleAddTask());

inputElement.addEventListener('change', () => handleInputChange());
