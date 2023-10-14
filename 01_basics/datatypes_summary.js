// Primitive and Non Primitive Datatypes
// Categorized based on how memory access is done (by val or by ref) and how stored in memory

// Primitive
// 7 types They are all call by val
// String Number Boolean null undefined Symbol(unique id) BigInt

const score = 100
const val = 100.3 // No float
const bool = false
const v = null
let email


const id = Symbol("123")
const aid = Symbol("123")

// console.log(id === aid);
const bigNum = 12121212121212121212121n // n is added to say it as a BigInt

// Non Primitive
// Call by Ref
// Array, Objects, Functions 

// JS is an dynamically typed language

const h = ["hi","hello","tldr"];
let myObj = {
    name : "Hi",
    age : 25
}

const myFunc = function(){
    // console.log("Hello World")
}
myFunc()

// console.log(typeof myFunc);
console.log(typeof bigNum)
console.log(typeof bigint)
console.log(typeof object)
console.log(typeof number)