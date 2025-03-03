// // primitive

// // 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt(scientific numbers)

// const score = 100
// // const score:number = 100{TypeScript}
// let email;
// console.log(typeof email);//undefined

// let some = null //null is object

// const id = Symbol("123")
// const otherId = Symbol("123")//Symbol are immutable like string in JS or java// hidden{const otherId = new Symbol("123")}
// console.log(id === otherId);

// const bigNum = 2671893526727392902671893526727392902 //BigInt is undefined typeof
// console.log(bigNum)




// //Reference (non-primitive)

// //Array, Objects, Functions
// const heros = ["shaktiman", "nagraj", "doga"]
// console.log(heros);


// const obj={
//     name: "Shantanu",
//     age: 19
// }
// console.log(obj);


// const myFun = function(){
//     console.log("HW");
// }
// myFun()
// console.log(typeof myFun); //object function


//************************************************************************************** 

//Stack(primitive), Heap(Non-primitive)

// let myYouTubeName = "CodeTales"

// let anotherName = myYouTubeName
// anotherName = "ShantanuD"

// console.log(anotherName);
// console.log(myYouTubeName);    {Memory allocation is similar to java reference is given to object}


let userOne  = {
    email: "user@google.com",
    upi: "user@123"
}

let userTwo = userOne

userTwo.email = "userTwo@ms.com"

console.log(userOne); //if one ki value change matalab two me bhi change similar to java 

