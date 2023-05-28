import Header from '../components/Header';

const About = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          We are BSCS students. .
        </p>
       
      </div>
    </div>
  );
};

export default About;
