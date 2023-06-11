import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';




function Chapter2() {

  const Model = () => {
    const gltf = useGLTF("/models/gamepad1.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model2 = () => {
    const gltf = useGLTF("/models/pc1.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model3 = () => {
    const gltf = useGLTF("/models/lednew.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model4 = () => {
    const gltf = useGLTF("/models/flashdrive.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model5 = () => {
    const gltf = useGLTF("/models/Webcam.gltf");
    return <primitive object={gltf.scene} />;
  };
  


  return  (
    <>
    <div className='min-h-screen'>
    <Header />
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'> 3D Models</p>
    <div className="flex flex-wrap gap-14 justify-center ">
   
    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [10,10, 10] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>GamePad</p>
      </div>

          
    

     <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [10, 10, 10] }} >
    <ambientLight />
        <pointLight position={[20, 20, 10]} />
        <Model2  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Desktop Computer</p>
    </div> 
    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [10,10, 10] }} >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model3 />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>LED</p>
      </div>
    

    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [100, 100, 100] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>USB</p>
    </div> 
    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [10, 10, 10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model5  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Webcam</p>
    </div> 
    </div>

    </div>



  </>
  )
}

export default Chapter2;