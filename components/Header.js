import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({name}) => {
  const router = useRouter();
     
	const onLogout = async () => {
		const resRaw = await fetch('/api/logout');
    console.log("hel",resRaw)
		const json = await resRaw.json();
		
		console.log("ee",json.isLoggedIn)
		if (json.isLoggedIn == false) {
			router.replace('/')
		}
	}
  return (
    <header className="bg-gray-900 flex justify-between items-center p-3">
   
    
       <div>
       <Link href="/home">
          <div className="flex  title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image className='rounded-lg' src={"/models/aiou.png"} alt='aiou' height={50} width={50} />
            <span className="ml-3 text-xl">BookTo3D</span>
          </div>
        </Link>
       </div>
       
      
        <div>
        <h2 className='font-serif text-3xl mr-20'>{name}</h2>

        </div>
          
       
        <div className="">
          {/* <Link href="/"> */}
            <div onClick={onLogout} className="mr-5 cursor-pointer bg-red-600 p-3 text-white">Logout</div>
          {/* </Link> */}
          {/* <Link href="/about">
            <div className="mr-5 text-white">About</div>
          </Link> */}
        </div>

    </header>
  );
};

export default Header;
