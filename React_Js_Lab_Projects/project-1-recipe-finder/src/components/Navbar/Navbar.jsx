import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
        <div  className=" max-w-8xl  m-auto border-2 border-red-800 p-6 ">
          <div className="flex justify-between items-center">
            <h2 className="p-4 bg-yellow-800 text-xl font-extrabold rounded-2xl">Recipe Finder</h2>
            <ul className="flex mx-4">
              <li className=" mx-2 text-lg font-semibold"><a href=""></a>Home</li>
              <li className=" mx-2 text-lg font-semibold"><a href=""></a>Saved Recipe</li>
            </ul>
          </div>

        </div>
    </div>
  );
};

export default Navbar;
