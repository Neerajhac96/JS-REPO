//  Primitive

// 7 types: String, number, boolean, , null, undefined, symboll, BigInt


const score = 100  //typeof (number)
const scoreValue = 100.3  //typeof (number)

const isLoggedIn = false  //typeof (boolean)
const outSideTemp = null // typeof (object)
let userEmail;

const id = Symbol('123')  // typeof (symbol)
const anotherId = Symbol('123') // typeof (Symbol)

console.log(id === anotherId);


const bigNumber = 123456789112233n //type (bigint )




// Refrence type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // arrays

let myobj = {  // objects
    name:"hitesh",// objects
    age: 22,// objects
}

//function
const myFunction = function(){  // typeof (object funtion)
    console.log("hello world");
}

console.log(typeof(scoreValue));
