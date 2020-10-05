import React, { useRef } from 'react';
import { extend, useThree, useFrame, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

interface OrbitRef {
  obj: {
    update: any;
  };
}

extend({ OrbitControls });

const Controls: React.FC<any> = props => {
  const ref = useRef<OrbitRef>(null);
  const { camera, gl } = useThree();
  useFrame(() => {
    ref.current?.obj?.update();
  });
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

export default Controls;
