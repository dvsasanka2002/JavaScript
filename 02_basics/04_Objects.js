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
console.log(regUser.fullname.userfullname.firstname);