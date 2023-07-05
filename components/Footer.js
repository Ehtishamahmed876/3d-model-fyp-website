const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {currentYear} All Rights Reserved
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;