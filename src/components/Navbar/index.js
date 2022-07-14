import React from "react";
import { icons } from "react-icons";


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-neutral mb-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="#pablo">
              Company
            </a>
            <button
              className="self-center text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >   
              <img className="h-4" src='icons/hamburger.png' alt="hamburger" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="rounded-full px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-500 hover:bg-gray-200"
                  href="#pablo"
                >
                <span className="ml-0">ABOUT</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="rounded-full px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-500 hover:bg-gray-200"
                  href="#pablo"
                >
                  <span className="ml-0">OUR WORK</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="rounded-full px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-500 hover:bg-gray-200"
                  href="#pablo"
                >
                  {/* <i className="fab fa-pinterest text-lg leading-lg text-white opacity-0"></i> */}
                  <span className="ml-0">OUR TIM</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="rounded-full px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-500 hover:bg-gray-200"
                  href="#pablo"
                >
                <span className="ml-0">CONTACT</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}