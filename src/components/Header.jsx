import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './provider/AuthProviders';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import logo from '../assest/logo.png'

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  if (loading) {
    return
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    logOut()
      .then(() => { })
      .catch(error)
  }

  return (
    <nav className=" flex items-center justify-between flex-wrap bg-gray-100 p-6 ">
      <div className="flex items-center flex-shrink-0">

        <img src={logo}
          className="h-[65px] w-[65px] rounded-full inline-block border border-b-slate-200"
          alt="" />

        <h1 className="ml-4 font-bold text-red-500 text-3xl tracking-tight">Findus Toys</h1>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-red-600 border-red-600 hover:text-black hover:border-black"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${isMenuOpen ? '' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow text-center mx-auto">
        <NavLink
  exact={true}
  to="/"
  className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl"
  activeStyle={{ color: "blue" }}
>
  Home
</NavLink>
          <NavLink
            exact={true}
            to="/alltoys"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl"
            activeStyle={{ color: "blue" }}
          >
            All Toys
          </NavLink>

          <NavLink
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl"
            activeStyle="text-blue-500"
          >
            Blog
          </NavLink>

        </div>
        <div>
          {!user ? (
            <React.Fragment>
              <NavLink exact to="/register" activeStyle="text-blue-500" className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl">
                Register
              </NavLink>

              <NavLink exact to="/login" activeStyle="text-blue-500" className="block mt-4 lg:inline-block lg:mt-0 font-bold hover:text-blue-500 mr-4 text-xl">
                Sign In
              </NavLink>
            </React.Fragment>
          ) : (
            <div>
              <NavLink to="/mytoys" className="inline-block text-xl px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 last-child">My Toys</NavLink>
              <NavLink to="/addtoy" className="inline-block text-xl px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 last-child">Add A Toy</NavLink>

              <button onClick={handleLogin} className="inline-block text-xl px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 last-child">Log Out</button>

            
            {user && <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}
                src={user.photoURL}
                className="h-[45px] w-[45px] rounded-full inline-block"
                alt="" />}
           


            </div>

          )}

        </div>
        <Tooltip id="my-tooltip" />
      </div>
    </nav>
  );
};

export default Header;
