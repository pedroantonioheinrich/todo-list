const btnCreateNewList = document.querySelector('.button-left-bar-new-list')
const greetingPage = document.querySelector('.greeting-page')
const taskPage = document.querySelector('.task-page')

greetingPage.style.display = 'flex'
taskPage.style.display = 'none'

btnCreateNewList.addEventListener('click', ()=>{
    if(greetingPage.style.display === 'flex'){
        greetingPage.style.display = 'none'
        taskPage.style.display = 'flex'
    }else{
        greetingPage.style.display = 'flex'
        taskPage.style.display = 'none'
    }
})


