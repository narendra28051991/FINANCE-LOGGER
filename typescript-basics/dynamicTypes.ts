/*
    Dynamic (any) type
*/

let ageTwo: any = 25;

ageTwo = true;
console.log(ageTwo);
ageTwo = 'hello';
console.log(ageTwo);
ageTwo = { name: 'luigi' };
console.log(ageTwo);

let mixedOne: any[] = [];

mixedOne.push(5);
mixedOne.push('mario');
mixedOne.push(false);
console.log(mixedOne);

let ninjaThree: { name: any, age: any };

ninjaThree = { name: 'yoshi', age: 25 };
console.log(ninjaThree);

ninjaThree = { name: 25, age: 'yoshi' };
console.log(ninjaThree);
