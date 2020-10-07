import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { CgPokemon, CgArrowLeft } from 'react-icons/cg';

import Scene from '../../components/Scene';

import { Container, Header, Title, Button } from './styles';

const Three: React.FC = () => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      <Header>
        <Title>
          <Link to="/">
            P<CgPokemon size={30} />
            kefinder
          </Link>
        </Title>

        <Button type="button" onClick={handleClick}>
          <CgArrowLeft size={24} />
          Voltar
        </Button>
      </Header>

      <Canvas
        camera={{ position: [0, 0, 50] }}
        style={{ height: '90%', borderRadius: 10 }}
      >
        <ambientLight intensity={0.5} />
        <Scene />
      </Canvas>
    </Container>
  );
};

export default Three;
