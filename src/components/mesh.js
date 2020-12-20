import { MeshWobbleMaterial } from "@react-three/drei";
import React, { useRef, useState } from "react";

import { useFrame } from "react-three-fiber";

const SpinningBox = ({ position, args, color, speed }) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <>
      <mesh
        castShadow
        position={position}
        ref={mesh}
        scale={active ? [1.4, 1.4, 1.4] : [1, 1, 1]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          attach="material"
          speed={speed}
          factor={0.6}
          color={hovered ? "hotpink" :  color }
        />
      </mesh>
    </>
  );
};

export default SpinningBox;
