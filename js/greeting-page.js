const mainGreeting = document.querySelector('.main-greeting')
const mainMonth = document.querySelector('.main-month')
const todayDate = document.querySelector('.main-date-today')



const dayTime = new Date().getHours()
const dayNow = new Date().getDate()
const monthNow = new Date().getMonth()

if(dayTime > 0 && dayTime < 12){
    mainGreeting.textContent = 'Good Morning.'
}else if(dayTime >= 12 && dayTime <= 17){
    mainGreeting.textContent = 'Good Afternoon.'
}else{
    mainGreeting.textContent = 'Good Night.'
}

switch(monthNow){
    case 0:
        mainMonth.textContent = 'Jan'
    break
    case 1:
        mainMonth.textContent = 'Feb'
    break
    case 2:
        mainMonth.textContent = 'Mar'
    break  
    case 3:
        mainMonth.textContent = 'Apr'
    break  
    case 4:
        mainMonth.textContent = 'May'
    break
    case 5:
        mainMonth.textContent = 'Jun'
    break
    case 6:
        mainMonth.textContent = 'Jul'
    break
    case 7:
        mainMonth.textContent = 'Aug'
    break
    case 8:
        mainMonth.textContent = 'Sep'
    break
    case 9:
        mainMonth.textContent = 'Oct'
    break
    case 10:
        mainMonth.textContent = 'Nov'
    break
    case 11:
        mainMonth.textContent = 'Dec'
    break
}

todayDate.textContent = dayNow
