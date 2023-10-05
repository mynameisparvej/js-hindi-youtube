// how we keep data in memory on the basis of that we categories datatypes in two parts 


// primitive data types  -> 7 types 
// string, number , boolean , null , undefined , symbol, bigint

const score = 100 
const scoreValue =  100.3 

const isLoggedIn  = false 
const outSidetemp = null 
let userEmail;


const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

const bigNumber = 4746785427827878232732n


// non primitive ( references)
// array , object, function  


const heros = ["shaktiman", "naagraj"," dogla"] ;  // this is the example of array 

// object are written in { }  curly braces 

let myObj = {
    name: "parevj",
    age: 22, 
}

const myFunction = function(){
    console.log("hello world");
}
