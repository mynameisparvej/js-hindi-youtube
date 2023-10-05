const AccountId = 144453 // const mean cannot be change
let accountEmail  = "parvejkhan39232@gmail.com" //
var accountPassword  =  "423551"
accountcity = "delhi" 
let accountState; // it will print undefined

// prefer not to use var because of the issue  of block scope and funtional scope  



//AccountId = 221   // here we are changing but node js will not change because accountId is const

accountEmail = "jkfdfjk"

accountPassword = "6759625"

accountcity = "madras"

console.log(AccountId);  // console will print the stuff in browsers 


console.table([accountEmail, accountPassword, accountcity, AccountId]) // everything  can be print in just one console 