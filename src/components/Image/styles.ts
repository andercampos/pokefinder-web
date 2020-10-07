import styled from 'styled-components';

interface IImageProps {
  height: number;
  width: number;
}

export const Container = styled.div<IImageProps>`
  background: var(--shape);
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    height: auto;
    width: auto;
  }

  img {
    height: 80%;

    @media (max-width: 750px) {
      padding: 8px;
      height: auto;
      max-width: 100%;
    }
  }
`;
