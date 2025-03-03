// let myname = "shantanu              "
// console.log(myname.length);


let myheroes = ["Thor","Spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power was ${this.spiderman}`);
        
    }
}

Object.prototype.shantanu = function(){
    console.log("shnatanu is present in all");
    
}


Array.prototype.Heyshantanu = function(){
    console.log(`Shantanu say Hello`);
    
}
// heroPower.shantanu()
// myheroes.shantanu()
// myheroes.Heyshantanu()
// heroPower.Heyshantanu()


//Inheritance

const user ={
    username : "chai",
    email : "chai@gmail.in"
}
const Teacher = {
    makevideo: true
}

const TeachingSupport ={
    isAvail: false
}

const TASupport ={
    makeAssignment : 'JS tutorial',
    isFullTime : true,
    __proto__ : TeachingSupport //inherite TeachingSupport properties
}

Teacher.__proto__= user //teacher user ki properties access kar sakta hai


//morder syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "Chai     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
}

anotherUserName.trueLength()
"Shantanu".trueLength()
"iceTea".trueLength()