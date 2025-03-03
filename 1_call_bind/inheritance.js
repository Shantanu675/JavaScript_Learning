class User{
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username)

        this.email = email
        this.pass = pass
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@google.in","123")
chai.addCourses();
// chai.logMe();

const masalaChai = new User("masalaChai")
//masalaChai.addCourses();//not have access due to it is parent
masalaChai.logMe();


console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);//due to inheritance





