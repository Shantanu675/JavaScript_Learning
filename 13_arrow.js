const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);//this reffer corrent context
        // console.log(this);
           
    }
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Sad"
//     console.log(this.username);
// }
// chai()


// const chai = function (){
//     let username = "Sad"
//     console.log(this.username);
// }


// const chai =  () => {
//     let username = "Sad"
//     console.log(this);
// }
// chai()



// (const) addTwo = (num1,num2) =>  num1+num2 //implicit return when single line operation take place 

// const addTwo = (num1,num2) =>  (num1+num2)// not require return statement but in {} function return statement is required

// const addTwo = (num1,num2) =>  {username : "Hitesh"}// we cannt retun object as such

const addTwo = (num1,num2) =>  ({username : "Hitesh"})// must be wrap in parenthesis
console.log(addTwo(5,2));


const myArr = [2,5,3,7,8]
// myArr.forEach(function () {})
// myArr.forEach(function () => {})
