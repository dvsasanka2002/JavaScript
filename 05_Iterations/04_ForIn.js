const obj = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift"
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        // console.log(element);
        
    }
}

const arr = [1,2,"hd","dhjs"]
for (const key in arr) {
        // console.log(key);//  Here Indices of array are printed
        // console.log(arr[key]); 
} 

// Cant use above on maps

const map = new Map()
map.set("IN","India")
map.set("USA", "United States of America")
map.set("Fr","France")

for (const key in map) {
    // console.log(key); // Blank on Printing
}
