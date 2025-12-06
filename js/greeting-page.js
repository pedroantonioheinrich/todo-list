const mainGreeting = document.querySelector('.main-greeting')
const mainMonth = document.querySelector('.main-month')
const todayDate = document.querySelector('.main-date-today')
const phraseGreeting = document.querySelector('.phrase-greeting')


const greetings = [
    "O que você vai fazer hoje?",
    "Vamos transformar tarefas em conquistas?",
    "Qual missão você quer cumprir agora?",
    "Hora de colocar seus planos em ação!",
    "Seu dia começa com uma boa lista!",
    "Organizar é o primeiro passo para vencer!",
    "Vamos dar um check no que importa?",
    "Cada tarefa concluída é uma vitória!",
    "Hoje é o dia perfeito para ser produtivo!",
    "Sua lista está pronta para te ajudar a brilhar!"
];

let loop = 0

phraseGreeting.textContent = greetings[loop]




const dayTime = new Date().getHours()
const dayNow = new Date().getDate()
const monthNow = new Date().getMonth()

if(dayTime > 0 && dayTime < 12){
    mainGreeting.textContent = 'Bom Dia.'
}else if(dayTime >= 12 && dayTime <= 17){
    mainGreeting.textContent = 'Boa Tarde.'
}else{
    mainGreeting.textContent = 'Boa Noite.'
}

switch(monthNow){
    case 0:
        mainMonth.textContent = 'Jan'
    break
    case 1:
        mainMonth.textContent = 'Fev'
    break
    case 2:
        mainMonth.textContent = 'Mar'
    break  
    case 3:
        mainMonth.textContent = 'Abr'
    break  
    case 4:
        mainMonth.textContent = 'Mai'
    break
    case 5:
        mainMonth.textContent = 'Jun'
    break
    case 6:
        mainMonth.textContent = 'Jul'
    break
    case 7:
        mainMonth.textContent = 'Ago'
    break
    case 8:
        mainMonth.textContent = 'Set'
    break
    case 9:
        mainMonth.textContent = 'Out'
    break
    case 10:
        mainMonth.textContent = 'Nov'
    break
    case 11:
        mainMonth.textContent = 'Dez'
    break
}

todayDate.textContent = dayNow
