import styled from 'styled-components';

import { ITypeVariations, typeVariations } from '../../utils/typeVariations';

type ILiType = ITypeVariations;

export const Container = styled.div`
  height: 100%;

  padding: 0 32px;

  @media (max-width: 750px) {
    padding: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--text-color);
    transition: color 0.2s;

    &:hover {
      color: #999;
    }

    svg {
      margin-right: 8px;

      @media (max-width: 400px) {
        margin-right: 2px;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--text-color);
  display: flex;
  align-items: center;

  a {
    &:hover {
      color: var(--text-color);
    }

    svg {
      margin-right: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  a {
    align-self: center;
    display: flex;
    align-items: center;

    font-size: 24px;
    text-decoration: none;
    color: var(--text-color);
    transition: color 0.2s;

    margin-bottom: 32px;

    &:hover {
      color: #999;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Pokemon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: var(--text-color);
  }

  h1 + h1 {
    color: #999;
    margin-left: 32px;
  }
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;

  background: #1f211f;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 32px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px 16px;

  @media (max-width: 750px) {
    margin-top: 16px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Type = styled.section`
  h3 {
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    display: flex;
  }
`;

export const Li = styled.li<ILiType>`
  text-align: center;
  color: #fff;
  width: 75px;
  border-radius: 4px;

  ${props => typeVariations[props.type]}

  & + li {
    margin-left: 8px;
  }
`;

export const Stats = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;

  @media (max-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
