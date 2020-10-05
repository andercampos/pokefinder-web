import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { CgPokemon, CgArrowLeft } from 'react-icons/cg';

import Controls from '../../components/Controls';
import Scene from '../../components/Scene';

import { Container, Header, Title } from './styles';

const Three: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>
          P<CgPokemon size={30} /> kefinder
        </Title>

        <Link to="/details">
          <CgArrowLeft size={24} />
          Voltar
        </Link>
      </Header>

      <Canvas
        camera={{ position: [100, 50, 50] }}
        style={{ height: '90%', borderRadius: 10 }}
      >
        <ambientLight intensity={0.5} />
        <Scene name="pikachu" />
        <Controls />
      </Canvas>
    </Container>
  );
};

export default Three;
