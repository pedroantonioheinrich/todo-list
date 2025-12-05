const btnCreateNewList = document.querySelector('.button-left-bar-new-list')
const greetingPage = document.querySelector('.greeting-page')
const taskPage = document.querySelector('.task-page')
const ul = document.querySelector('.ul-left-bar')


let users = []
console.log(users)


greetingPage.style.display = 'flex'
taskPage.style.display = 'none'

btnCreateNewList.addEventListener('click', ()=>{

    const inputCreateList = document.querySelector('.input-create-list')

    // Troca as paginas de Boas Vindas pela página de edição de Tarefas. Elas estão sobrepostas, então só aparecem e desaparecem.
    // if(greetingPage.style.display === 'flex'){
    //     greetingPage.style.display = 'none'
    //     taskPage.style.display = 'flex'
    // }else{
    //     greetingPage.style.display = 'flex'
    //     taskPage.style.display = 'none'
    // }

    // Confere se o input está vazio, e garanto que estará vazio após o alert (redundante.. eu sei!)
    if (inputCreateList.value === ''){
        inputCreateList.style.border = '3px dashed red'
        alert('Empty Input!!')
        setTimeout(()=>{
            inputCreateList.style.border = '3px dashed rgba(134, 134, 134, 1)'
        },2000)
    }else{
        inputCreateList.style.border = '3px dashed rgba(91, 255, 99, 1)'

        newListCreated = {
            id: users.length,
            title: inputCreateList.value,
            text: '',
            date: '',
            taskDone: false
        }

        users.push(newListCreated)
        inputCreateList.value = ''

        const li = document.createElement('li')
        li.className = 'li-left-bar'
        li.textContent = users[users.length - 1].title
        ul.appendChild(li)
    }

    inputCreateList.value = ''

})


