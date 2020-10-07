import React, { Suspense, useState, useRef } from 'react';
import {
  useLoader,
  extend,
  useThree,
  useFrame,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ReactThreeFiber,
} from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box3 } from 'three';

import cameraPositionZ from '../../utils/cameraPositionZ';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

interface IModel {
  url: string;
}

interface OrbitRef {
  obj: {
    update: any;
  };
}

extend({ OrbitControls });

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

    const {
      camera,
      size: { width, height },
    } = useThree();

    const model = new Box3().setFromObject(loadedModel.scene);

    const calc = Math.min(
      width / (model.max.x - model.min.x),
      height / (model.max.y - model.min.y),
    );

    camera.position.set(0, 0, cameraPositionZ(calc));

    return <primitive object={loadedModel.scene} />;
  }

  const ref = useRef<OrbitRef>(null);
  const { camera, gl } = useThree();
  useFrame(() => {
    ref.current?.obj?.update();
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <Model url={`assets/${pokemon}/scene.gltf`} />
      <orbitControls ref={ref} args={[camera, gl.domElement]} />
    </Suspense>
  );
};

export default Scene;
