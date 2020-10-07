import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import formatString from '../../utils/formatString';

import Image from '../Image';
import { ITypeVariations } from '../../utils/typeVariations';

import { Container, Li } from './styles';

type IType = ITypeVariations;

interface ICardProps {
  id: number;
  name: string;
  imageURL: string;
  hasModel: boolean;
}

const Card: React.FC<ICardProps> = ({ id, name, imageURL, hasModel }) => {
  const [types, setTypes] = useState<IType[]>([]);

  useEffect(() => {
    async function loadPokemon(): Promise<void> {
      const response = await api.get(`/pokemon/${name}`);

      const typesData = response.data.types.map((t: any) => ({
        type: t.type.name,
      }));

      setTypes(typesData);
    }
    loadPokemon();
  }, [name]);

  return (
    <Container>
      <Link to={`/details/${name}/${hasModel}`}>
        <Image height={200} width={200} image={imageURL} alt={name} />
        <p># {id}</p>
        <h3>{formatString(name)}</h3>

        <ul>
          {!!types &&
            types.map(t => (
              <Li key={t.type} type={t.type}>
                {formatString(t.type)}
              </Li>
            ))}
        </ul>
      </Link>
    </Container>
  );
};

export default memo(Card);
