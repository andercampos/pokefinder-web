import React, { Suspense, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface IModel {
  url: string;
}

const Scene: React.FC = () => {
  const [pokemon] = useState(() => {
    const storagedPokemon = localStorage.getItem('@pokefinder: pokemon');

    if (storagedPokemon) {
      return storagedPokemon;
    }

    return '';
  });

  function Model({ url }: IModel): any {
    const loadedModel = useLoader(GLTFLoader, url);
    return <primitive object={loadedModel.scene} />;
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <Model url={`assets/${pokemon}/scene.gltf`} />
    </Suspense>
  );
};

export default Scene;
