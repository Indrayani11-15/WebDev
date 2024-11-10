//clousures are functions and they remember the enviornment they are created in which means they can retain variables that are outside of it.

function outer(){
    let counter = 4
    return function(){
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment());
