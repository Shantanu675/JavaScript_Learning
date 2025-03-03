function multiplyBy5(num){
    // this.num = num
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//kisi ko bhi object ki tarah behave karva sakte hai


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);// this means jis
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()

