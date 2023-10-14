// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let create = new Date(2023,0,23) //Mon Jan 23 2023 0 for Jan 
// console.log(create.toDateString());
// let create_new = new Date(2023,0,23,5,3)
// console.log(create_new.toLocaleString())

// let d = new Date("2023-01-15")
let d = new Date("01-15-2023")
// console.log(d.toDateString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(d.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth()+1)//Month is 0 indexed
// console.log(newDate.getDay());
// ctrl + space to get all the available options
//`${newDate.getDay()}`
console.log(newDate.toLocaleDateString('defualt',{
    weekday : "long",
}))

