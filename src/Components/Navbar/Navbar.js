import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <section className="py-3">
      <nav className="flex items-center text-white justify-between">
        <img className="h-9" src={logo} alt="" />
        <div className="">
          <ul className="flex items-center text-sm justify-between gap-x-4">
            <li>
              {" "}
              <Link to="#">Audit Services</Link>
            </li>
            <li>
              {" "}
              <Link to="#">Pricing</Link>
            </li>
            <li>
              {" "}
              <Link to="#">Blogs</Link>
            </li>
            <li>
              {" "}
              <Link to="#">Resources</Link>
            </li>
            <li>
              <button className="btn_blue">Portfolio</button>
            </li>
            <li>
              <button className="bg-gradient-to-r  from-indigo-500 to-sky-500 text-white rounded-xl py-2.5 px-10">
                Request An Audit
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
