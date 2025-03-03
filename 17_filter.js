const coding = [ "java", "python", "ruby", "cpp", "js"]

// const values = coding.forEach( (item) =>{
//     // console.log(item);
//     return item
// })
// console.log(values);                //for each loop never return any value


// const myNum = [1,2,3,4,5,6,8]

// let newNums = myNum.filter((num)=> {
//     return num < 4
// })// scope me return karana must hota hai


// const newNums = []

// myNum.forEach((num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);



//userbooks = books.filter((bk) => {
//     return break.publish >= 1995 && break.genre === "History"//this is use to check multiple conditions on data coming from database
// })


const myNum = [1,2,3,4,5,6,7,8,9]

// const element = myNum.map((num) => {             ///for each loop never return any value hence here we use map
//     return num+10
// })

const element = myNum
                .map((num) => num*10)
                .map( (num) => num + 1)  /// now num is 10 coming from before statement
                .filter( (num) => num >= 10)

console.log(element);                     


