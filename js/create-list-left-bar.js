import Users from "../database/db.js"
import { createListElement } from "./functions.js"
import { generateUserId } from "./functions.js"

const btnCreateNewList = document.querySelector('.button-left-bar-new-list')
const greetingPage = document.querySelector('.greeting-page')
const taskPage = document.querySelector('.task-page')
const ul = document.querySelector('.ul-left-bar')



greetingPage.style.display = 'flex'
taskPage.style.display = 'none'

btnCreateNewList.addEventListener('click', ()=>{

    const inputCreateList = document.querySelector('.input-create-list')

    // Confere se o input está vazio
    if (inputCreateList.value === ''){
        inputCreateList.style.border = '3px dashed rgba(255, 68, 68, 1)'
        alert('Empty Input!!')
        setTimeout(()=>{
            inputCreateList.style.border = '3px dashed rgba(134, 134, 134, 1)'
        },2000)
    }else{
        inputCreateList.style.border = '3px dashed rgba(91, 255, 99, 1)'
        setTimeout(() => {
            inputCreateList.style.border = '3px dashed rgba(134, 134, 134, 1)'
        }, 1000)

let newListCreated = {
    id: generateUserId(),
    title: inputCreateList.value,
    text: '',
    date: new Date().toLocaleDateString(),
    taskDone: false,
    isDeletedFromList: false
}

        Users.addUser(newListCreated)
        

        const li = createListElement("li")
        li.className = 'li-left-bar'
        li.textContent = Users.getTitle(Users.user.length - 1)

        const removeBtn = document.createElement('button')
        removeBtn.className = 'btn-remove-list'
        removeBtn.textContent = 'x'

        li.appendChild(removeBtn)
        ul.appendChild(li)


        removeBtn.addEventListener('click', ()=>{
            // Revisar isso!!
            Users.user[Users.user.length - 1].isDeletedFromList = true
            console.log(Users.user)
            ul.removeChild(li)
            // TODO -  CRIAR FUNÇÃO PRA DELETAR ELEMENTO DO ARRAY USER NA DB
            // Talvez fazer a remoção a partir de outro ponto no codigo, como no daily task, na tela principal
        })

        inputCreateList.value = ''

    }

    inputCreateList.value = ''

})
