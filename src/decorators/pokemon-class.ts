function printToConsole(constructior: Function) {
  console.log(constructior);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  public plublicApi: string = 'https://pokeapi.co';
  constructor(public name: string) {}
}
