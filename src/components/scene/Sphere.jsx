import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sphere({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    rotationSpeed = [0, 0, 0],
    scale = [1, 1, 1],
    color = "green",
}) {

    const sphereRef = useRef();

    useFrame((state, delta) => {
    sphereRef.current.rotation.x += rotationSpeed[0] * delta;
    sphereRef.current.rotation.y += rotationSpeed[1] * delta;
    sphereRef.current.rotation.z += rotationSpeed[2] * delta;
});

    return (
        <mesh
            ref={sphereRef}
            position={position}
            rotation={rotation}
            scale={scale}
            castShadow
        >
            <sphereGeometry args={[0.5, 32, 32]}  /> 
            <meshStandardMaterial color={color} />
        </mesh>
    );
}