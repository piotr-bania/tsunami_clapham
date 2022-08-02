import {Canvas} from '@react-three/fiber'

const Slider = () => {
return (
<Canvas>
  <pointLight position={[10, 10, 10]} />
  <mesh>
    <planeBufferGeometry args={[3, 5]} />
    <meshStandardMaterial color='blue' />
  </mesh>
</Canvas>
)
}

export default Slider