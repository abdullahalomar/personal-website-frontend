import Link from "next/link";

const SidebarDrawer = ({ children }) => {
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
              <Link href="/Dashboard-portfolio/blogs">About</Link>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
