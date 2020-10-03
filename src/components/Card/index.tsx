import React, { useEffect, useState } from 'react';

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
}

const Card: React.FC<ICardProps> = ({ id, name, imageURL }) => {
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
      <Image image={imageURL} alt={name} />
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
    </Container>
  );
};

export default Card;
