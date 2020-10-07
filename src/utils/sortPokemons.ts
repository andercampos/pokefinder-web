interface IPokemon {
  id: number;
  name: string;
  imageURL: string;
  url: string;
}

const sortPokemons = (pokemons: IPokemon[], value: string): any[] => {
  let sortedPokemons;

  if (value === 'idASC') {
    sortedPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => a.id - b.id);
  }

  if (value === 'idDESC') {
    sortedPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => b.id - a.id);
  }

  if (value === 'nameASC') {
    sortedPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => (a.name > b.name ? 1 : -1));
  }

  if (value === 'nameDESC') {
    sortedPokemons = pokemons
      .map((pokemon: IPokemon) => ({
        ...pokemon,
      }))
      .sort((a: IPokemon, b: IPokemon) => (a.name > b.name ? -1 : 1));
  }

  return sortedPokemons || [];
};

export default sortPokemons;
