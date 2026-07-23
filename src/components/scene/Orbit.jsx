import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Orbit({
    children,
    rotationSpeed = [0, 1, 0],
    position = [0, 0, 0],
}) {

    const orbitRef = useRef();

    useFrame((state, delta) => {
        orbitRef.current.rotation.x += rotationSpeed[0] * delta;
        orbitRef.current.rotation.y += rotationSpeed[1] * delta;
        orbitRef.current.rotation.z += rotationSpeed[2] * delta;
    });

    return (
        <group
            ref={orbitRef}
            position={position}
        >
            {children}
        </group>
    );
}