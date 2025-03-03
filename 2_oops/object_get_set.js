const User = {
    _email : "emd@gmail.com",
    _pass : "123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);


