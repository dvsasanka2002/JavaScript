const s = function name () {
    console.log("Sasanka")
}
// name() // Cant be used now
// s()

function add (n1,n2) { // In def they are called parameters
    // // console.log(n1+n2)
    // let res = n1+n2
    // return res
    return n1+n2
} 
// add(2,3) //  here called arguments

// const res = add(3,4)
// console.log(res);

function login(name = "Sam") { //Default Param
    if(name === undefined)// (!username)
    {
        console.log("Undefined")
        return ""
    }
    return `${name} just logged in`
}
// console.log(login()) // undefined just logged in
// console.log(login())

function calc(v1,v2,...n1) {
    return n1
}
// console.log(calc(5,6,7)); // Only 7 is stored in n1
// Now use Rest Op ... prev we named it Spread when destructering

const user = {
    username :"Sasanka",
    price : 200
}
function f(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// f(user)
// f({
//     username : "Sasanka",
//     price : 100
// })

const arr = [200,300,400,500]
function ret(arr)
{
    return arr[0]
}
// console.log(ret(arr))
// console.log(ret([1,2]))