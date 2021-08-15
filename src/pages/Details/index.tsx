import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { CgPokemon, CgArrowLeft } from 'react-icons/cg';
import { AiOutlineCodeSandbox } from 'react-icons/ai';

import api from '../../services/api';
import formatString from '../../utils/formatString';
import Image from '../../components/Image';

import { ITypeVariations } from '../../utils/typeVariations';

import {
  Container,
  Header,
  Title,
  Content,
  Pokemon,
  Detail,
  Info,
  Type,
  Li,
  Stats,
} from './styles';

interface IDetailsParams {
  pokemon: string;
  hasmodel: string;
}

type ILiType = ITypeVariations;

interface IStats {
  base_stat: number;
}

interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  imageURL: string;
  types: ILiType[];
  stats: IStats[];
}

const IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

const Details: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);

  const { params } = useRouteMatch<IDetailsParams>();

  useEffect(() => {
    async function loadDetails(): Promise<void> {
      const response = await api.get(`/pokemon/${params.pokemon}`);

      const { id, name, types, height, weight, stats } = response.data;

      const typesData = types.map((t: any) => ({
        type: t.type.name,
      }));

      const pokemonData = {
        id,
        name: formatString(name),
        height,
        weight,
        imageURL: `${IMAGE_URL}/${response.data.id}.png`,
        types: typesData,
        stats,
      };

      if (params.hasmodel) {
        localStorage.setItem('@pokefinder: pokemon', name);
      }

      setPokemon(pokemonData);
    }
    loadDetails();
  }, [params.pokemon, params.hasmodel]);

  return (
    <Container>
      <Header>
        <Title>
          <Link to="/">
            P<CgPokemon size={30} />
            kefinder
          </Link>
        </Title>

        <Link to="/">
          <CgArrowLeft size={24} />
          Voltar
        </Link>
      </Header>

      <Content>
        <Pokemon>
          <h1>{pokemon.name}</h1>
          <h1># {pokemon.id}</h1>
        </Pokemon>

        <Detail>
          <Image
            height={400}
            width={400}
            image={pokemon.imageURL}
            alt={pokemon.name}
          />
          <Info>
            <div>
              <h3>Height</h3>
              <span>{pokemon.height * 10} cm</span>
            </div>
            <div>
              <h3>Weidth</h3>
              <span>{pokemon.weight / 10} kg</span>
            </div>
            <Type>
              <h3>Type</h3>
              <ul>
                {!!pokemon.types &&
                  pokemon.types.map(t => (
                    <Li key={t.type} type={t.type}>
                      {t.type}
                    </Li>
                  ))}
              </ul>
            </Type>
          </Info>
          <Stats>
            {!!pokemon.stats && (
              <>
                <div>
                  <h3>HP</h3>
                  <span>{pokemon.stats[0].base_stat}</span>
                </div>
                <div>
                  <h3>Attack</h3>
                  <span>{pokemon.stats[1].base_stat}</span>
                </div>
                <div>
                  <h3>Defense</h3>
                  <span>{pokemon.stats[2].base_stat}</span>
                </div>
                <div>
                  <h3>Especial Attack</h3>
                  <span>{pokemon.stats[3].base_stat}</span>
                </div>
                <div>
                  <h3>Especial Defense</h3>
                  <span>{pokemon.stats[4].base_stat}</span>
                </div>
                <div>
                  <h3>Speed</h3>
                  <span>{pokemon.stats[5].base_stat}</span>
                </div>
              </>
            )}
          </Stats>
        </Detail>
        {params.hasmodel === 'true' && (
          <Link to="/model">
            <AiOutlineCodeSandbox size={24} />
            View 3d model
          </Link>
        )}
      </Content>
    </Container>
  );
};

export default Details;
