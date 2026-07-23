import Ground from "./Ground";
import Atom from "./Atom";
import Sphere from "./Sphere";
import Orbit from "./Orbit";

function DemoGroup() {

    return (
        <>
            <Ground />
            
            <Sphere scale={6} color="gold"/>

            {/* Premier atome */}
            <Orbit rotationSpeed={[0, 0.2,0.8]}>
                <Atom position={[8, 0, 0]} />
            </Orbit>

            {/* Deuxième atome */}
            <Orbit rotationSpeed={[-0.4, 1, 0]}>
                <Atom position={[12, 0, 0]} />
            </Orbit>

            {/* Troisième atome */}
            <Orbit rotationSpeed={[0, 0.7, 0.7]}>
                <Atom position={[8, 0, 0]} />
            </Orbit>
        </>
    );
}

export default DemoGroup;