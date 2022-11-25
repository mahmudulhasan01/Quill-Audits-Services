import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderBannar from "./HeaderBannar";
import Achievement from "../Achievement/Achievement";

function Header() {
  return (
    <header className="">
      <Navbar></Navbar>
      <HeaderBannar></HeaderBannar>
      <Achievement></Achievement>
    </header>
  );
}

export default Header;
