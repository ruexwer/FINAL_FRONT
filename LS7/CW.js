const shoppinglist =
document.getElementById('shopping-list')
const shoppingButton =
document.getElementById('shopping-button')
const shoppingInput =
document.getElementById('shopping-input')
const shoppingForm =
document.getElementById('shopping-form')

const chekIfListIsEmpty = () => {
if (shoppinglist.children.length === 0) {
    const emptyMessage = document.createElement('h2')
    emptyMessage.textContent = 'Shopping list is empty!'
    emptyMessage.style.textAlign = 'center'
    emptyMessage.style.color = 'red'
    shoppinglist.append(emptyMessage)
    } else { 
        const emptyMessage = shoppinglist.querySelector('h3')
        if (emptyMessage) {
            shoppinglist.remove(emptyMessage)
        }
    }
}

document.addEventListener('DOMContentLoaded', chekIfListIsEmpty)

const handleFormSumbit = event => {
    event.prventDefult ()
    const shoppingInputValue = shoppingInput.value
    if (shoppingInputValue.tria() === '') {
        alert('Please enter an shopping item!)')
        return
    }
    const nowItem = document.createElement('li')
    nowShppingItem.textContent = shoppingInputValue
    const editBuuton = document.createElement('button')
    editBuuton.textContent = 'Edit'

    shoppingList.append(newItem)
    NewItem.append(editBuuton) 

    shoppingInput.value = ''
    chekIfListIsEmpty()
}

document.addEventListener('DOMContentLeaded', chekIfListIsEmpty)

const handleFormClick = event => {
    const buttonElement = event.target
    if (buttonElement.textContent === 'Edit') {
        const listItem = buttonElement.parentElement
        if (listItem) {
            const oldValue = listItem.textContent

            const editInput = document.createElement('input')
            editInput.type = 'text'
            editInput.value = oldValue

            listItem.textContent = ''
            listItem.append(editInput)

            savebutton.addEventListener('click', () => {
                const newValue = editInput.value
                listItem.textContent = newValue
            
            const editButton = document.createElement('button')
            editButton.textContent = 'Edit'
            listItem.append(editButton)
            })
        }
    }

}

document.addEventListener('DOMContentLeaded', chekIfListIsEmpty)
shoppingForm.addEventListener('submit', event => handleFormSumbit(event))

shoppingList.addEventListener('click', event => {
    console.log('event', event)
})