import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { CgPokemon } from 'react-icons/cg';

import api from '../../services/api';

import Card from '../../components/Card';

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

interface IType {
  type: {
    name: string;
  };
}

interface IPokemon {
  id: number;
  name: string;
  imageURL: string;
  types: IType[];
}

const Dashboard: React.FC = () => {
  const [pagination, setPagination] = useState<IPagination>();
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      await api.get('/pokemon/?limit=12&offset=0').then(response => {
        const { next } = response.data;

        const pokemonData = response.data.results.map(
          (pokemon: IPokemon, index: number) => ({
            id: index + 1,
            name: pokemon.name,
            imageURL: `https://pokeres.bastionbot.org/images/pokemon/${
              index + 1
            }.png`,
          }),
        );

        setPokemons(pokemonData);
        setPagination(next);
      });
    }
    loadPokemons();
  }, []);

  return (
    <Container>
      <Title>
        P<CgPokemon size={30} /> kefinder
      </Title>

      <Form>
        <div>
          <input
            type="text"
            placeholder="Search for a Pokémon by name or number"
          />
          <FiSearch size={24} />
        </div>
        <button type="submit">Find</button>
        <select>
          <option value="name">Lowest Number(First)</option>
          <option value="name">Highest Number(First)</option>
          <option value="name">A - Z</option>
          <option value="name">Z - A</option>
          <option value="name">name</option>
        </select>
      </Form>

      <Content>
        {!!pokemons &&
          pokemons.map(pokemon => (
            <Card
              key={pokemon.name}
              id={pokemon.id}
              name={pokemon.name}
              imageURL={pokemon.imageURL}
            />
          ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
