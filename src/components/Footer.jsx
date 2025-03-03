import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import footerBg from "../Images/footer-bg.jpg";



const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white py-4"
      style={{
        backgroundImage: `url(${footerBg})`, 
      }}
    >
      
      <div className="absolute inset-0 bg-gray-950 bg-opacity-50 backdrop-blur-md"></div>

      <div className="relative max-w-2xl mx-auto text-center space-y-3 px-3">
        <p className="text-xs md:text-sm opacity-75">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-xs md:text-sm">
          Made by:{' '}
          <a
            href="#"
            className=" 
             font-bold hover:text-blue-600 text-blue-500 transition duration-300"
          >
            Sundar M
          </a>
        </p>
        <div className="flex justify-center gap-3 mt-3">
          {[  
            { icon: FaGithub, link: "https://github.com/Sundar8508/final-project" },
            { icon: FaLinkedin, link: "http://www.linkedin.com/in/sundar-m85" },
            { icon: FaInstagram, link: "https://www.instagram.com/bros_vk?igsh=MWVyc3U3ajR3bGNkcw==" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white bg-gray-700 bg-opacity-50 hover:bg-blue-600 transition duration-300 transform hover:scale-105 p-1.5 rounded-full"
            >
              <Icon size={20} /> {/* Slightly smaller icons */}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
