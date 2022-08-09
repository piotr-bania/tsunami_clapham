import { Canvas, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

const WaveShaderMaterial = shaderMaterial(
  // Uniform
{},

// Vertex shader
glsl`
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,

// Fragment shader
glsl`
void main() {
  gl_FragColor = vec4(0.0, 0.4, 1.0, 1.0);
}
`
)

extend({ WaveShaderMaterial })

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
    <waveShaderMaterial color="red" />
  </mesh>

</Canvas>
)
}

export default Slider