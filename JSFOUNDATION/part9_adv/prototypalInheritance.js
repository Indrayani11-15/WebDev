function Person(name){
    this.name = name
}

Person.prototype.greet = funtion(){
    console.log(`Hello, my name is ${this.name} `);
    
};

let hitesh = new Person("Hitesh")
hitesh.greet();