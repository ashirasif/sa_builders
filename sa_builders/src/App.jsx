import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div id="canvasContainer" style={{ width: "100%", height: "100%" }}>
      <Canvas>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

export default App;
