interface IPokemon {
  id: number;
  name: string;
  imageURL: string;
  url: string;
}

const filterPokemons = (pokemons: IPokemon[], value: string): any => {
  let filteredPokemons;

  if (value === 'idASC') {
    filteredPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => a.id - b.id);
  }

  if (value === 'idDESC') {
    filteredPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => b.id - a.id);
  }

  if (value === 'nameASC') {
    filteredPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => (a.name > b.name ? 1 : -1));
  }

  if (value === 'nameDESC') {
    filteredPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => (a.name > b.name ? -1 : 1));
  }

  return filteredPokemons;
};

export default filterPokemons;
