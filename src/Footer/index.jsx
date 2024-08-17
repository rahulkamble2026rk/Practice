import { Link } from 'react-router-dom';
import logo from "../assets/NGOlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D3E33] text-[#F5F7F8] py-4">
      <div className="container mx-auto max-w-7xl flex flex-wrap justify-between items-start gap-6">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-start max-w-[20%]">
          <img className="h-[120px] w-auto mb-2" src={logo} alt="HopeRise Logo" />
          <h2 className="text-xl font-semibold">HopeRise</h2>
          <p className="mt-1 text-lg">
            Small acts, when multiplied by millions of people, can transform the world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col max-w-[15%]">
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <Link to="/why-us" className="mb-1 hover:underline text-lg">Why us</Link>
          <Link to="/aboutus" className="mb-1 hover:underline text-lg">About</Link>
          <Link to="/blogs" className="mb-1 hover:underline text-lg">Blogs</Link>
          <Link to="/programs" className="mb-1 hover:underline text-lg">Programs</Link>
        </div>

        {/* Company Links */}
        <div className="flex flex-col max-w-[15%]">
          <h4 className="text-md font-semibold mb-2">Company</h4>
          <Link to="/privacy-policy" className="mb-1 hover:underline text-lg">Privacy Policy</Link>
          <Link to="/terms" className="mb-1 hover:underline text-lg">Terms</Link>
          <Link to="/support" className="mb-1 hover:underline text-lg">Support</Link>
        </div>

        {/* Contact Us Section */}
        <div className="bg-[#FFC107] p-10 rounded-lg text-[#0D3E33] max-w-[25%]">
          <h4 className="text-md font-semibold mb-2">Got questions or want to make a difference?</h4>
          <p className="mb-3 text-sm">
            We’re here to help—reach out today!
          </p>
          <Link to="/contact-us" className="bg-white text-[#0D3E33] py-1 px-3 rounded hover:bg-gray-100 font-semibold text-sm inline-block">
            Contact Us
          </Link>
        </div>
      </div>
     
      <hr className="my-4 border-gray-600" />
      <p className="text-xs text-center">&copy; 2024 HopeRise, Inc. All Rights Reserved</p>
      
      {/* Social Media Icons */}
      <div className="container mx-auto max-w-7xl mt-4 flex justify-center space-x-4 text-[#F5F7F8] text-lg">
        <Link to="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></Link>
        <Link to="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></Link>
        <Link to="#" className="hover:text-gray-400"><i className="fab fa-youtube"></i></Link>
        <Link to="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></Link>
        <Link to="#" className="hover:text-gray-400"><i className="fab fa-linkedin"></i></Link>
      </div>
    </footer>
  );
};

export default Footer;
