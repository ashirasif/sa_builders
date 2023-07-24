import { useTexture } from "@react-three/drei"
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";



export default function SAloading({w,h,ws,hs}) {
    const logo_tex = useLoader(TextureLoader, "public/logo_2.jpg");
    return (
        <mesh>
            <planeGeometry args={[8.5,5,1,1]} />
            <meshBasicMaterial map={logo_tex} />
        </mesh>
    )
}


