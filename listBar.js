const ulLists = document.querySelector('.ul-lists')
const buttonAddNewList = document.querySelector('.button-new-list')
const selectList = document.querySelector('.select-list')
const pSelectList = document.querySelector('.p-select-list')
const select = document.querySelector('select')
const taskCreation = document.querySelector('.task-creation')



let listsArray = []

if(listsArray.length === 0){
    select.style.display = 'none'
    pSelectList.textContent = 'Create Your First List 🔨'
}

const defaultOption = document.createElement('option')
defaultOption.textContent = 'Select a list bellow'
defaultOption.value = ''
defaultOption.disabled = true
defaultOption.selected = true
select.insertBefore(defaultOption, select.firstChild)


buttonAddNewList.addEventListener('click', ()=>{
    // Capturando o que é escrito no 'Create New List
    const phantomList = document.querySelector('.phantom-list')
    // Verificando se 'Create New List' está vazio
    if(phantomList.value === ''){
        // Caso esteja vazio, uma borda vermelha aparece
        phantomList.style.border = '1px solid red'
        // Caso não esteja vazio, capturar o que foi escrito e adicionar como título de uma lista
    }else{
        // Criando o elemento Li 
        const newLi = document.createElement('li')
        //Atribuindo o titulo criado em 'Create New List' ao novo elemento da lista 'Li'
        newLi.textContent = phantomList.value
        // Adicionando um botão de 'Remover' ao novo elemento 'Li'
        const remove = document.createElement('button')
        // Adicionando classe ao botão de remover
        remove.classList.add('btn-remove-list')
        // Adicionando imagem de lixeira dentro do botão 'Remover' 
        const imgTrash = document.createElement('img')
        imgTrash.classList.add('img-trash')
        imgTrash.src = '/asset/trash-icon.svg'

        //Adicionando imagem da lixeira dentro do botão 'Remover'
        remove.appendChild(imgTrash)

        
        // Adicionando botão 'Remover' ao 'Li'
        newLi.appendChild(remove)
        
        // Adicionando a nova lista ao 'Ul'
        ulLists.appendChild(newLi)

        //Enviando o novo 'Li' para um array como objeto no fim do array
        listsArray.push(
            {
                title: newLi.textContent,
                tasks: []
            }
        )
        
       
        const newOption = document.createElement('option')
        newOption.classList.add('option-element')
        newOption.textContent = newLi.textContent
        newOption.value = newLi.textContent
        
        // Remove o próprio botão 
        remove.addEventListener('click', ()=>{
            //Remover da lista
            ulLists.removeChild(newLi)
            // Remover também  ultimo elemento do array
            listsArray = listsArray.filter(list => list.title !== newLi.textContent)
            //remover opção em Option
            select.removeChild(newOption)
            if(select.options.length === 1){
                select.style.display = 'none'
                pSelectList.textContent = 'Create Your First List 🔨'
            }

        })
        select.appendChild(newOption)
        


        select.style.display = 'block'
        pSelectList.textContent = 'Select List'

        
        
    }
    // Limpando o campo 'Create New List' depois que a 'Li' for adicionada
    phantomList.value = ''

})

//Selecionando a opção
    select.addEventListener('change', () => {
    const selectedValue = select.value
    const newGreeting = document.querySelector('.main-greeting')

    const selectedList = listsArray.find(element => element.title === selectedValue)
    
    if (selectedList) {
        console.log('Lista selecionada:', selectedList.title)
        console.log('Tarefas:', selectedList.tasks)
        selectList.style.display = 'none'
        taskCreation.style.display = 'block'
        newGreeting.textContent = `${selectedValue}'s List.`
        
    }
})

ulLists.addEventListener('click', (e)=>{
    const clickedItem = e.target.closest('li')
    if (clickedItem) {
    const listTitle = clickedItem.textContent.trim()
    const selectedList = listsArray.find(list => list.title === listTitle)
    

    if (selectedList) {
      console.log('Lista clicada:', selectedList.title)
      console.log('Tarefas:', selectedList.tasks)
      // Atualiza a interface com os dados da lista
      taskCreation.style.display = 'block'
      selectList.style.display = 'none'
      document.querySelector('.main-greeting').textContent = `${listTitle}'s List.`

    }

  }
})

const createTask = document.querySelector('.button-submit')
      
createTask.addEventListener('click', ()=>{
    const textareaValue = document.querySelector('textarea').value
    const taskCreated = document.querySelector('.tasks-created')
    const selectedValue = select.value
    const selectedListTask = listsArray.find(list => list.title === selectedValue)

    if (selectedListTask) {
        selectedListTask.tasks.push(textareaValue)

        // Limpa o conteúdo anterior
            taskCreated.innerHTML = ''

        // Cria elementos para cada tarefa
        selectedListTask.tasks.forEach(taskFor => {
            const taskItem = document.createElement('p')
            taskItem.classList.add('p-task-created')
            taskItem.textContent = taskFor
            taskCreated.appendChild(taskItem)
        })

        
    }
}) 



