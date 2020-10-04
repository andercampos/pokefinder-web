import { css } from 'styled-components';

export interface ITypeVariations {
  type:
    | 'grass'
    | 'poison'
    | 'fire'
    | 'flying'
    | 'water'
    | 'bug'
    | 'normal'
    | 'electric'
    | 'ground'
    | 'fairy'
    | 'fighting'
    | 'psychic'
    | 'rock'
    | 'steel'
    | 'ice'
    | 'ghost'
    | 'dragon'
    | 'dark';
}

export const typeVariations = {
  grass: css`
    background: #9bcc50;
  `,
  poison: css`
    background: #b97fc9;
  `,
  fire: css`
    background: #fd7d24;
  `,
  flying: css`
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  `,
  water: css`
    background: #4592c4;
  `,
  bug: css`
    background: #729f3f;
  `,
  normal: css`
    background: #a4acaf;
    color: #212121;
  `,
  electric: css`
    background: #eed535;
    color: #212121;
  `,
  ground: css`
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    color: #212121;
  `,
  fairy: css`
    background: #fdb9e9;
    color: #212121;
  `,
  fighting: css`
    background: #d56723;
  `,
  psychic: css`
    background: #f366b9;
  `,
  rock: css`
    background: #a38c21;
  `,
  steel: css`
    background: #9eb7b8;
  `,
  ice: css`
    background: #51c4e7;
    color: #212121;
  `,
  ghost: css`
    background: #7b62a3;
  `,
  dragon: css`
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  `,
  dark: css`
    background: #707070;
  `,
};
