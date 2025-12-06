import Users from "../database/db.js"

const btnCreateNewList = document.querySelector('.button-left-bar-new-list')
const greetingPage = document.querySelector('.greeting-page')
const taskPage = document.querySelector('.task-page')
const ul = document.querySelector('.ul-left-bar')



greetingPage.style.display = 'flex'
taskPage.style.display = 'none'

btnCreateNewList.addEventListener('click', ()=>{

    const inputCreateList = document.querySelector('.input-create-list')

    // Confere se o input está vazio, e garanto que estará vazio após o alert (redundante.. eu sei!)
    if (inputCreateList.value === ''){
        inputCreateList.style.border = '3px dashed red'
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
            id: Users.user.length,
            title: inputCreateList.value,
            text: '',
            date: '',
            taskDone: false
        }

        Users.addUser(newListCreated)
        inputCreateList.value = ''

        const li = document.createElement('li')
        li.className = 'li-left-bar'
        li.textContent = Users.getTitle(Users.user.length - 1)
        ul.appendChild(li)

        // VER O ARRAY USERS DO MODULO USERS
        console.log(Users.user)
        console.log('Filtered User: ')
        console.log(Users.getTitle(Users.user.length - 1))

    }

    inputCreateList.value = ''

})


