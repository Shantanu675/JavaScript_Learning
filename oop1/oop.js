//obj literals
const user = {
    username: "Shantanu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Get uerDetails from database");
        // console.log(`Username = ${this.username}`);
        console.log(this);
        
    }
}


// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date() // new allow to make multiple objects from single object literals{new -> constructure function}


function User(username,loginCount,signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn

    this.greeting = function(){
        console.log(`WELLCOME ${this.username}`);
        
    }
    //return this //// always return implicitly return value
}

const userOne = new User("han",12,true)
const userTwo = new User("Shiv",10,false)//userTwo override it

// console.log(userTwo);

console.log(userOne.constructor);
