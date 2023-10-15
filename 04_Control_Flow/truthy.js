const email = []
if (email) {
    console.log("Have email");
}
else
{
    console.log("No Email");
}

//falsy values
// 0, false, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
// "0", "false", " ", [], {}, function(){},

if (email.length === 0) {
    console.log("Empty Array");
}

const obj = {}
if(Object.keys(obj).length === 0)
{
    console.log("EMpty Obj");
}

// Nullish Coalescing Operator (??) : null, undefined
let v
// v = 5 ?? 10 // 5
// v = null ?? 10 // 10
// v = undefined ?? 15 // 15
// v = null ?? undefined ?? 20 ?? 30
// console.log(v);

// Terniary Operator 
// condition ? true : false

const tea = 5
tea >= 5 ? console.log("Hi") : console.log("No");