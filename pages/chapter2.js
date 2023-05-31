import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';




function Chapter2() {

  const Model = () => {
    const gltf = useGLTF("/models/gamepad.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model2 = () => {
    const gltf = useGLTF("/models/cpu.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model3 = () => {
    const gltf = useGLTF("/models/laptop.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model4 = () => {
    const gltf = useGLTF("/models/usb.gltf");
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
        <Canvas camera={{ position: [0,0, 20] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>GamePad</p>
      </div>

          
    

     <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 15] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model2  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>CPU</p>
    </div> 
    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [0,0, -250] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model3 />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Desktop Computer</p>
      </div>
    

    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 150] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>USB</p>
    </div> 
    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 20] }} >
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