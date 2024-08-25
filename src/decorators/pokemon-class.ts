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

@printToConsoleConditional(false)
export class Pokemon {
  public plublicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}
