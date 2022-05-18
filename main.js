const addBtn = document.getElementById('add-btn')
const userInput = document.getElementById('add-input')
const habitContainer = document.getElementById('habits-container')

const addHabit = () => {
  const newHabit = document.createElement('p') 
  newHabit.innerHTML = userInput.value;

  habitContainer.append(newHabit) 

  userInput.value = ''
}

addBtn.addEventListener('click', addHabit)
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addHabit();
})

