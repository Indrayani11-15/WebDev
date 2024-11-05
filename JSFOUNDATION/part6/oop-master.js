let car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    },

};
// console.log(car.start());

function Person(name,age){
    this.age = age
    this.name = name
}

let John = new Person("John", 20)
// console.log(John.name);

function Animal(type){
    this.type = type
}
//prototypal chain
// Animal.prototype.speak = funtion(){  
//     return `${this.type} makes a sound`
// }

class Vehicle {
    constructor(make,model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make} `
    }
}

//INHERITANCE

class Car extends Vehicle{
    drive(){
        return`${this.make} : this is an inheritance example`;
    }
}

let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

let vehONE = new Vehicle("Toyota","Corolla")
// console.log(vehONE.make);

//ENCAPSULATION

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;

    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance());



//ABSTRACTION

class CoffeeMachine{
    start(){
        //call DB
        //filter value
        return `Starting the machine...`;
    }

    brewCoffee(){
        //complex calc
        return `Brewing coffee`
    }

    pressStartButton(){
       let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return`${msg1} + ${msg2}`
    }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


//POLYMORPHISM

class Bird{
    fly(){
        return `Flying...`
    
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());

//STATIC METHOD

class Calculator{
     static add(a,b){
        return a+b
    }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));

console.log(Calculator.add(2,3));


//Getters and Setters

class Employee{
    #salary;
    constructor(name,salary){
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return `you are not allowed to see salary`
    }

    set salary(value){
        if (value<0) {
            console.error("Invalid salary");
            
        }else{
            this._salary = value
        }
    }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary);
