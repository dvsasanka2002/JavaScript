const accountId = 14453
let accountEmail = "sasanka2002@gmail.com"
var accountPassword = "12345" // Scoping issues dont use
accountCity = "Jaipur" // dont use only use const and let

let accountState; // ; is not mandatory and when not init stores as undefined
// accountId = 2  Gives an Error since "const"
accountEmail = "123"
accountPassword = "456"
accountCity = "14585"
/*
Prefer not use var because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])