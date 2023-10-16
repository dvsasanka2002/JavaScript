//Arrays
const myArr = [0,1,2,3,4,5]
// Resizable
// Creates Shallow Copies ie when modifying a copy, it modifies the original too ie same reference
const myArr2 = new Array(1,2,3)

// console.log(myArr2[1]);
 
// Array Methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(0))
// console.log(myArr.indexOf(3))

// const newArr  = myArr.join()// Converts into string sep by commas
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr)

// Splice Slice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)

