
import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';




function MyPage() {
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
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'>MY 3D Models</p>
    <div className="flex  justify-center ">
    <div className='border border-blue-600 m-5' style={{ width: '400px', height: '400px', margin: 'auto' }}>
      <Canvas camera={{ position: [0,0, 40] }} >
        <ambientLight />
        <pointLight position={[20, 20, 20]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>
    <div className='border border-blue-600 m-5' style={{ width: '400px', height: '400px', margin: 'auto' }}>
    <Canvas camera={{ position: [0, 0, -10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model2  />
        <OrbitControls />
    </Canvas>
    </div>
    <div className='border border-blue-600 m-5' style={{ width: '400px', height: '400px', margin: 'auto' }}>
    <Canvas camera={{ position: [0, 0, 15] }} >
    <ambientLight />
        <pointLight position={[20, 20, 20]} />
        <Model3  />
        <OrbitControls />
    </Canvas>
    </div>

    </div>
    <div className="flex  justify-center p-2 ">
    <div className='border border-blue-600 m-5' style={{ width: '400px', height: '400px', margin: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 50] }} size={[2000, 1600]}>
        <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4 />
        <OrbitControls />
      </Canvas>
    </div>
  

    </div>

  </>
  )
}

export default MyPage;
