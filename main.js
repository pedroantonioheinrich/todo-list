const ulLists = document.querySelector('.ul-lists')
const buttonAddNewList = document.querySelector('.button-new-list')
const selectList = document.querySelector('.select-list')
const pSelectList = document.querySelector('.p-select-list')
const select = document.querySelector('select')
const taskCreation = document.querySelector('.task-creation')
const newGreeting = document.querySelector('.main-greeting')
const taskList = document.querySelector('.task-list')
const createTask = document.querySelector('.button-submit')


let isSelected = false
let clickedId = ''

//------------------------------------------------------------------------>>
//TEST
// let userDefault1 = {
//     title: 'Lista de estudos',
//     tasks: ['atividade do dia de hoje é estudar matematica', 'estudar fisica', 'estudar quimica'],
//     id: 12345
// }
// let userDefault2 = {
//     title: 'Lista de tarefas',
//     tasks: ['Correr', 'Comer', 'Jogar video game'],
//     id: 454545
// }

// let userListArray = [userDefault1, userDefault2]
//------------------------------------------------------------------------>>

let userListArray = []

if(userListArray.length === 0){
    select.style.display = 'none'
    pSelectList.textContent = 'Create Your First List 🔨'
}

const defaultOption = document.createElement('option')
defaultOption.textContent = 'Select a list bellow'
defaultOption.value = ''
defaultOption.disabled = true
defaultOption.selected = true
select.insertBefore(defaultOption, select.firstChild)

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
        // Criando elemento na lista
        const imgSrc = '/asset/trash-icon.svg'
        // Criando elemento com a função elementLi(txtContent, imgSource)
        const { li: newLi, button: removeBtn }  = elementLi(phantomInput.value, imgSrc, uniqueId)
        ulLists.appendChild(newLi)

        //Enviando o novo 'Li' para um array como objeto no fim do array
        userListArray.push(
            {
                title: phantomInput.value,
                tasks: [],
                id: uniqueId
            }
        )

        // Criação da Opção dentro de Select
        const newOp = newOption(phantomInput.value)
        select.appendChild(newOp)
        // Remove o próprio botão 
        removeBtn.addEventListener('click', ()=>{
            ulLists.removeChild(newLi)
            // Remover também  ultimo elemento do array
            userListArray = userListArray.filter(list => list.id !== newLi.id)
            //remover opção em Option
            select.removeChild(newOp)
            if(select.options.length === 1){
                select.style.display = 'none'
                selectList.style.display = 'block'
                taskCreation.style.display = 'none'
                taskList.style.display = 'none'
                pSelectList.textContent = 'Create Your First List 🔨'
            }
        
        })
        select.style.display = 'block'
        pSelectList.textContent = 'Select List'
    }
    // Limpando o campo 'Create New List' depois que a 'Li' for adicionada
    phantomInput.value = ''
})

//------------------------------------------------------------------------>>

//Selecionando a lista na Opção de seleção de lista
    select.addEventListener('change', (e) => {
    const selectedValue = select.value
    const selectedList = userListArray.find(element => element.title === selectedValue)
    // Muda o display depois que a lista é selecionada
    if (selectedList) {
        isSelected = true
        taskCreation.style.display = 'block'
        selectList.style.display = 'none'
        newGreeting.textContent = `${selectedList.title}'s List.`
    }
})

//------------------------------------------------------------------------>>

// Evento para clicar np botão da lista criada 
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
            selectList.style.display = 'none'
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
        const taskItem = `<p class="p-task-created">${taskFor}</p>`
        taskList.innerHTML += taskItem
    })   
                
}) 
//------------------------------------------------------------------------>>

function elementLi(txtContent, svgSource, idUnico){ 
    const li = document.createElement('li')
    const button = document.createElement('button')
    const img = document.createElement('img')
    li.textContent = txtContent
    li.id = idUnico
    button.classList.add('btn-remove-list')
    li.appendChild(button)
    img.classList.add('img-trash')
    img.src = svgSource
    button.appendChild(img)
    return { li, button }
}

function newOption(txtContent){
    const option = document.createElement('option')
    option.textContent = txtContent
    option.classList.add('option-element')
    return option
}

 // Gera numero aleatorio pra ID
function idGenerate(){
    const randomNum = Math.floor(Math.random() * 9999999)
    return randomNum
}