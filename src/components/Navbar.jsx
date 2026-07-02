import { useState } from 'react';
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Nitin Bansod
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 flex flex-col items-center py-4 space-y-5 text-white">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;