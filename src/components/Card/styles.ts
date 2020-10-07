import styled from 'styled-components';

import { ITypeVariations, typeVariations } from '../../utils/typeVariations';

type ILiType = ITypeVariations;

export const Container = styled.div`
  position: relative;
  background: #1f211f;
  border-radius: 10px;
  width: 200px;
  padding-bottom: 8px;
  text-decoration: none;
  transition: transform 0.2s;

  @media (max-width: 520px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-10px);
  }

  a {
    text-decoration: none;

    svg {
      position: absolute;
      right: 8px;
      bottom: 65px;

      color: var(--text-color);
    }
  }

  p {
    font-size: 12px;
    color: #999;
    padding: 4px 8px;
  }

  h3 {
    color: var(--text-color);
    font-size: 20px;
    padding: 4px 8px;
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0 8px;
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
