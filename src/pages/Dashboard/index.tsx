import React, { useCallback, useEffect, useState, FormEvent } from 'react';
import { CgSearch, CgPokemon } from 'react-icons/cg';

import api from '../../services/api';
import models from '../../data/models.json';

import Card from '../../components/Card';
import getPokemonId from '../../utils/getPokemonId';
import sortPokemons from '../../utils/sortPokemons';

import { Container, Title, Form, Content, Error } from './styles';

interface IPagination {
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
    },
  ];
}

interface IPokemon {
  id: number;
  name: string;
  imageURL: string;
  url: string;
  hasModel: boolean;
}

const Dashboard: React.FC = () => {
  const [pagination, setPagination] = useState<IPagination>();
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [inputError, setInputError] = useState('');
  const [findPokemon, setFindPokemon] = useState('');
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await api.get('/pokemon/?limit=8&offset=0');

      const pokemonData = response.data.results.map((pokemon: IPokemon) => ({
        id: getPokemonId(pokemon.url),
        name: pokemon.name,
        imageURL: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(
          pokemon.url,
        )}.png`,
        url: pokemon.url,
        hasModel: models.name.includes(pokemon.name),
      }));

      setPokemons(pokemonData);
      setPagination(response.data);
    }
    loadPokemons();
  }, []);

  const handleSearch = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!findPokemon) {
        setInputError('Enter the name or number of the Pokémon');
        return;
      }

      try {
        const response = await api.get(`/pokemon/${findPokemon.toLowerCase()}`);

        const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`;

        const pokemon = [
          {
            id: response.data.id,
            name: response.data.name,
            imageURL,
            url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}/`,
            hasModel: models.name.includes(response.data.name),
          },
        ];

        if (pokemons.length > 1) {
          localStorage.setItem(
            '@pokefinder: pokemons',
            JSON.stringify(pokemons),
          );
        }

        setInputError('');
        setFilter(true);
        setPokemons(pokemon);
        setFindPokemon('');
      } catch (err) {
        setInputError('No Pokémon matched your search');
      }
    },
    [findPokemon, pokemons],
  );

  const handleLoadMore = useCallback(async () => {
    if (!pagination?.next) {
      return;
    }

    const [, next] = pagination.next.split('?');

    const response = await api.get(`/pokemon/?${next}`);

    const pokemonData = response.data.results.map((pokemon: IPokemon) => ({
      id: getPokemonId(pokemon.url),
      name: pokemon.name,
      imageURL: `https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(
        pokemon.url,
      )}.png`,
      url: pokemon.url,
      hasModel: models.name.includes(pokemon.name),
    }));

    const updatedPokemonList = pokemons.concat(pokemonData);

    const removePokemonsDuplicate = updatedPokemonList.filter(
      (pokemon: IPokemon, index, self) =>
        index ===
        self.findIndex((poke: IPokemon) => poke.name === pokemon.name),
    );

    setPokemons(removePokemonsDuplicate);

    setPagination(response.data);
  }, [pagination, pokemons]);

  const handleFilter = useCallback(
    async e => {
      const { value } = e.target;

      if (value !== '3dModel') {
        const sortedPokemons = sortPokemons(pokemons, value);

        setPokemons(sortedPokemons);
      } else {
        await Promise.all(
          models.name.map(name => api.get(`/pokemon/${name}`)),
        ).then(response => {
          const sortedBy3dModels = response.map((res: any) => ({
            id: res.data.id,
            name: res.data.name,
            imageURL: `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`,
            url: res.data.url,
            hasModel: models.name.includes(res.data.name),
          }));

          setPokemons(sortedBy3dModels);
        });
      }
    },
    [pokemons],
  );

  const handleGoBack = useCallback(() => {
    const storagedPokemons = localStorage.getItem('@pokefinder: pokemons');

    if (storagedPokemons) {
      setPokemons([...JSON.parse(storagedPokemons)]);
    }

    setFilter(false);
  }, []);

  return (
    <Container>
      <Title>
        P<CgPokemon size={30} /> kefinder
      </Title>

      <Form hasError={!!inputError} onSubmit={handleSearch}>
        <div>
          <input
            value={findPokemon}
            onChange={e => setFindPokemon(e.target.value)}
            type="text"
            placeholder="Search for a Pokémon by name or number"
          />
          <CgSearch size={24} />
        </div>
        <button type="submit">Search</button>
        {!filter ? (
          <select onChange={handleFilter}>
            <option value="idASC">Lowest Number(First)</option>
            <option value="idDESC">Highest Number(First)</option>
            <option value="nameASC">A - Z</option>
            <option value="nameDESC">Z - A</option>
            <option value="3dModel">3D Models</option>
          </select>
        ) : (
          <button type="button" onClick={handleGoBack}>
            Explore more
          </button>
        )}
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Content>
        {pokemons.map(pokemon => (
          <Card
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            imageURL={pokemon.imageURL}
            hasModel={pokemon.hasModel}
          />
        ))}

        {!filter && (
          <button type="button" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
