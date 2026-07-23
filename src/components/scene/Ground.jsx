export default function Ground() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -15, 0]}
            receiveShadow
        >
            <planeGeometry args={[40, 40]} />
            <meshStandardMaterial color="lightgray" />
        </mesh>
    );
}