import { getPokemon } from './generics/get-pokemon';

getPokemon(1)
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
