import Link from 'next/link';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '/lib/withSession';




function Home({user}) {
  console.log("user",user.user.username)

  return  (
    <>
    <div className=' flex  flex-col bg-white   justify-between min-h-screen'>
    <Header name={user.user.username} />
    <div>
    <p className='text-center font-serif font-bold text-black text-3xl  p-3 rounded-lg'>All Chapters</p>
    <div className='p-2 flex flex-col md:flex-row justify-center items-center gap-5'>
    <Link href="/chapter1">
      <div className=" border border-black  h-72 w-72 bg-green-500 rounded-lg   flex items-center justify-center">
        <div className="text-white  text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">Chapter 1</h2>
        </div>
      </div>
    </Link>
    <Link href="/chapter2">
      <div className=" border border-black  h-72 w-72 bg-green-500 rounded-lg   flex items-center justify-center">
        <div className="text-white  text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">Chapter 2</h2>
        </div>
      </div>
    </Link>

   

    </div>
    </div>
    <Footer />
    </div>
    
  </>
  )
}

export default Home;
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