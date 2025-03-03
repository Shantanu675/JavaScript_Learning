
//*******************lexical scoping****************************
//{similar to scoping}


function init() {
    let name = "Mozilla"; 
    function displayName() {
      console.log(name); 
    }
    displayName();
}

init();
  

function fun() {
    let username = "Shantanu"

    function inner() {
        console.log(username);
    }
    inner()
}
fun()
//console.log(username);

//*******************Closure*************************

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;//return pura "lexical scope" jayega connected variable huye 
    //dusre function |or| parent function ke to complete parent function bhi jayega
}
  
const myFunc = makeFunc();
myFunc();

// real world application of Closure


// document.querySelector('#orange').onclick = function () {
//     document.body.style.backgroundColor = 'orange'
// }  

// document.querySelector('#green').onclick = function () {
//     document.body.style.backgroundColor = 'green'
// }

function clickHandler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")

