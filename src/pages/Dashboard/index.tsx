import React, { useCallback, useEffect, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { CgPokemon } from 'react-icons/cg';

import api from '../../services/api';

import Card from '../../components/Card';
import getPokemonId from '../../utils/getPokemonId';
import filterPokemons from '../../utils/filterPokemons';

import { Container, Title, Form, Content } from './styles';

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
}

const Dashboard: React.FC = () => {
  const [pagination, setPagination] = useState<IPagination>();
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [findPokemon, setFindPokemon] = useState('');
  const [filter, setFilter] = useState(false);
  const history = useHistory();

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
          },
        ];

        setFilter(true);
        setPokemons(pokemon);
        setFindPokemon('');
      } catch (err) {
        console.log(err);
      }
    },
    [findPokemon],
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
    }));

    const updatedPokemonList = pokemons.concat(pokemonData);

    setPokemons(updatedPokemonList);

    setPagination(response.data);
  }, [pagination, pokemons]);

  const handleFilter = useCallback(
    e => {
      const { value } = e.target;
      const filteredPokemons = filterPokemons(pokemons, value);

      setPokemons(filteredPokemons);
    },
    [pokemons],
  );

  function handleGoBack(): void {
    setFilter(false);
    history.push('/');
  }

  return (
    <Container>
      <Title>
        P<CgPokemon size={30} /> kefinder
      </Title>

      <Form onSubmit={handleSearch}>
        <div>
          <input
            value={findPokemon}
            onChange={e => setFindPokemon(e.target.value)}
            type="text"
            placeholder="Search for a Pokémon by name or number"
          />
          <FiSearch size={24} />
        </div>
        <button type="submit">Find</button>
        <select onChange={handleFilter}>
          <option value="idASC">Lowest Number(First)</option>
          <option value="idDESC">Highest Number(First)</option>
          <option value="nameASC">A - Z</option>
          <option value="nameDESC">Z - A</option>
        </select>
      </Form>

      <Content>
        {pokemons.map(pokemon => (
          <Card
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            imageURL={pokemon.imageURL}
          />
        ))}

        {!filter ? (
          <button type="button" onClick={handleLoadMore}>
            Load more
          </button>
        ) : (
          <button type="button" onClick={handleGoBack}>
            Back
          </button>
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
