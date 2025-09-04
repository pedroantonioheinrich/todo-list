const ulLists = document.querySelector('.ul-lists')
const buttonAddNewList = document.querySelector('.button-new-list')
const taskCreation = document.querySelector('.task-creation')
const newGreeting = document.querySelector('.main-greeting')
const taskList = document.querySelector('.task-list')
const createTask = document.querySelector('.button-submit')


let isSelected = false
let clickedId = ''

//------------------------------------------------------------------------>>
let userListArray = []

//------------------------------------------------------------------------>>

buttonAddNewList.addEventListener('click', ()=>{
    const uniqueId = idGenerate().toString()
   
    // Capturando o que é escrito no 'Create New List
    const phantomInput = document.querySelector('.phantom-list')
    // Verificando se 'Create New List' está vazio
    if(phantomInput.value === ''){
        // Caso esteja vazio, uma borda vermelha aparece
        phantomInput.style.border = '1px solid red'
        // Caso não esteja vazio, capturar o que foi escrito e adicionar como título de uma lista
    }else{
        // Criando elemento com a função elementLi(txtContent, imgSource)
        const { li: newLi, button: removeBtn }  = elementLi(phantomInput.value, uniqueId)
        ulLists.appendChild(newLi)

        //Enviando o novo 'Li' para um array como objeto no fim do array
        userListArray.push(
            {
                title: phantomInput.value,
                tasks: [],
                id: uniqueId
            }
        )
        // Remove o próprio botão 
        removeBtn.addEventListener('click', ()=>{
            ulLists.removeChild(newLi)
            // Remover também  ultimo elemento do array
            userListArray = userListArray.filter(list => list.id !== newLi.id)
        })
    }
    // Limpando o campo 'Create New List' depois que a 'Li' for adicionada
    phantomInput.value = ''
})
// Evento para clicar np botão da lista criada 
//------------------------------------------------------------------------>>
ulLists.addEventListener('click', (e)=>{
    const clickedItem = e.target.closest('li')
    if (clickedItem) {
        clickedId = clickedItem.id
        const selectedList = userListArray.find(list => list.id === clickedItem.id)
        // Remove a classe de todos os itens antes de aplicar no atual
        const allItems = ulLists.querySelectorAll('li')
        allItems.forEach(item => {
            // Troca o background do botão selecionado
            item.classList.remove('isClicked')
            item.classList.add('notClicked')
        })
        if (selectedList) {
            isSelected = true
            // Limpa a tela de tasks da lista selecionada ao trocar de lista
            taskList.innerHTML = ''
            //Mostrar elementos da task da lista selecionada
            selectedList.tasks.forEach(task => {
                const taskItem = `<p class="p-task-created">${task}</p>`
                taskList.innerHTML += taskItem
            })
            // Troca o background do botão selecionado
            clickedItem.classList.remove('notClicked')
            clickedItem.classList.add('isClicked')
            // Atualiza a interface com os dados da lista
            taskCreation.style.display = 'block'
            newGreeting.textContent = `List: ${selectedList.title}`
        }
    }     
})
// CRIAR TASK
//------------------------------------------------------------------------>>
createTask.addEventListener('click', ()=>{
    const textareaValue = document.querySelector('textarea')
    const taskInList = userListArray.find(task => task.id === clickedId)
    taskInList.tasks.push(textareaValue.value)
    // Limpa o conteúdo anterior
    textareaValue.value = ''
    taskList.innerHTML = ''
    // Cria elementos para cada tarefa
    taskInList.tasks.forEach(taskFor => {
        // Cria elemento p e adiciona à tasks da lista selecionada
        const p = document.createElement('p')
        // Cria elemento button (remover elemento) e adiciona à p da lista selecionada
        const buttonRemoveP = document.createElement('button')

        p.classList.add('p-task-created')
        p.id = idGenerate().toString()
        p.textContent = taskFor

        buttonRemoveP.classList.add('btn-remove-p')
        buttonRemoveP.textContent = 'x'

        p.appendChild(buttonRemoveP)
        taskList.appendChild(p)
        console.log(taskList)
        buttonRemoveP.addEventListener('click', ()=>{
            taskList.removeChild(p)
            // Remover também  ultimo elemento do array
            userListArray = userListArray.filter(list => list.tasks.id !== p.id)
        })
     
    })                  
}) 
//------------------------------------------------------------------------>>

// Criar elemento li  que vai dentro da ul 
function elementLi(txtContent, idUnico){ 
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.textContent = txtContent
    li.id = idUnico
    button.classList.add('btn-remove-list')
    button.textContent = 'x'
    li.appendChild(button)
    return { li, button }
}
 // Gera numero aleatorio pra ID
function idGenerate(){
    const randomNum = Math.floor(Math.random() * 9999999)
    return randomNum
}