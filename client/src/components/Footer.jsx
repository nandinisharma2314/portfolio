import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
return ( <footer className="border-t border-violet-500/10 mt-20"> <div className="max-w-7xl mx-auto px-6 py-8">

    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Left */}
      <p className="text-gray-400 text-sm">
        © 2026 All Rights Reserved.
      </p>

      {/* Center */}
      <p className="text-gray-400 text-sm">
        Built with{" "}
        <span className="text-violet-400 text-lg">♡</span>
        {" "}using React & Tailwind CSS
      </p>

      {/* Right */}
      <Link
        to="/contact"
        className="text-gray-400 text-sm underline underline-offset-4 hover:text-violet-400 transition duration-300"
      >
        Let's Connect
      </Link>

    </div>

  </div>
</footer>


);
};

export default Footer;
