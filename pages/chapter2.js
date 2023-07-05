import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '/lib/withSession';



function Chapter2({user}) {

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
  
  const Model6 = () => {
    const gltf = useGLTF("/models/digitalcamera.gltf");
    return <primitive object={gltf.scene} />;
  };

  const Model8 = () => {
    const gltf = useGLTF("/models/barcodereader.gltf");
    return <primitive object={gltf.scene} />;
  };


  return  (
    <>
    <div className='min-h-screen bg-white'>
    <Header name={user.user.username}/>
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'> 3D Models</p>
    <div className="flex flex-wrap gap-14 justify-start  pb-20">
   
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [10,10, 10] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>GamePad</p>
      </div>

          
    

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [10,10, 10] }} >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model3 />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>LED</p>
      </div>
    

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [100, 100, 100] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>USB</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [20, 20, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model5  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Webcam</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model6  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Digital Camera</p>
    </div> 



    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 120] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model8  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Barcode Reader</p>
    </div> 
    </div>

    </div>



  </>
  )
}

export default Chapter2;
export const getServerSideProps = withIronSessionSsr( function ({
  req,
  res,
}) {
  const user = req.session.user
  // console.log("hello")
  

  if (user === undefined) {
      res.setHeader('location', '/')
      res.statusCode = 302
      res.end()
      return {
          props: {
              user: { isLoggedIn: false,  email: '',name:'', }

          },
      }
  }



  return {
      
      props: { user: req.session.user,},
  
  }
},
sessionOptions)