class User  {
    constructor(email, pass){
        this.email = email,
        this.pass = pass
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get pass(){
        // return this._pass.toUpperCase()
        return `${this._pass}sad`
    }

    set pass(value){
        this._pass = value
    }
}

const obj = new User("obj@gmail.com","abcy");
console.log(obj.pass);
console.log(obj.email);
