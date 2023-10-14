let score = "30abc"
score = "0"
score = undefined
score = false
score = NaN
// console.log(typeof score);

let val = Number(score)

// console.log(typeof(val));
// console.log(val); 
// NaN for "30abc" , 
//0 for null , 
//NaN for undefined, 
//1 for true, 
//0 for false, 
//NaN for NaN
// console.log(typeof NaN); // give type as number

let n = -25 // true for negative only 0 gives false
let bool = Boolean(n)
// console.log(typeof bool)
// console.log(bool)
let s = 1
let v =  String(s)
// console.log(typeof v)
// console.log(v)
// ************ Operations**********************

let num = 3
let neg = -num
// console.log(neg);

// console.log(2**3)

let s1 = "Hi"
let s2 = " Hello"
// console.log(s1+s2)

// console.table(
//     [
//         "1"+2,
//         1+"2",
//         "1"+2+2,
//         1+2+"2"
//     ]);
// console.log(+true)
// console.log(+"")
let num1,num2,num3
num1 = num2 = num3 = 2+2

let cnt = 100
// cnt++
console.log(cnt++)
console.log(++cnt)