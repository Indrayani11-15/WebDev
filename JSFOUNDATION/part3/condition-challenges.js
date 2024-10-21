//checking if a number is greater than another number:

let num1 = 5
let num2 = 8

/*
console.log("i am a regular upper code");
if(num1>num2){
    console.log("num1 is greater than num2");
    
}else{
    console.log("nope num1 is not greater");
    
}

console.log("i am a regular bottom code");
*/

//Checking if a string is equal to another string:

let username = "chai"
let anotherUsername = "chai"

if(username == anotherUsername){
    // console.log("Pick another username");
    
}else{
    console.log("you can pick this username!");
    
}

//Checking if a variable is a number or not:

let score = "44"

if (typeof score === 'number') {
    console.log("Yep, this is a number");
    
}else{
    // console.log("No that is not a number");
    
}

//Check is a boolean value is true or false:

let isTeaReady = false

if (isTeaReady) {
    console.log("Tea is ready");
    
}else{
    // console.log("Tea is not ready");
    
}

//CHecking if array is empty or not:

let items = ["item"]

console.log(items.length);


if (items.length === 0) {
    console.log("Array is empty");
    
}else{
    console.log("Array is not empty");
    
}