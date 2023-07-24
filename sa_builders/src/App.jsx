import { useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import "./App.css";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

function Image ({url}) {
  const tx = useLoader(TextureLoader, url)
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[0, 0, 5]} />
      <mesh>
        <planeGeometry args={[15,10,1,1]} />
        <meshBasicMaterial map={tx}/>
      </mesh>
      <OrbitControls />
      
    </>
  )
}

function SomeShit () {
  return (
    <p className="text-3xl text-black font-mono font-semibold">Hello world!</p>
  )
}

function App() {
  const dLightRef = useRef();
  return (
    <div id="canvasContainer" style={{position:"fixed",top:0,left:0,width:"100vw",height:"100vh"}}>
      <Canvas camera={{ position: [0,0,10] }}>
        <color attach="background" args={["#d9d7cc"]} />
        <Image url={"https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/301694479_559892995927519_6325463466685384380_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=frhotrRwLZAAX-oA_lO&_nc_ht=scontent.flhe5-1.fna&oh=00_AfAk3FTrkS-0jMP-V3VYj0lJwSCK4LYXJoZd7byqX4RrlQ&oe=64C1E68A"}/>
      </Canvas>
      <div className="mx-14" style={{position:"fixed",top:0}}>
      <SomeShit />
      </div>
    </div>
  );
}



export default App;
