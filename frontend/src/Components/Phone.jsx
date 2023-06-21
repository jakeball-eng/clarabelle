import { Canvas } from '@react-three/fiber'
import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF('/model.gltf')

    return (
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4]
            }}
        >

            <Environment preset="city" />

            <PresentationControls
                global
                rotation={[0, - Math.PI / 8, 0]}
                polar={[- 0.4, 0.2]}
                azimuth={[- 1, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <primitive
                    object={computer.scene}
                    position-y={- 1.2}
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={1}
                        position={[0.16, 1.33, 0.08]}
                    >
                        <iframe src="http://localhost:5173" />
                    </Html>
                </primitive>
            </PresentationControls>

            <ContactShadows
                position-y={- 1.4}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />

        </Canvas>)
}