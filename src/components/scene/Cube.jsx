import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cube() {

    const cubeRef = useRef();

    useFrame(() => {
        cubeRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={cubeRef} rotation={[10.5, 0.5, 20]} scale={[3, 1, 2]}>
            <boxGeometry />
            <meshStandardMaterial color="green" />
        </mesh>
    );
}

export default Cube;