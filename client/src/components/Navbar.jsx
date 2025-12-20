import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-primary z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-light text-xl font-bold">MahimaDev</h1>

        <ul className="flex gap-6 text-light">
          <li><a href="#home" className="hover-text-secondary">Home</a></li>
          <li><a href="#projects" className="hover-text-secondary">Projects</a></li>
          <li><a href="#expertise" className="hover-text-secondary">Expertise</a></li>
          <li><a href="#skills" className="hover-text-secondary">Skills</a></li>
          <li><a href="#contact" className="hover-text-secondary">Contact</a></li>

          <li>
            <Link
              to="/admin/login"
              className="border border-secondary px-4 py-1 rounded-full text-sm hover:bg-secondary hover:text-primary transition"
            >
              Admin
            </Link>
          </li>
         

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
