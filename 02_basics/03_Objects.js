//Singleton : When using a Constructor this kind of obj is formed has only one instance
//When using a literal we have more than one instance 
// Declare Object like a literal and like a Constructor we use Object.create() This gives  singleton class
// Object Literals

const myS = Symbol("Key1")
const JsUser = {
    name : "Sasanka",
    age : 18,
    "full name": "D V Sasanka", // When like this no option but to use []
    [myS] : "Key1",
    location : "Hyd",
    email : "sasanka2002@gmail.com",
    isLoggedin : false,
    lastLoggedinDays : ["Monday","Tuesday"]
}

// console.log(JsUser.age)
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[myS]); // When accessing symbols must use [] only 

// JsUser.email = "sasanka@yahoo.com"
// Object.freeze(JsUser)
// JsUser.email = "sasanka@ysoftcom"
// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greetingTwo())