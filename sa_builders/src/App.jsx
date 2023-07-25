import { useRef, useState, Suspense, lazy, useEffect, useLayoutEffect} from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

// components import 
import SAloading from "./sa_3d/loading";



function App() {
  return (
    <div id="canvasContainer" style={{position:"fixed",top:0,left:0,width:"100vw",height:"100vh"}}>
      <Canvas camera={{ position: [0,0,15] }} legacy >
        <color attach="background" args={["black"]} />
        <Suspense fallback={<SAloading />} >
        
          
        </Suspense>
      </Canvas>      
      <div className="main ">

      </div>
    </div>
  );
}



export default App;
