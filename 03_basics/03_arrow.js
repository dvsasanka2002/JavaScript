const user = {
    username : "Sasanka",
    price : 999,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Hi"
// user.welcomeMessage()
// console.log(this) // {}
// The Global Object in browser is Window hence when we execute above stat we get Window Obj


function name()
{
    let name = "Sasanka"
    // console.log(this.name) // Prints undefined
}
// name()
const n = function f()
{
    let name = "Sasanka"
    console.log(this.name); // Still Undefined is printed
}
// n()

const arrow = () =>{
    let name = "Sasanka"
    console.log(this);  // Prints empty obj
}
// arrow()

// const add = (n1,n2)=>{
//     return n1+n2
// }

const add = (n1,n2)=> n1+n2 // Implicit Return 
// When using Braces return keyword is must but when using paranthesis not req

// To return objs
const fi = ()=>({username :"S"})

// console.log(fi());

const arr = [2,3,4,5]
// arr.forEach(()=>())