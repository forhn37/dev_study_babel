// src/index.js
const greeting = "Hello, Babel!";

const sayHello = () => {
  console.log(greeting);
};

const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(num => num * num);

class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

const myGreeter = new Greeter("초보 개발자 행님");
console.log(myGreeter.greet());

sayHello();
console.log(squaredNumbers);