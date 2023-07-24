import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";

// components import 
import SAloading from "./sa_3d/loading";
import { OrbitControls } from "@react-three/drei";



function App() {
  return (
    <div id="canvasContainer" style={{position:"fixed",top:0,left:0,width:"100vw",height:"100vh"}}>
      <Canvas camera={{ position: [0,0,15] }}>


        <color attach="background" args={["black"]} />
        <SAloading w={8.5} h={5}/>
      </Canvas>      
    </div>
  );
}



export default App;
