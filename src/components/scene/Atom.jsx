import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import Cube from "./Cube";
import Orbit from "./Orbit";
import Sphere from "./Sphere";

function Atom({
    position = [0, 0, 0],
    rotationSpeed = [0, 0.3, 0],
}) {

    const atomRef = useRef();

    useFrame((state, delta) => {
        atomRef.current.rotation.x += rotationSpeed[0] * delta;
        atomRef.current.rotation.y += rotationSpeed[1] * delta;
        atomRef.current.rotation.z += rotationSpeed[2] * delta;
    });

    return (
        <group
            ref={atomRef}
            position={position}
        >

            <Cube />

            <Orbit rotationSpeed={[0, 1, 0]}>
                <Sphere
                    position={[3, 0, 0]}
                    color="red"
                />
            </Orbit>
            

        </group>
    );
}

export default Atom;