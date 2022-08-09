import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const WaveShaderMaterial = shaderMaterial(
// Uniform
{
uTime: 0,
uColor: new THREE.Color(0.0, 1.0, 0.0)
},

// Vertex shader
glsl`
varying vec2 vUv;

void main() {
vUv = uv;

gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,

// Fragment shader
glsl`
precision mediump float;

uniform vec3 uColor;
uniform float uTime;

varying vec2 vUv;

void main() {
gl_FragColor = vec4(sin(vUv.x * uTime) * uColor, 1.0);
}
`
)

extend({ WaveShaderMaterial })

const Wave = () => {
const ref = useRef()
useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()))
return (
<mesh>
  <planeBufferGeometry args={[3, 5]} />
  <waveShaderMaterial uColor={"pink"} ref={ref} />
</mesh>
)
}

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

  <Suspense fallback={null}>
    <Wave />
  </Suspense>

</Canvas>
)
}

export default Slider