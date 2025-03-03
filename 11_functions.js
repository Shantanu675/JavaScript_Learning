function sayMyname(){
    console.log(12+34);
}

sayMyname //only reference {function live their}
// sayMyname() // function call


// function addTwoNum(num1, num2){//parameter
//     console.log(num1+num2)
// }

// addTwoNum(3,"a")//arguments
// const result = addTwoNum(3,6)
// console.log(result);


function addTwoNum(num1,num2){
    return num1+num2
}

result = addTwoNum(6,7)
// console.log(result);


function loginUserMessage(username){ //(username="Sam") ---> default
    if(username === undefined){// !username)
        console.log("plz enter user name");
        return
    }
    return `${username} just loged in`
}

// const str =loginUserMessage()//if value not pass then give undefined
// console.log(str);



function calculateCardPrice(num1){
    return num1
}
console.log(calculateCardPrice(2));//if more than one number passes then only first will print



function calculateCardPrice(...num1){
    return num1
}
console.log(calculateCardPrice(2,4,90));



function calculateCardPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCardPrice(2,4,90,100));//val1=2 , val2=4


const user={
    username: "sad",
    price: 182
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);//if not present element given then show undefined
}
handleObject(user)


const arr = [100, 200, 300, 400]

function returnSecVal(getarr){
    return getarr[1]
}
console.log(returnSecVal(arr))
console.log(returnSecVal([100, 200, 300, 40]))