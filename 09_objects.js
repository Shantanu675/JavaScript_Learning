//singleton  ------> // Object.create //through constructor


// obj literals

const mySym = Symbol("key1") 

const JsUser = {
    name: "Shantanu",
    "fullname":"Shantanu Ajay Danej",
    [mySym]: "key1abc",
    age: 18,
    location: "Jaipur",
    email: "shantanu@123",
    isLoggedIn: true,
    lastLogInDay: ["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);// alter
console.log(JsUser["fullname"]);// " " -> must be use [] to access this type ///// dot operator fail in "fullname"
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);// type is string
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);// not give proper reason

JsUser.email = "danej@gmail.in"
console.log(JsUser.email);
// Object.freeze(JsUser) // we cannt change in object values

JsUser.email = "danej@gmail.com"
console.log(JsUser.email);// print "danej@gmail.in"
console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello user ${this.location}`); // this is used to refere object here JsUser
}

console.log(JsUser.greeting);// give function
console.log(JsUser.greeting());// run or execute function