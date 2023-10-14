const h = ["Hi","Hello","New"]
const d = ["you","me","now"]
// h.push(d)
// console.log(h); // Array in Array
// const t = h.concat(d)
// console.log(t);
const arr = [...d,...h]
// console.log(arr);
// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real = another_arr.flat(Infinity)
// console.log(real);

// console.log(Array.isArray([1,2]));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name : "Hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
console.log(new Array(score1,score2,score3))


