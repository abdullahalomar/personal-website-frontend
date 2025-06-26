"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const SidebarDrawer = ({ children }) => {
  const { logout } = useAuth();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {children}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href="/Dashboard-portfolio/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/Dashboard-portfolio/hero">Hero</Link>
            </li>
            <li>
              <Link href="/Dashboard-portfolio/about">About</Link>
            </li>
            <li>
              <Link href="/Dashboard-portfolio/projects">Project</Link>
            </li>
            <li>
              <Link href="/Dashboard-portfolio/blogs">Education</Link>
            </li>
            <li>
              <Link href="/Dashboard-portfolio/blogs">Skills</Link>
            </li>
            <li>
              <Link href="/Dashboard-portfolio/blogs">Experience</Link>
            </li>
            <li>
              <Link href="/Dashboard-portfolio/blogs">Success Stories</Link>
            </li>
            <li>
              <button onClick={logout} className="btn btn-error text-white">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
