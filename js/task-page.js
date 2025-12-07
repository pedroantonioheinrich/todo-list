const backToLeftBarBtn = document.querySelector('#back-to-left-bar')

backToLeftBarBtn.addEventListener('click', ()=>{
    const greetingPage = document.querySelector('.greeting-page')
    const taskPage = document.querySelector('.task-page') 
    greetingPage.style.display = 'flex'
    taskPage.style.display = 'none' 
})  

const textareaTaskCreate = document.querySelector('.textarea-task-create')
const textareaLength = document.querySelector('.textarea-length')       
textareaTaskCreate.addEventListener('input', ()=>{
    const currentLength = textareaTaskCreate.value.length
    textareaLength.textContent = `Tamanho do Texto: ${currentLength}`
})  
const buttonSubmit = document.querySelector('.button-submit')
const tasksContainer = document.querySelector('.tasks')     
buttonSubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    const taskText = textareaTaskCreate.value.trim()    
    if (taskText === ''){
        Swal.fire({
            icon: "error",      
            title: "Oops...",      
            text: "Você precisa digitar uma tarefa!",      
            confirmButtonColor: 'rgba(41, 98, 255, 1)'      
        });      
    } else {
        const taskElement = document.createElement('div')
        taskElement.className = 'task-item'
        taskElement.textContent = taskText
        tasksContainer.appendChild(taskElement)
        textareaTaskCreate.value = ''
        textareaLength.textContent = 'Tamanho do Texto: 0'
    }   
})
