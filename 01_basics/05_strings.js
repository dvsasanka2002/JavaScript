const name = "Sasan-ka"
const count = 50
// console.log(name+count+" value")
// `` used for string interpolation
console.log(`My name is ${name} and my count is ${count}`)

const s = new String("Sasanka") 
console.log(s) // [String: 'Sasanka']

console.log(s.length)
console.log(s.toUpperCase())
console.log(s.charAt(2))
console.log(s.indexOf('s'))

const newS = s.substring(-1,4) // IF u give neg for start val in substring ignores and takes 0
console.log(newS);

const anotherS = s.slice(-7,4) // -1 for last char and -2 for the one before
console.log(anotherS);

const str = "   jknk   "
const newstr = str.trim()
console.table([str.length,newstr.length])

const url = "https://sasanka%20.com"
const newUrl = url.replace("%20","gmail")
console.log(newUrl)

console.log(newUrl.includes("sasanka"))
console.log(newUrl.split("."))