import React, { useState } from 'react';
import DropDown from './DropDown';

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="relative">
      {/* NAVBAR */}
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyCompany</h1>

        <ul className="flex gap-8">
          <li className="cursor-pointer">Home</li>

          <li
            onClick={() => setAboutOpen(!aboutOpen)}
            className="cursor-pointer hover:text-cyan-400"
          >
            About
          </li>

          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* MEGA DROPDOWN (navbar ke niche) */}
      {aboutOpen && (
        <DropDown close={() => setAboutOpen(false)} />
      )}
    </div>
  );
}


export default Navbar;
