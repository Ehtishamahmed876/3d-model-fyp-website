import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from '@/components/Header';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '/lib/withSession';



function Chapter1({user}) {
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

 
  const Model9 = () => {
    const gltf = useGLTF("/models/keyboard.gltf");
    return <primitive object={gltf.scene} />;
  };
 
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
    <div className='min-h-screen bg-white'>
    <Header name={user.user.username} />
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'> 3D Models</p>
    <div className="flex flex-wrap gap-14 justify-start  pb-20 ">
        <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [0,0, 50] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>headphone</p>
    </div>

          
    

     <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model2  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>CCTV</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
        <Canvas camera={{ position: [0,0, 40] }} >
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Model3 />
          <OrbitControls />
        </Canvas>
         <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Microphone</p>
      </div>
    

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 50] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model4  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Computer Printer</p>
    </div> 
    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 20] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model5  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Mouse</p>
    </div> 



    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
    <Canvas camera={{ position: [0, 0, 10] }} >
    <ambientLight />
        <pointLight position={[50, 50, 50]} />
        <Model9  />
        <OrbitControls />
    </Canvas>
    <p className='text-center bg-black p-2 rounded-md mt-1 text-white font-serif text-lg'>Keyboard</p>
    </div> 

    <div className='border border-blue-600 bg-green-500 m-5 w-64 h-64 md:w-96 md:h-96 md:m-auto' >
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