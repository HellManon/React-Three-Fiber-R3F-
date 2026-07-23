import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DemoGroup from "../scene/DemoGroup";
import Ground from "../scene/Ground";
import Orbit from "../scene/Orbit";
import Sphere from "../scene/Sphere";
import "./BackgroundCanvas.css"

function BackgroundCanvas() {
    return (
        <div className="background-canvas">
            <Canvas shadows camera={{ position: [0, 0, 5] } }>
                <directionalLight
                castShadow
                position={[3, 4, 5]}
                intensity={3}
                
            />
                <DemoGroup />
                

                <Orbit rotationSpeed={[0, 1, 0]}>
                    <Sphere
                        position={[8,0,0]}
                        color="red"
                    />
                </Orbit>

                <Orbit rotationSpeed={[0,-2,0]}>
                    <Sphere
                        position={[6,0,0]}
                        color="blue"
                    />
                </Orbit>

                <Orbit rotationSpeed={[1,0,0]}>
                    <Sphere
                        position={[0,5,0]}
                        color="green"
                    />
                </Orbit>
                            
                <OrbitControls />
                <Ground />
            </Canvas>
        </div>
    );
}

export default BackgroundCanvas;