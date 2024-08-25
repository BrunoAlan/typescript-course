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

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.log('Invalid Pokemon ID');
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readOnly(isWritable: boolean = false): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return 'Fernando';
      },
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}
@blockPrototype
export class Pokemon {
  @readOnly()
  public plublicApi: string = 'https://pokeapi.co';
  constructor(public name: string) {}

  @CheckValidPokemonId()
  saveToDatabase(id: number) {
    console.log(`Saving to database with id: ${id}`);
  }
}
