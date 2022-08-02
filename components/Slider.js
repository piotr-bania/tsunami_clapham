import React from 'react'
import { Canvas } from '@react-three/fiber'

const Slider = () => {
  return (
    <Canvas className='canvasHero' style={{
                position: "absolute",
                top: "0vh",
                right: "0vw",
                width: "100vw",
                height: "100vh"
                }}>

      <ambientLight color="#8A3FFC" intensity={0.5} />
      <pointLight color="#D0D0D1" intensity={0.5} position={[-2, 1, 2]} />
      <directionalLight color="#697077" intensity={0.5} position={[-5, 0, 0]} />

      <mesh>
        <planeBufferGeometry args={[3, 5]} />
        <meshStandardMaterial color='#e7b46c' />
      </mesh>
      
    </Canvas>
  )
}

export default Slider