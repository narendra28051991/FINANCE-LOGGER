// interfaces
interface IsPerson {
  name: string,
  age: number,
  speak(a: string): void,
  spend(a: number): number
}

const me: IsPerson = {
  name: 'Narendra',
  age: 32,
  speak(language: string): void {
    console.log(language);
  },
  spend(amount: number): number {
    console.log('I spent: ', amount);
    return amount;
  }
}

const greet = (person: IsPerson) => {
  console.log(person.name);
  console.log(person.age);
  person.speak('English');
  person.spend(555);
}

greet(me);
