import { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

function Scene() {
  const dLightRef = useRef();

  useHelper(dLightRef, DirectionalLightHelper, 1, "blue");

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} ref={dLightRef} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <gridHelper />
    </>
  );
}

function App() {
  const dLightRef = useRef();
  return (
    <div id="canvasContainer" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [2, 4, 5] }}>
        <color attach="background" args={["black"]} />
        <Scene />
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
