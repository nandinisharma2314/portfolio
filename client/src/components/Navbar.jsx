import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-violet-500/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Navigation Links */}
        <ul className="flex items-center gap-10 text-gray-300 font-medium">

          <li className="relative group">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>

            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link to="/projects" className="hover:text-white transition">
              Projects
            </Link>

            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>

            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl">

          <a
            href="https://github.com/nandinisharma2314"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-violet-500 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nandini8529/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-violet-500 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:nandinisharma142004@gmail.com"
            className="text-gray-300 hover:text-violet-500 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;