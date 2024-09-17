import React, { useState } from "react";
import menuIcon from "../../assets/navbar/menuIcon.svg";
import profilePlaceholder from "../../assets/navbar/profilePlaceholder.png";
import chevronUp from "../../assets/navbar/chevronUp.svg";
import creatowLogo from "../../assets/navbar/creatowLogo.svg";
import ConditionalNavbar from "./conditionalNavbar";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-[#010314] flex justify-between items-center lg:items-start gap-3 py-2 px-4 md:px-8 lg:h-16">
        {/* Hamburger menu - visible only on mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <img src={menuIcon} alt="" />
        </button>

        {/* Logo and links - visible only on desktop */}
        <div className="hidden lg:flex w-1/3 text-white justify-left items-center gap-8 my-auto">
          <a href="/">
            <img src={creatowLogo} alt="company-logo" />
          </a>
          <a href="">Explore</a>
          <a href="/vault">Vault</a>
        </div>

        {/* Searchbar - always visible */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Collection, item or user"
          className="my-auto lg:w-1/3 w-4/5 max-w-[442px] bg-[#2B225B] bg-search-bar-icon bg-no-repeat bg-[12px_center] rounded-[48px] py-3 px-3 pl-10 text-[#9A8FFF] font-readex-pro text-sm outline-none"
        />

        {/* Small profile icon - visible only on mobile
        <button className="lg:hidden rounded-full overflow-hidden">
          <img src={profilePlaceholder} alt="" />
        </button> */}

        {/* Elixir count and dropdown - visible only on desktop */}
        <div className="hidden lg:flex w-1/3 justify-end my-auto">
          <ConditionalNavbar />
        </div>
      </nav>
      {/* Hamburger menu content */}
      {isOpen && (
        <div className="text-white bg-[#010314] flex basis-full flex-col justify-center items-center p-3">
          <a href="">Some Link</a>
          <a href="">Some Link</a>
          <a href="">Some Link</a>
          <a href="">Some Link</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
