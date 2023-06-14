const characterOne = 'mario';

console.log(characterOne);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

let characterTwo = 'mario';
let age = 30;
let isBlackBelt = false;

// characterTwo = 20;
characterTwo = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(area('hello'));
console.log(circ(7.5));
