import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import SpinningBox from "./components/mesh";
import { OrbitControls, softShadows } from "@react-three/drei";

softShadows();

function App() {
  return (
    <>
      <h1>Three Js</h1>

      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>

        <SpinningBox
          position={[0, 1, 0]}
          args={[3, 2, 1]}
          color="pink"
          speed={2}
        />
        <SpinningBox position={[-3, -1, -5]} color="red" speed={6} />
        <SpinningBox position={[5, -1, -2]} color="red" speed={6} />
        <SpinningBox position={[-8, 1, -3]} color="red" speed={6} />
        <SpinningBox position={[8, 1, 3]} color="red" speed={6} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
