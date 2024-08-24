import { printObject, genericFunction } from './generics/generics';
import { Hero } from './interfaces/hero';
import { Villain } from './interfaces/villain';

// printObject(123);
// printObject('Hello World');
// printObject({ key: 'value' });
// printObject(new Date());
// printObject([1, 2, 3]);

// console.log(genericFunction(3.1416));
// console.log(genericFunction('Hello World').toUpperCase());
// console.log(genericFunction(new Date()).getDay());

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Wilson',
  dangerLevel: 130,
};

console.log(genericFunction<Hero>(deadpool).name);
console.log(genericFunction<Villain>(deadpool).dangerLevel);
