// let var const
// var c = 300
let a = 105
if(true)
{
    let a = 10
    const b = 20
    var c = 30
}
// console.table([a,c]) //  b show not defined but c is found

//Block Scope in if stat
//Scope is diff when we use Node to run js and when we run in Browser

//DOM : Document Object Model

function one(){
    const name = "Sasanka"
    function two()
    {
        console.log(name)
        const web = "youtube"
    }
    // console.log(web) // Error 
    two()
}

// one()

if(true)
{
    const name = "Sas"
    if(name === "Sas")
    {
        const web ="google"
        // console.log(name + " "+web); No Error
    }
    // console.log(web); Error
}
// console.log(name);Erorr

// Hoisting Functions

console.log(addOne(5)); // No Error
function addOne(num)
{
    return num+1
}
// console.log(addTwo(5)); // This Gives Error
const addTwo = function(num)
{
    return num +2
}
