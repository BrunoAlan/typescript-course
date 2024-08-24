import { printObject, genericFunction } from './generics/generics';

// printObject(123);
// printObject('Hello World');
// printObject({ key: 'value' });
// printObject(new Date());
// printObject([1, 2, 3]);

console.log(genericFunction(3.1416));
console.log(genericFunction('Hello World').toUpperCase());
console.log(genericFunction(new Date()).getDay());
