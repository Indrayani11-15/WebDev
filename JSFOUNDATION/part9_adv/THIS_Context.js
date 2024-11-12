const person = {
    name: "Hitesh",

    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    },
}

person.greet()

const greetFunction = person.greet
greetFunction()

const boundgreet = person.greet.bind({name:"John"});
boundgreet();


//Bind, call and apply(read and research)