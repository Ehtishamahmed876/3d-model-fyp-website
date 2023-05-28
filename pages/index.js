import Link from 'next/link';
import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';




function MyPage() {

  return  (
    <>
    <div className=' flex  flex-col  justify-between min-h-screen'>
    <Header />
    <div>
    <p className='text-center font-serif font-bold text-3xl  p-3 rounded-lg'>All Chapters</p>
    <div className='p-2 flex justify-center items-center gap-5'>
    <Link href="/chapter1">
      <div className=" border border-black h-44 w-44 md:h-72 md:w-72 bg-blue-700 rounded-lg   flex items-center justify-center">
        <div className="text-white  text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">Chapter 1</h2>
        </div>
      </div>
    </Link>
    <Link href="/chapter2">
      <div className=" border border-black h-44 w-44 md:h-72 md:w-72 bg-blue-700 rounded-lg   flex items-center justify-center">
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

export default MyPage;
