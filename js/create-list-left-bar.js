import Users from "../database/db.js"
import { createListElement } from "./functions.js"
import { generateUserId } from "./functions.js"

const btnCreateNewList = document.querySelector('.button-left-bar-new-list')
const greetingPage = document.querySelector('.greeting-page')
const taskPage = document.querySelector('.task-page')
const ul = document.querySelector('.ul-left-bar')



greetingPage.style.display = 'flex'


btnCreateNewList.addEventListener('click', ()=>{

    const inputCreateList = document.querySelector('.input-create-list')

    // Confere se o input está vazio
    if (inputCreateList.value === ''){
        inputCreateList.style.border = '3px dashed rgba(255, 68, 68, 1)'
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Você precisa digitar um nome para a lista!",
            confirmButtonColor: 'rgba(41, 98, 255, 1)'
        });
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
        //Limpa e recria a lista no UL a cada nova lista criada
        ul.innerHTML = "";
        list()
        

        inputCreateList.value = ''

    }

    inputCreateList.value = ''


})


// Mostra as listas criadas na UL left-bar
const list = ()=>{Users.user.forEach((obj)=>{
    const li = document.createElement('li')
    li.className = 'li-left-bar'
    li.textContent = obj.title

    const removeBtn = document.createElement('button')
    removeBtn.className = 'btn-remove-list'
    removeBtn.textContent= 'x'

    li.appendChild(removeBtn)
    ul.appendChild(li)

    console.log(Users.user)

    removeBtn.addEventListener('click', ()=>{
        Users.removeUserById(obj.id)
        obj.isDeletedFromList = true
        console.log(Users.user)
        // greetingPage.style.display = 'flex'
        // taskPage.style.display = 'none' 
        ul.removeChild(li)

    })

    li.addEventListener('click', ()=>{
        greetingPage.style.display = 'none'
        taskPage.style.display = 'flex' 
    })

})}

