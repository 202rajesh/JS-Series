const accountId =  123333
let accountEmail = "202rajeshkr@gmail.com"
var accountPassword  = "121314"
accountCity = "Jaipur"
let accountState = "Bihar"

//accountId = 2 This is Not Allowed

accountEmail = "rajesh.com"
accountPassword= "35635636"
accountCity = "Jaipur"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])





