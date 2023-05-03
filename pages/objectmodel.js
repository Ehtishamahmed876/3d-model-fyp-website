import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

function Object3D(props) {
  const group = useRef()
  const object = useLoader(OBJLoader, '/models/printer.obj')
  return (
    <group ref={group} {...props}>
      <mesh>
        <bufferGeometry attach="geometry" {...object.children[0].geometry} />
        <meshStandardMaterial attach="material" {...object.children[0].material} />
      </mesh>
    </group>
  )
}
export default Object3D





