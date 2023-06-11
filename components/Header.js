import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image className='rounded-lg' src={"/models/aiou.png"} alt='aiou' height={50} width={50} />
            <span className="ml-3 text-xl">BookTo3D</span>
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <div className="mr-5 text-white">Home</div>
          </Link>
          <Link href="/about">
            <div className="mr-5 text-white">About</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
