// const tinderUser = new Object() ---> singleton object

const tinderuser = {} // ---> non singleton object


tinderuser.id = "123ad"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "sad@google.com",
    fullname: {
        firstname: "Shantanu",
        lastname: "Danej"
    }
}
console.log(regularUser.fullname.lastname);// access nested objects
// console.log(regularUser.fullname?.lastname);// ? to check is a that object available or not ---> see in API call

const obj1 ={1: "a", 2:"b"}
const obj2 ={3:"c", 4:"d"} // if we assign 2:"g" then last wala decide karega

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2)// if we not give {} all values go in obj1 // {} use kia to {is me copy hoge}

//spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user=[
    {
        id: 1,
        email: "s@123"
    },
    {
        id: 2,
        email: "a@123"
    },
    {
        id: 3,
        email: "d@123"
    }
]

// console.log(user[1].email)
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));//retur array
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));// provide both key and value in nested array


// console.log(tinderuser.hasOwnProperty("isLogged"));



const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor
const{courseInstructor: instructor} = course // destructure
// console.log(courseInstructor); //courseInstructor ab raha hi nahi
console.log(instructor);


// const navbar = (props.company // {company}) => {          // destructure concept in React.js

// }


// {
//     "name": "Shantanu",
//     "coursename" : "js un hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]