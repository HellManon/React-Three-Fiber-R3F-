import { Canvas } from "@react-three/fiber";
import Cube from "../scene/Cube";

function BackgroundCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={2} />
            <Cube />
        </Canvas>
    );
}

export default BackgroundCanvas;