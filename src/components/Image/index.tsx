import React from 'react';

import { Container } from './styles';

interface ImageProps {
  image: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ image, alt }) => (
  <Container>
    <img src={image} alt={alt} />
  </Container>
);

export default Image;
