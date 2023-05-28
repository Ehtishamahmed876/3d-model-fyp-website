import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';




function Chapter1() {
  const Model = () => {
    const gltf = useGLTF("/models/headphone.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model2 = () => {
    const gltf = useGLTF("/models/camera.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model3 = () => {
    const gltf = useGLTF("/models/gamepad.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model4 = () => {
    const gltf = useGLTF("/models/computerprinter.gltf");
    return <primitive object={gltf.scene} />;
  };
  


  return  (
    <>
    <div className='min-h-screen'>
    <Header />
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'> 3D Models</p>
    <div className="flex flex-wrap  justify-center ">
    <div className='border border-blue-600 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
      <Canvas camera={{ position: [0,0, 40] }} >
        <ambientLight />
        <pointLight position={[20, 20, 20]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
    <div className='border border-blue-600 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, -10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model2  />
        <OrbitControls />
    </Canvas>
    </div>


    </div>
    </div>

  </>
  )
}

export default Chapter1;