// var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20
    //  c = 30 // value use inside scope should not be gone outside the scope {but in case of var it goes outside} hence not preffer to use var 
    // console.log("inner :",a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];// i has only for loop scope
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shantanu"

    function two(){
        const website = "youtube";
        console.log(username); 
    }
    // console.log(website);
    
    two()
}
// one()


// if(true){
//     const username = "Shantanu"
//     if(username == "Shantanu"){
//         const website = " Youtube"
//         console.log(username+website);
        
//     }  
//     console.log(website);
      
// }
// console.log(username);


//**********************************interesting ****************************************

function addone(num){
    return num+1
}
addone(5) // we can access before or after function defination

const addTwo = function(num){
    return num+2
} 

addTwo(5)// we cannt access before function execution