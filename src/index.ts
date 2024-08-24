//SuperHero is an alias for Hero
// import { Hero as SuperHero } from './classes/Hero';

import * as HeroClasses from './classes/Hero';

const ironman = new HeroClasses.Hero('IronMan', 1, 40);

console.log(ironman);
console.log(ironman.power);
