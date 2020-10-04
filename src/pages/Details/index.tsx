import React from 'react';
import { CgPokemon } from 'react-icons/cg';

import { Container, Title } from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <Title>
        P<CgPokemon size={30} /> kefinder
      </Title>
    </Container>
  );
};

export default Details;
