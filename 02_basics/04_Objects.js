const tinder = new Object()
tinder.id = "123abc"
tinder.name = "Sam"
tinder.isLoggedin = false
// console.log(tinder);
const regUser = {
    email : "user@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Sas",
            lastname : "Div"
        }

    }
}
// console.log(regUser.fullname?.userfullname.firstname); 
// Optional Chaining ? : Checks if the path exists otherwise no response rather than error
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}
// const obj3 = {obj1,obj2}\
// const obj3 = Object.assign({},obj1,obj2) // target,source Here {} is the source so that now we can have all others to be source
// Can give any no of sources
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "sasanka"
    },
    {

    },
    {

    }
]
// console.log(users[0].email)

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty("id"))