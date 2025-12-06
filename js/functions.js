function createListElement(elementType){
    return document.createElement(elementType);
}

function generateUserId(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}



export {createListElement , generateUserId};
