const btnCreateNewList = document.getElementsById('button-left-bar-new-list')
const greetingPage = document.getElementsById('greeting-page')

btnCreateNewList.addEventListener('click', ()=>{
    if(greetingPage.style.display === 'flex'){
        greetingPage.style.display = 'none'
    }else{
        greetingPage.style.display = 'flex'
    }
})
