
function createListElement(elementType){
    return document.createElement(elementType);
}

function generateUserId(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function serarchUserById(userId){
    const Users =  JSON.parse(localStorage.getItem('users')) || [];
    return Users.find(user => user.id === userId);
}


export {createListElement , generateUserId, serarchUserById};
