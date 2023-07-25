import { useRef, useState, Suspense, lazy, useEffect, useLayoutEffect} from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

// components import 
import SAloading from "./sa_3d/loading";
import NavBar from "./dom_comps/nav_bar";
// const Tester = lazy(() => delayForDemo(import("./testing_helpers/testers")));
// console.log(Tester)
// function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 5000);
//   }).then(() => promise)
// }

function App() {
  return (
    <div id="canvasContainer" style={{position:"fixed",top:0,left:0,width:"100vw",height:"100vh"}}>
      <Canvas camera={{ position: [0,0,15] }} >
        <color attach="background" args={["black"]} />
        <Suspense fallback={<SAloading />} > 
        
        </Suspense>
      </Canvas>      
      <div className="fixed top-0 left-3 container w-screen">
      <NavBar cont={{
        PROJECT:"",
        "BUY/SELL PROPERTY":"",
        ARCHITECTURE:"",
        FURNITURE:"",
        CONTACT: ""
      }}/>
      </div>
    </div>
  );
}



export default App;
