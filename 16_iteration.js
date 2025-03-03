// for***************************************************************

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
        
//     }
//     console.log(element);  
// }

// 2D array
// for{
//     for{

//     }
// }

// in JS i out of bound exception will not take place here we get undefined

// for (let i = 1; i < 10; i++) {
//     if(i == 5){
//         console.log("detect 5");
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
// }


// for (let i = 1; i < 10; i++) {
//     if(i == 5){
//         console.log("detect 5");
//         continue
//     }
//     console.log(`Value of i is ${i}`);
    
// }

// index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

//while*******************************************************

// const myArr = ["Sandesh", "Bharat", "Mata"]
// index = 0
// while(index < myArr.length){
//     console.log(myArr[index]);
//     index = index + 1
// }

//do while********************************************************

// let score = 11
// do{
//     console.log(score);
//     score = score + 1
    
// }while(score < 10)

//for of************************************************************
//["", "", ""]
//[{}, {}, {}}]

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);  
// }

// const greeting = "Hello World!"
// for (const letters of greeting) {
//     console.log(letters);
        
// }

//maps***************************************************************

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// map.set('IN',"India")


// // console.log(map);

// // for (const [key,value] of map) {
// //     console.log(key," ",value);
   
// // }

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key,value] of myObj) {
//     console.log(key," ",value);
       
//}

//objects***************************************************************

// const myObj = {
//     js : 'javascript',
//     cpp : 'C++',
//     rb : 'Ruby',
//     swift : 'swift by Apple'
// }

// for (const key in myObj) {
//     console.log(`${key} for ${myObj[key]}`);
    
// }

// for (const element in myArr) {
//     console.log(myArr[element]);// this statement print keys of arrays but whst is keys of arrays {nothing but there indexes}
    
// }


// const map = new Map()// maps are not iterable
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//     console.log(key);
    
// }


//for each********************************************************************

const coding = ["java","python","html","Javascript"]
// coding.forEach( function (item) {
//     console.log(item);  
// })



// coding.forEach( (val) => {
//     console.log(val);  
// })



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
    
})


const myCoding= [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})