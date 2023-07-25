
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { TextureLoader } from "three";



export default function SAloading({size=15,ws=1,hs=1}) {
    const loader = useRef()

    const logo_tex = useLoader(TextureLoader, "public/logo_2.jpg");
    const loader_text = useLoader(TextureLoader, "public/loader.png");

    useFrame(({clock}) => {
        loader.current.rotation.z = clock.getElapsedTime() / -1.5
    })


    return (
        <>
            <mesh ref={loader}>
                <planeGeometry args={[size,size,ws,hs]} />
                <meshBasicMaterial map={loader_text}/> 
            </mesh>
            <mesh>
                <planeGeometry args={[size-6,size-10,ws,hs]} />
                <meshBasicMaterial map={logo_tex} />
            </mesh>
        </>
    )
}


