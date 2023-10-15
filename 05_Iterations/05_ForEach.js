const arr = ["js","ruby","java","python","cpp"]
// arr.forEach(function (item) {
//     console.log(item);
// })
// arr.forEach(element => {
//     console.log((element));
// });

// function name(item) {
//     console.log(item);
// }
// arr.forEach(name)

// arr.forEach((item,index,i)=>{
//     console.log(item,index,i);
// })

const mycode = [
    {
        lang : "JavaScript",
        filename : "js"
    },
    {
        lang : "Java",
        filename : "java"
    },
    {
        lang : "Python",
        filename : "py"
    }
]

mycode.forEach((item)=>{
    console.log(item.filename);
})