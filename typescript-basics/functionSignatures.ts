// let greet: Function;

// example 1
let greetNew: (a: string, b: string) => void;

greetNew = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetailsAgain: (obj: {name: string, age: number}) => void;

logDetailsAgain = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
