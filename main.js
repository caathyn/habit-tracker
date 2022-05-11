const addBtn = document.getElementById('add-btn')
const userInput = document.getElementById('todo-input')
const tasksContainer = document.getElementById('tasks-container')

const addTask = () => {
  const newTask = document.createElement('span') 
  newTask.innerHTML = userInput.value
  newTask.onclick = function() {
    newTask.classList.add('completed-task')
  }

  const deleteButton = document.createElement('button')
  const deleteIcon = document.createElement('i')
  deleteIcon.classList.add('far')
  deleteIcon.classList.add('fa-trash-alt')
  deleteButton.append(deleteIcon)
  deleteButton.onclick = function() {
    this.parentNode.remove();
  }

  const taskBox = document.createElement('div')
  taskBox.classList.add('task')
  taskBox.append(newTask)
  taskBox.append(deleteButton)
  tasksContainer.append(taskBox)

  userInput.value = ''
}

addBtn.addEventListener('click', addTask)
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTask();
})
