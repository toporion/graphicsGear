import React from 'react';
import logo from '../assets/logo.png'
const Menu = () => {
  const links = <>
    <li><a>Home</a></li>
    <li><a>About Me</a></li>
    <li><a>Services</a></li>
    <li><a>Blog</a></li>
    <li><a>Contact</a></li>
  </>
  return (
    <div>
      <div>
        <div className="navbar bg-slate-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52  shadow">
                {links}
              </ul>
            </div>
            <img src={logo} className='w-11' alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
           <p> Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;