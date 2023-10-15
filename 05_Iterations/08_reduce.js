const nums = [1,2,3]
let initval = 0
// let t = nums.reduce((acc,curr)=>{
//     console.log(`acc : ${acc} and curr : ${curr}`);
//     return acc+curr
// },initval)
let t = nums.reduce((acc,curr)=>(acc+curr),0)
// console.log(t);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

t = shoppingCart.reduce((acc,curr)=>{
    return acc +curr.price
},0)
t = shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(t);