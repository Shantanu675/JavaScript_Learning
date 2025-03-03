//***********************if, else if, else***********************

// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50){
//     // ya to ye
// }
// else{
//     // ya to ye
// }
// console.log("always");

// //3 != 4
// //<, >, >=, <=, ==, !=, ==={strictly check type also}


// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //out of scope we can only access out of scope when declare with {var} keyword



const balance = 1000
// if(balance > 500) console.log("test");// semicolon means end of this if scope
//Or
// if(balance > 800) console.log("pass"), console.log("using semicolon");// not professional

// const isUserLoggedIn = true
// const debitCard = true
// const loggedInByGoogle = false
// const loggedInByEmail = true

// if(isUserLoggedIn && debitCard){
//     console.log("Allowed to buy");
    
// }

// if(loggedInByEmail || loggedInByGoogle ){
//     console.log("Allowed to buy");
    
// }



//***************************switch*************************************

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;

//     case 2:
//         console.log("Feb");
//         break;
    
//     default:
//         break;
// }



//***************************truthy********************************
const userEmail = "Sad@123"

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("Don't have yser email");
    
}

// Falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NAN

// Truthy value
//"0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) { // userEmail is an array
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
} 




//Nullish Coalescing Operator (??):null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // if value is coming then ok otherwise assign null
// val1 = undefined ?? 15  // similar to above for null and undefined also
val1 = null ?? 49 ?? 939 //then first value which get {49} is assigned in val1


console.log(val1);


//***************Turnary Operator*********************/

condition ? true : false






