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

class Car extends Vehicle{
    drive(){
        return`${this.make} : this is an inheritance example`;
    }
}

let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

let vehONE = new Vehicle("Toyota","Corolla")
console.log(vehONE.make);
