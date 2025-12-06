class Users{
    static user = []

    static addUser(userObj) {
        return this.user.push(userObj)
    }

    static getUser(index){
        return this.user[index]
    }

    static getIndex(userId) {
        this.user.find((user, index) => {
            if(user.id === userId){
                return index
            }
        })
    }

    static getTitle(userId){
        const userFound = this.user.find(user => user.id === userId)
        return userFound.title
    }

    static getText(userId){
        const userFound = this.user.find(user => user.id === userId)
        return userFound.text
    }

    static getDate(userId){
        const userFound = this.user.find(user => user.id === userId)
        return userFound.date
    }

    static getTaskDone(userId) {
        const userFound = this.user.find(user => user.id === userId)
        return userFound.taskDone
    }

    static setTitle(userId, newTitle){
        const userFound = this.user.find(user => user.id === userId)
        return userFound.title = newTitle
    }
    
    static setText(userId, newText) {
        const userFound = this.user.find(user => user.id === userId)
        return userFound.text = newText
    }

    static setTaskDone(userId, taskBool) {
        const userFound = this.user.find(user => user.id === userId)
        return userFound.taskDone = taskBool
    }
    
    static removeUserByTitle(userTitle) {
        return this.user = this.user.filter(user => user.title != userTitle)
    }

    static removeUserById(userId){
       return this.user = this.user.filter(user => user.id != userId)
    }
}

export default Users