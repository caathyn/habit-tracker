const addBtn = document.getElementById("button")
const habitList = document.getElementsByClassName('habits-list')[0]
const trackTable = document.getElementsByClassName('tracking-table')[0]
const userInput = document.getElementById('input')

userInput.focus();

const addNewHabit =  () => {
  if (userInput.value.trim()) {
    const newHabit = document.createElement('p') 
    newHabit.innerHTML = userInput.value
    habitList.append(newHabit)
    userInput.value = "";
  
    const newWeek = document.createElement('div')
  
    for (let i = 0; i < 7; i++) {
      const weekInput = document.createElement('input')
      weekInput.type = 'checkbox'
      newWeek.append(weekInput)
    }
  
    trackTable.append(newWeek)
  
    userInput.focus()
  } else {
    userInput.value = ''
  }
}

addBtn.addEventListener('click', addNewHabit);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addNewHabit();
})

