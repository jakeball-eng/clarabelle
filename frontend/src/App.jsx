import { Canvas } from '@react-three/fiber'
import Phone from './Components/Phone'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <div className="sm:hidden">
        <h1 className="text-3xl font-bold underline">
          Hello Small!
        </h1>
        <Navbar />
      </div>
      <div className="hidden sm:block" id='phone'>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4]
          }}
        >
          <Phone />
        </Canvas>
      </div>
    </>

  )
}

export default App
