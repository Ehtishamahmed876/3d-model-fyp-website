import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';




function Chapter1() {
  const models = [
    { type: "headphone", url:"/models/headphone.gltf"
  },
    { type: "camera", url:"/models/camera.gltf" ,}
 
  ];
   
  const Model = () => {
    const gltf = useGLTF("/models/headphone.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model2 = () => {
    const gltf = useGLTF("/models/cctv.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model3 = () => {
    const gltf = useGLTF("/models/microphone.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model4 = () => {
    const gltf = useGLTF("/models/printer.gltf");
    return <primitive object={gltf.scene} />;
  };

 
  const Model5 = () => {
    const gltf = useGLTF("/models/mouse1.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model6 = () => {
    const gltf = useGLTF("/models/digitalcamera.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model7 = () => {
    const gltf = useGLTF("/models/barcodereader.gltf");
    return <primitive object={gltf.scene} />;
  };
  const Model8 = () => {
    const gltf = useGLTF("/models/barcodereader.gltf");
    return <primitive object={gltf.scene} />;
  };

  // const Model9 = () => {
  //   const gltf = useGLTF("/models/led.gltf");
  //   return <primitive object={gltf.scene} />;
  // };
 
  const Model10 = () => {
    const gltf = useGLTF("/models/projector1.gltf");
    return <primitive object={gltf.scene} />;
  };
  
  const Model11 = () => {
    const gltf = useGLTF("/models/speaker.gltf");
    return <primitive object={gltf.scene} />;
  };

// chapter 1

 
 

 
  


  return  (
    <>
    <div className='min-h-screen'>
    <Header />
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'> 3D Models</p>
    <div className="flex flex-wrap gap-14  justify-center ">
    
     
        <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [0,0, 50] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>headphone</p>
      </div>

          
    

     <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model2  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>CCTV</p>
    </div> 
    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [0,0, 40] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model3 />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Microphone</p>
      </div>
    

    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 50] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Computer Printer</p>
    </div> 
    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model5  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Mouse</p>
    </div> 

    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model6  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Digital Camera</p>
    </div> 



    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 120] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model8  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Barcode Reader</p>
    </div> 

    {/* <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, -10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model9  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>CCTV</p>
    </div>  */}

    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [40, 40, 40] }} >
    <ambientLight />
        <pointLight position={[40, 40, 40]} />
        <Model10  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Projector</p>
    </div> 

    <div className='border border-blue-600 bg-blue-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [400,400, 300] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model11  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Speaker</p>
    </div> 


    </div>
    </div>

  </>
  )
}

export default Chapter1;