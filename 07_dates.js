// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof(myDate));



// // let myCreatedDate = new Date(2023, 0 ,23)// in js jan=> 0 // months starts from 0
// // let myCreatedDate = new Date(2023, 0 ,23, 5, 3)// in js jan=> 0 // months starts from 0
// // let myCreatedDate = new Date("2023-01-23")// here 01=> jan // yyyy mm dd
let myCreatedDate = new Date("01-23-2023")// mm dd yyyy

// console.log(myCreatedDate.toLocaleString());

// getMonth()+1  {month start from 0}    getDay()     
// localeString provide more functionalities







let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


