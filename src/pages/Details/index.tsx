import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { CgPokemon, CgArrowLeft } from 'react-icons/cg';

import { Container, Header, Title, Content } from './styles';
import api from '../../services/api';
import formatString from '../../utils/formatString';

interface IDetailsParams {
  pokemon: string;
}

interface IPokemon {
  id: number;
  name: string;
  imageURL: string;
}

const Details: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon>({} as IPokemon);

  const { params } = useRouteMatch<IDetailsParams>();

  useEffect(() => {
    async function loadDetails(): Promise<void> {
      const response = await api.get(`/pokemon/${params.pokemon}`);

      setPokemons(response.data);
    }
    loadDetails();
  }, [params.pokemon]);

  return (
    <Container>
      <Header>
        <Title>
          P<CgPokemon size={30} /> kefinder
        </Title>

        <Link to="/">
          <CgArrowLeft size={24} />
          Voltar
        </Link>
      </Header>

      <Content>
        <div>
          <h1>{pokemons.name}</h1>
          <h1># {pokemons.id}</h1>
        </div>
      </Content>
    </Container>
  );
};

export default Details;
