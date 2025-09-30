import { useState } from "react";
import { Link } from "react-router";

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styleLiNav = "font-Poppins font-semibold";

  return (
    <header className="bg-purple-900 text-white w-full flex justify-center items-center px-4 py-5 ">
      <nav className="w-full flex justify-between items-center max-w-full">
        <Link to="/">
          <h1 className="font-Poppins font-extrabold text-2xl">PJT</h1>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaXmark size={30} /> : <FaBars size={30} />}
        </button>

        <ul
          className={`${
            isOpen ? "scale-y-100" : "scale-y-0"
          } bg-purple-950 flex flex-col 
          absolute top-17.5 w-full left-0 p-4 gap-4 transition-all  duration-300 origin-top `}
        >
          <Link to="/">
            <li className={styleLiNav}>Home</li>
          </Link>
          <Link to="/projects">
            <li className={styleLiNav}>Projects</li>
          </Link>

          <Link to="/newProject">
            <li className={styleLiNav}>Novo Projeto</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
