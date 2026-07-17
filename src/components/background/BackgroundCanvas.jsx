import { Canvas } from "@react-three/fiber";

function BackgroundCanvas() {
    return <Canvas>
    <mesh>
        <boxGeometry />
        <meshStandardMaterial />
    </mesh>
</Canvas>;
}

export default BackgroundCanvas;