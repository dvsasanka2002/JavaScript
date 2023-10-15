// For of 
// ["","",""]
//[{},{},{}]

// const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }
// const greet = "HelloHi"
// for (const g of greet) {
//     console.log(g);
// }

// Maps

// const map = new Map()
// map.set("IN","India")
// map.set("USA", "United States of America")
// map.set("Fr","France")
// // console.log(map);

// for (const [key,val] of map) {
//     console.log(key+ ":"+val);
// }

const obj = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}
for (const [key,val] of obj) {
    // console.log(key+ ":"+val); This is not iterable error for Obj
}

// Maps are iterable but not Objects
