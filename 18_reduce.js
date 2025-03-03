const nums = [1,2,3,4,5]

const initialValue = 1//this also include hence not be equal to 0 in factorial

const factorial = nums.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue
)

console.log(factorial);


const shoppingCard = [
    {
        courseName : "JS",
        price : 999
    },
    {
        courseName : "Java",
        price : 199
    },
    {
        courseName : "Python",
        price : 99
    }
]

console.log(shoppingCard.reduce((acc, item) => acc + item.price,0))
