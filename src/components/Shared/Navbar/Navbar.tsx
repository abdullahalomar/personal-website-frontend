import navItems from "@/components/navItems";
import Image from "next/image";
import light from "@/assets/icons/light-mode.png";
import dark from "@/assets/icons/dark-mode.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-primary shadow-sm lg:px-24 md:px-24 sm:px-10 sticky-top">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="text-xl text-white">Abdullah Al Omar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="">
            {/* <button>
            <Image src={light} alt="light mode" width={40} height={40} />
          </button> */}
            <button>
              <Image src={dark} alt="light mode" width={25} height={25} />
            </button>
          </div>

          <button className="px-3 py-1 rounded-md ring-offset-2 ring-2 ring-blue-400 hover:ring-4 text-white">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
