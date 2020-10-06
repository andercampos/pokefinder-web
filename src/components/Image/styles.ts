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

  img {
    height: 80%;
  }
`;
