const marvel = ["thor", "ironman"]
const hero = ["shaktiman", "hanuman"]

// marvel.push(hero)// give array in array //array koi bhi data le leta hai
// console.log(marvel);
// console.log(marvel[2][1]);


// const allher0 = marvel.concat(hero) //concat return new arr
// console.log(allher0);


//**************spread********************
// const allNew = [...marvel, ...hero]
// console.log(allNew);


// const arr = [1,2,[4,5],[2,7,[3,1,7,3,[0,4],9]]]
// const newArr = arr.flat(Infinity)
// console.log(newArr);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));//interesting


let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1,score2,score3));
