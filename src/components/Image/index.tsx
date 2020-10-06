import React from 'react';

import { Container } from './styles';

interface ImageProps {
  image: string;
  alt: string;
  height: number;
  width: number;
}

const Image: React.FC<ImageProps> = ({ image, alt, height, width }) => (
  <Container width={width} height={height}>
    <img src={image} alt={alt} />
  </Container>
);

export default Image;
