const promiseOne = new Promise(function(resolve, reject){
    //Do async task
    //DB call, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()//connected resolve with then
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function (params) {
        console.log("Async task two");
        resolve()
    },1000)
}).then(function (params) {
    console.log("Async 2 resolve");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"ShantanuDanej", email:"sad@gmain.in"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"ShantanuDanej", pass:"Shantanu@123"})
        }
        else{
            reject('ERROR : something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{          ///use arrow function
    console.log(username);     //
                               // 
}).catch(function (error){     ///use simple function 
    console.log(error);
    
}).finally(()=>{
    console.log("Promise is either resolve or rejected")
})


promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"javascript", pass:"123"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})









async function consumePromiseFive(){
    try{
        const response = await promiseFive//it is object hence not access using () 
        console.log(response);
    }
    catch(error){
        console.log("error");
        
    }
    
}

consumePromiseFive()



// async function getCallUser() {
//     try{
//         const response = await fetch('https://api.github.com/users/Shantanu675') 
//         console.log(response);
        
//         // const data = response.json()
//         // console.log(data);
//     }  
//     catch(error){
//         console.log("Error : ",error);
        
//     }
     
// }

//getCallUser()


fetch('https://api.github.com/users/Shantanu675').then((response) => {
    return response.json()
}).then((data)=> {
    console.log(data);
    
}).catch((error)=>{
    console.log("Errors");   
})