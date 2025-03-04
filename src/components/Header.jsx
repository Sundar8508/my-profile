import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import bgImage from "../Images/home-bg.jpg";
import image from "../Images/profile.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg py-3 px-8 flex justify-between items-center shadow-md bg-white/30">
        
        <div className="text-lg font-bold text-gray-900">Sundar M</div>

        
        <div className="hidden md:flex gap-10 text-gray-900 font-medium tracking-wider text-sm md:text-base">
          {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={800}
              offset={-70}
              className="cursor-pointer hover:text-blue-600 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        
        <button className="md:hidden text-gray-900 text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-300 shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-70}
                className="cursor-pointer text-gray-900 hover:text-blue-600 transition-all text-lg"
                onClick={() => setIsOpen(false)} 
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="relative min-h-screen flex items-center justify-center px-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/30  p-10 rounded-lg shadow-lg">
          
          <div className="text-left">
            <h2 className="text-lg md:text-base text-blue-600 font-bold tracking-wider">
              SUNDAR.M
            </h2>

            <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mt-1 leading-tight">
              Full-stack Developer
            </h1>
            <p className="mt-3 text-gray-700 text-base md:text-lg">
              Passionate about crafting scalable web applications & APIs.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex gap-4">
              <a
                href="https://1drv.ms/b/s!AsQUUcJznVpjkYVUKjOuPVIj1QRK5g?e=sSx4Gc"
                download
                className="px-5 py-2 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-blue-600 hover:text-white transition-all text-sm md:text-base"
              >
                View Resume
              </a>
              <a
                href="http://www.linkedin.com/in/sundar-m85"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-blue-600 hover:text-white transition-all text-sm md:text-base"
              >
                LinkedIn
              </a>
            </div>
          </div>

          
          <div className="flex justify-center">
            <img
              src={image}
              alt="Profile"
              className="rounded-lg border-4 border-r-8 border-gray-300 shadow-xl grayscale hover:grayscale-0 transition-all duration-500 w-auto h-[350px] md:h-[400px]"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
