import React, { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface IModel {
  url: string;
}

interface IScene {
  name: string;
}

const Scene: React.FC<IScene> = ({ name }) => {
  function Model({ url }: IModel): any {
    const loadedModel = useLoader(GLTFLoader, url);
    return <primitive object={loadedModel.scene} />;
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <Model url={`assets/${name}/scene.gltf`} />
    </Suspense>
  );
};

export default Scene;
