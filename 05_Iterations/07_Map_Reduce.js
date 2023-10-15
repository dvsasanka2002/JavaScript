const nums = [1,2,3,4,5,6,7,8,9,10]

let newnums  = nums.map((num) => num+10)
newnums  = nums.map((num) => {return num+11})
// console.log(newnums);

// Chaining we can use map and filter any number of times

newnums = nums.map((num) => num *10).map((num) => num+1).filter((num) => num > 50)
console.log(newnums);