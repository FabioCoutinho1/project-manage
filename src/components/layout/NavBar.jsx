import { useState } from "react";
import { Link } from "react-router";

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-purple-900 text-white w-full flex justify-center items-center p-4 ">
      <nav className="w-full flex justify-between items-center max-w-full">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
        </button>

        <ul
          className={`${
            isOpen ? "scale-y-100" : "scale-y-0"
          } bg-purple-950 flex flex-col 
          absolute top-13 w-full left-0 p-4 gap-4 transition-all  duration-300 origin-top `}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
