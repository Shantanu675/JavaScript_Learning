const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);



// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// Object.create(null)

const chai = {
    name:"chau",
    price: 120,
    isAvail: true,

    orderChai: function () {
        console.log("chai nahi he");
    }
}
    
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,val] of Object.entries(chai)) {
    if(typeof val != 'function'){

        console.log(`${key} = ${val}`);
    }
    
}