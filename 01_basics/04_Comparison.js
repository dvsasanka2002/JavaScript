// console.log(2>1);
// >= <= < == != 

// console.log("2">1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);
// The reason is that an equality check and comparisons like >  < >= <= work diff
// comparisons convert the null to 0 whereas == doesnt

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);

// Strict checking === doesnt perform conversion checks datatype also
console.log("2" === 2);