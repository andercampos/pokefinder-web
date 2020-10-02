import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { CgPokemon } from 'react-icons/cg';

import api from '../../services/api';

import Image from '../../components/Image';

import { Container, Title, Form, Content, Card } from './styles';

interface IPagination {
  next: string;
  previous: string;
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
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [pagination, setPagination] = useState<IPagination>();

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
            type: getPokemonType(index + 1),
          }),
        );

        setPokemons(pokemonData);
        setPagination(next);
      });
    }
    loadPokemons();
  }, []);

  console.log(pokemons);

  async function getPokemonType(id: number): Promise<IType> {
    const response = await api.get(`pokemon/${id}`);

    const types = response.data.types.map((t: IType) => t.type.name);

    // const pokemon: IPokemon = {
    //   id: response.data.id,
    //   name: response.data.name,
    //   imageURL: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`,
    //   types,
    // };

    // setPokemons([...pokemons, pokemon]);
    return types;
  }

  return (
    <Container>
      <Title>
        P<CgPokemon size={30} /> kefinder
      </Title>

      <Form>
        <div>
          <input type="text" placeholder="Digite o nome ou número do pokemon" />
          <FiSearch size={24} />
        </div>
        <button type="submit">Pesquisar</button>
        <select>
          <option value="name">Filtrar por...</option>
          <option value="name">Nome</option>
          <option value="name">name</option>
          <option value="name">name</option>
          <option value="name">name</option>
        </select>
      </Form>

      <Content>
        {pokemons.map(pokemon => (
          <Card key={pokemon.name} href="/">
            <Image image={pokemon.imageURL} alt={pokemon.name} />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <ul>
              <li>Grass</li>
              <li>Poison</li>
            </ul>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
