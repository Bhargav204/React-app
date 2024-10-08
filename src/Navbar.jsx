import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user , setUser] = useState(true);

  return (
    <div className="navbar bg-base-100 px-4 md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            <Link to={"/scan"}>Scan</Link>
          </li>
          <li>
            <Link to={"/Help"}>Help</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>

          {user?          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>:null}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/scan"}>Scan</Link>
          </li>
          <li>
            <Link to={"/Help"}>Help</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>

          {user?          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>:null}
        </ul>
      </div>
      <div className="navbar-end">
        {user? (
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Link to="/profile">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
            </Link>
          </div>
        ): (
          <Link to={'/login'}><button className="btn btn-active btn-neutral">Login</button></Link>
        ) }
      </div>
    </div>
  );
};

export default Navbar;
